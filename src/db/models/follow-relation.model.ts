import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';


export type UserRole = 'apiAdmin' | 'general'

@Table
export class FollowRelation extends Model<FollowRelation> {

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  followerId: number;

  @BelongsTo(() => User, { onDelete: 'cascade', foreignKey: 'followerId' })
  follower: User;

  @BelongsTo(() => User, { onDelete: 'cascade', foreignKey: 'userId' })
  user: User;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

}
