import { Response } from "express";
import { companyManager, userManager } from "../persistence/DAO/index";
import jwt from "jsonwebtoken";
import { options } from "../configs/envConfigs.js";
import bcrypt from "bcrypt";
import { LoginUser, User, jwtuser } from "../interfaces/user.js";
import { IloginCompany, company, jwtCompany } from "../interfaces/company";
import { sendCode } from "./code.service";

export const loginUser = async (user: LoginUser) => {
  try {
    if (!user.username) throw new Error("username is required");
    if (!user.password) throw new Error("password is required");
    user.username.toLowerCase();
    const founduser = await userManager.getbyUsername(user.username);
    if (founduser) {
      if (await bcrypt.compare(user.password, founduser.password)) {
        if (!founduser.active) {
          sendCode(founduser.username)
          throw new Error("active your user via email");}
        const token = generateTokenUser({
          username: user.username,
          userId: founduser.id,
          role: "user",
          career: founduser.career,
        });
        return { token: token };
      } else {
        throw new Error("credentials error");
      }
    } else {
      throw new Error("email not registered");
    }
  } catch (error) {
    throw error;
  }
};
export const signUpUser = async (user: User) => {
  try {
    if (!user.username) throw new Error("username is required");
    if (!user.password) throw new Error("password is required");
    user.username.toLowerCase();
    const foundUser = await userManager.getbyUsername(user.username);

    if (foundUser) {
      throw new Error("this email is already registered");
    } else {
      //@ts-ignore
      user.password = await bcrypt.hash(user.password, 5);
      //@ts-ignore
      user.birthdate = formateDate(user.birthdate);
      user.active = false;
      await userManager.save(user);
      await sendCode(user.username);
      return { Response: "signup successfully" };
    }
  } catch (error) {
    throw error;
  }
};
export const formateDate = (dateString: Date) => {
  try {
    const date = new Date(dateString);
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;
    let day: number = date.getDate();
    let monthString!: string;
    let dayString!: string;

    if (month < 10) {
      monthString = `0${month}`;
    } else {
      monthString = `${month}`;
    }
    if (day < 10) {
      dayString = `0${day}`;
    } else {
      dayString = `${day}`;
    }

    const formattedDate = year + "/" + monthString + "/" + dayString;

    return formattedDate;
  } catch (error) {
    throw error;
  }
};
export const verifiesToken = async (token: string) => {
  if (!token) {
    return false;
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, options.KEY, (error: any, user: any) => {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  }
};

const generateTokenUser = (user: jwtuser) => {
  const KEY = options.KEY;
  return jwt.sign(user, KEY, { expiresIn: "5h" });
};
const generateTokenCompany = (company: jwtCompany) => {
  const KEY = options.KEY;
  return jwt.sign(company, KEY, { expiresIn: "5h" });
};

export const loginCompany = async (company: IloginCompany) => {
  try {
    company.username.toLowerCase()
    const foundcompany = await companyManager.getbyUsername(company.username);

    if (foundcompany) {
      if (await bcrypt.compare(company.password, foundcompany.password)) {
        const token = generateTokenCompany({
          username: company.username,
          userId: foundcompany.id,
          role: "company",
        });
        return { token: token };
      } else {
        throw new Error("credentials error");
      }
    } else {
      throw new Error("email not registered");
    }
  } catch (error) {
    throw error;
  }
};
export const signUpCompany = async (company: company) => {
  try {
    company.username.toLowerCase()
    const foundUser = await companyManager.getbyUsername(company.username);

    if (foundUser) {
      throw new Error("this email is already registered");
    } else {
      company.password = company.password || "";
      company.password = await bcrypt.hash(company.password, 5);
      await companyManager.save(company);
      return { Response: "signup successfully" };
    }
  } catch (error) {
    throw error;
  }
};

export const activeUser = async (
  username: string
): Promise<{ msg: string }> => {
  try {
    username.toLowerCase()
    const userFound = await userManager.getbyUsername(username);
    await userManager.putById(userFound.id, { active: true });
    return { msg: "user activated successfully" };
  } catch (error) {
    throw new Error('error on auth service');
  }
};


export const changePassword = async (
  username: string, password:string
): Promise<{ msg: string }> => {
  try {
    username.toLowerCase()
    const userFound = await userManager.getbyUsername(username);
    password = await bcrypt.hash(password, 5)
    console.log(password)
    await userManager.putById(userFound.id, { password: password });
    return { msg: "user password successfully change" };
  } catch (error) {
    throw new Error('error on auth service');
  }
};