import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { FollowRelation } from './models/follow-relation.model';
import { Blog } from './models/blog.model';
import { Session } from './models/session.model';
import { BlogVisit } from './models/blog-visit.model';
import { CommentModel } from './models/comment.model';
import { Tag } from './models/tag.model';
import { BlogTag } from './models/blog-tag.model';
import config = require('./config/config');

const dbOption = config[ process.env.NODE_ENV || 'development' ];

const sequelize = new Sequelize({
  ...dbOption,
  models: [ User, FollowRelation, Blog, Session, BlogVisit, CommentModel, Tag, BlogTag ],
});

export { User, FollowRelation, Blog, Session, BlogVisit, CommentModel, Tag, BlogTag };
