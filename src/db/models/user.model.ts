import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FollowRelation } from './follow-relation.model';


@Table
export class User extends Model<User> {

  @Default(DataType.INTEGER)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => User)
  @Column
  partnerId: string;

  @BelongsToMany(() => User, {
    through: () => FollowRelation,
    foreignKey: 'userId',
    as: 'followers',
    otherKey: 'followerId',
  })
  followers: User[];

  @BelongsToMany(() => User, {
    through: () => FollowRelation,
    foreignKey: 'followerId',
    as: 'following',
    otherKey: 'userId',
  })
  following: User[];

  @HasOne(() => User, { as: 'partner', foreignKey: 'partnerId' })
  partner: User;

  @ForeignKey(() => User)
  @Column
  parentId: string;

  @BelongsTo(() => User, { as: 'parent', foreignKey: 'parentId' })
  parent: User;

  @HasMany(() => User, { as: 'children', foreignKey: 'parentId' })
  children: User[];


  @AllowNull(false)
  @Column
  name: string;

}
