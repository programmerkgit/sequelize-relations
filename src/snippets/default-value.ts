import { Session, User } from '../db';


/* start and end time differs */
/* @Default(DataType.Now) is set at build */
/* default: Sequelize.fn("now") is set at save */
User.findOne({ where: { name: '小次郎' } }).then((kojiro) => {
  const s = Session.build({
    userId: kojiro.id,
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(s.save());
    }, 1000);
  });
});
