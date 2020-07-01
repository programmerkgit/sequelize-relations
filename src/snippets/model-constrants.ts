/* validation is before saved to database */
/* validation doesn't occur when model is created. */

import { User } from '../db';

const u = User.build();
u.name = null;
