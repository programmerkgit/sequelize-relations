import { User } from '../db';

/* Paranoidでcascade された時、SET NULLしたらRestoreできないことに注意 */
/* Paranoidでcascadeしたい場合はHookを使う */


/* paranoid delete */
User.findOne().then(u => {
  return u.destroy();
});

/* delete force */
User.findOne({ paranoid: true }).then(u => {
  return u.destroy({ force: true });
});

/* select all including deletedAt */
User.findAll({ paranoid: false }).then(users => {
  console.log(users.map(u => u.toJSON()));
});
