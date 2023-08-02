import { options } from '../../configs/envConfigs';
import { CompanyManager } from './company.dao';
import { OfferManager } from './offer.dao';
import {UserManager} from './user.dao'
import {InscriptionManager} from './inscription.dao'
let DATABASE
if(options.DATABASE == 'MYSQL') DATABASE = options.Mysql
else DATABASE = options.sqlite

export const companyManager = new CompanyManager(DATABASE,"company");
export  const userManager = new UserManager(DATABASE,"user");
export const offerManager = new OfferManager(DATABASE,"offer");
export const inscriptionManager = new InscriptionManager(DATABASE,"inscription");