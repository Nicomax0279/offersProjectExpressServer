import { options } from '../../configs/envConfigs';
import {UserManager} from './user.dao'

export  const userManager = new UserManager(options.sqlite,"user");