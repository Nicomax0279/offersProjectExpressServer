import { offer } from "../../interfaces/offer";
import { SQLManager } from "../managers/SQLManager";
import { filters } from "../../interfaces/body";
import { CONSTRAINT } from "sqlite3";

export class OfferManager extends SQLManager {
  constructor(options: any, tableName: string) {
    super(options, tableName);
  }
  //deprecad
  async getbyCareer(career: string | undefined = undefined): Promise<offer[]> {
    try {
      const query = this.database
        .from(this.tableName)
        .select(`${this.tableName}.*`, "company.name", "company.logo")
        .innerJoin("company", "company.id", `${this.tableName}.companyID`)
        .orderBy(`${this.tableName}.updated_at`, "desc")
        .where(`${this.tableName}.active`, 1);
      let result;
      if (career) {
        result = await query.where("career", career);
      } else {
        result = await query;
      }

      const parseResult = result.map((elm: any) => ({ ...elm }));

      return parseResult;
    } catch (error) {
      throw error;
    }
  }

  async getAllWithFilters(
    filters: filters,
    userid: number = 0
  ): Promise<offer[]> {
    //console.log(filters)
    try {
    
     
      let userID = userid;
      const raw2 = this.database.raw("?", [userID]);
      let query = this.database
        .select(
          "o.*",
          "company.name",
          "company.logo",
          this.database.raw(
            "CASE WHEN i.id IS NOT NULL THEN 1 ELSE 0 END AS isInscribed"
          )
        )
        .from("offer as o")
        .leftJoin("inscription as i", function () {
          this.on("o.id", "=", "i.offerID").andOn("i.userID", "=", raw2);
        })
        .orderBy(`o.updated_at`, "desc")
        .innerJoin("company", "company.id", `o.companyID`);

      if (filters.career) {
        query = query.where("o.career", filters.career);
      }
      if (filters.companyName) {
        query = query.where("company.name", "LIKE", `%${filters.companyName}%`);
      }
      if (filters.modality) {
        query = query.where("o.modality", filters.modality);
      }
      if (filters.title) {
        query = query.where("o.title", "LIKE", `%${filters.title}%`);
      }
      query.where("o.active", "1")
      if(filters.page && filters.pageSize){
        const startIndex = (filters.page - 1) * filters.pageSize;
      query.limit(filters.pageSize)
      query.offset(startIndex);}
      let result = await query;

      const parseResult = result.map((elm: any) => ({ ...elm }));

      return parseResult;
    } catch (error) {
      throw error;
    }
  }
  
  async getOffersByCompany(companyID: Number): Promise<offer[]> {
    try {
      //,`count(${inscriptionTable}.offerID)`
      const inscriptionTable = "inscription";
      const result = await this.database
        .from(this.tableName)
        .select(`${this.tableName}.*`)
        .count(`${inscriptionTable}.id as inscriptions`)
        .leftJoin(
          inscriptionTable,
          `${inscriptionTable}.offerID`,
          `${this.tableName}.id`
        )
        .where(`${this.tableName}.companyID`, companyID)
        .groupBy(`${this.tableName}.id`)
        .where(`${this.tableName}.active`, 1);
      const parseResult = result.map((elm: any) => ({ ...elm }));

      return parseResult;
    } catch (error) {
      throw error;
    }
  }
  async getCareerById(id: number) {
    try {
      const result = await this.database
        .from(this.tableName)
        .select(`career`)
        .where("id", id);
      const parseResult = result.map((elm: any) => ({ ...elm }))[0];

      return parseResult.career;
    } catch (error) {
      //@ts-ignore
      throw error;
    }
  }
}
