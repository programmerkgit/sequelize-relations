import { QueryInterface } from 'sequelize';
import { Blog, BlogTag, Tag } from '../index';

export const up = async (queryInterface: QueryInterface, Sequelize) => {
  const tag = await Tag.findOne({ where: { name: 'blockchain' } });
  const blog = await Blog.findOne();
  return blog.$add('tags', [tag]);
};

export const down = (queryInterface, Sequelize) => {
  return BlogTag.destroy({ where: {} });
};
