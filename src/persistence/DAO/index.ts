import { options } from '../../configs/envConfigs';
import { CompanyManager } from './company.dao';
import { OfferManager } from './offer.dao';
import {UserManager} from './user.dao'
import {InscriptionManager} from './inscription.dao'
import {CareerManager} from './career.dao'
import {CodeManager} from './code.dao'
let DATABASE
if(options.DATABASE == 'MYSQL') DATABASE = options.Mysql
else DATABASE = options.sqlite

export const companyManager = new CompanyManager(DATABASE,"company");
export  const userManager = new UserManager(DATABASE,"user");
export const offerManager = new OfferManager(DATABASE,"offer");
export const inscriptionManager = new InscriptionManager(DATABASE,"inscription");
export const careerManager = new CareerManager(DATABASE,"career");
export const codeManager = new CodeManager(DATABASE,"code");