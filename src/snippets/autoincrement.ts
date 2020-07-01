import { User } from '../db';

const user = User.build();
/* allow null is checked for validation */
/* auto increment id is generated when saved */
console.log(user.toJSON());
