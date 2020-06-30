import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { FollowRelation } from './models/follow-relation.model';
import config = require('./config/config');

const dbOption = config[ process.env.NODE_ENV || 'development' ];

const sequelize = new Sequelize({
  ...dbOption,
  models: [ User, FollowRelation ],
});

export { User, FollowRelation };
