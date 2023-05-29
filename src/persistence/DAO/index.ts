import { options } from '../../configs/envConfigs';
import { OfferManager } from './offer.dao';
import {UserManager} from './user.dao'

export  const userManager = new UserManager(options.sqlite,"user");
export const offerManager = new OfferManager(options.sqlite,"offer")