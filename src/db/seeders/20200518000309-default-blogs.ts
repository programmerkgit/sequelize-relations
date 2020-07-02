import { QueryInterface } from 'sequelize';
import { Blog, User } from '../index';

const tableName = 'FollowRelations';
/* TODO: change seeds for production */
const records = [
  {
    userId: 1,
    followerId: 2,
  },
];

export const up = async (queryInterface: QueryInterface, Sequelize) => {
  const user = await User.findOne();
  return Blog.bulkCreate([
    {
      title: 'blog1',
      userId: user.id,
    },
    {
      title: 'blog2',
      userId: user.id,
    },
  ]);
};

export const down = (queryInterface, Sequelize) => {
  return Blog.destroy({
    where: {},
  });
};
