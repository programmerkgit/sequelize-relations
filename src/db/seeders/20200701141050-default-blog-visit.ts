import { QueryInterface } from 'sequelize';
import { Blog, BlogVisit, Session } from '..';

const tableName = 'BlogVisit';
/* TODO: change seeds for production */

export const up = async (queryInterface: QueryInterface, Sequelize) => {
  const session = await Session.findOne();
  const blog = await Blog.findOne();
  return session.$set('blogs', blog);
};

export const down = (queryInterface, Sequelize) => {
  return Session.destroy({ where: {}, force: true });
};
