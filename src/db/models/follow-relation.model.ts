import { AutoIncrement, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from './user.model';


export type UserRole = 'apiAdmin' | 'general'

@Table
export class FollowRelation extends Model<FollowRelation> {

  @Default(DataType.INTEGER)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => User)
  @Column
  followerId: string;

  @ForeignKey(() => User)
  @Column
  userId: string;


}
