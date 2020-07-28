import { User } from '../../db';

const user = User.build();
/**
 * Default values are set at build time.
 * Age is set 0 at build time.
 * */

/** @Default(DataType.Now) is set at build
 * default: Sequelize.fn("now") is set at save
 * */
console.log(user.toJSON());
