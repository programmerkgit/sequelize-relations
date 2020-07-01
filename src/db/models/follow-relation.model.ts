import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';


export type UserRole = 'apiAdmin' | 'general'

@Table
export class FollowRelation extends Model<FollowRelation> {


  @ForeignKey(() => User)
  @Column
  followerId: string;

  @BelongsTo(() => User, { onDelete: 'cascade', foreignKey: 'followerId' })
  follower: User;

  @BelongsTo(() => User, { onDelete: 'cascade', foreignKey: 'userId' })
  user: User;

  @ForeignKey(() => User)
  @Column
  userId: string;

}
