import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { FollowRelation } from './models/follow-relation.model';
import { Blog } from './models/blog.model';
import config = require('./config/config');
import { Session } from './models/session.model';
import { BlogVisit } from './models/blog-visit.model';

const dbOption = config[ process.env.NODE_ENV || 'development' ];

const sequelize = new Sequelize({
  ...dbOption,
  models: [ User, FollowRelation, Blog, Session, BlogVisit ],
});

export { User, FollowRelation, Blog, Session,BlogVisit };
