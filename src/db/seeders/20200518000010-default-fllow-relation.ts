import { QueryInterface } from 'sequelize';
import { FollowRelation, User } from '../index';

const tableName = 'FollowRelations';
/* TODO: change seeds for production */
const records = [
  {
    userId: 1,
    followerId: 2,
  },
];

export const up = async (queryInterface: QueryInterface, Sequelize) => {
  const kojiro = await User.findOne({ where: { name: '小次郎' } });
  const kotaro = await User.findOne({ where: { name: '小太郎' } });
  return FollowRelation.create({ userId: kotaro.id, followerId: kojiro.id });
};

export const down = (queryInterface, Sequelize) => {
  return FollowRelation.destroy({ where: {} });
};
