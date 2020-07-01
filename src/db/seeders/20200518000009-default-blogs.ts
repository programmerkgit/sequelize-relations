import { QueryInterface } from 'sequelize';
import { Blog } from '../index';

const tableName = 'FollowRelations';
/* TODO: change seeds for production */
const records = [
  {
    userId: 1,
    followerId: 2,
  },
];

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return Blog.bulkCreate([
    {
      title: 'blog1',
    },
    {
      title: 'blog2',
    },
  ]);
};

export const down = (queryInterface, Sequelize) => {
  return Blog.destroy({
    where: {}
  });
};
