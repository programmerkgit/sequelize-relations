import { QueryInterface } from 'sequelize';
import { Session, User } from '../index';

const tableName = 'Sessions';
/* TODO: change seeds for production */
const records = [
  {
    userId: 1,
    followerId: 2,
  },
];

export const up = async (queryInterface: QueryInterface, Sequelize) => {
  const kojiro = await User.findOne({ where: { name: '小次郎' } });
  return Session.create({
    userId: kojiro.id,
  });
};

export const down = (queryInterface, Sequelize) => {
  return Session.destroy({ where: {} });
};
