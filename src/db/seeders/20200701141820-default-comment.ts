import { QueryInterface } from 'sequelize';
import { Blog } from '..';
import { CommentModel } from '../models/comment.model';


export const up = async (queryInterface: QueryInterface, Sequelize) => {
  const blog = await Blog.findOne();
  return CommentModel.create({ commentableType: 'Blog', commentableId: blog.id });
};

export const down = (queryInterface, Sequelize) => {
  return CommentModel.findOne().then(c => {
    return c.getCommentable().then(blog => {
      return Promise.all([
        blog.destroy(),
        c.destroy(),
      ]);
    });
  });
};
