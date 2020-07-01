import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FollowRelation } from './follow-relation.model';
import { Session } from './session.model';


@Table({
  paranoid: true,
})
export class User extends Model<User> {

  @ForeignKey(() => User)
  @Column
  partnerId: string;

  @HasMany(() => Session)
  sessions: Session[];

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

  @HasOne(() => User,
    { as: 'partner', foreignKey: 'partnerId' },
  )
  partner: User;

  @ForeignKey(() => User)
  @Column
  parentId: string;

  @BelongsTo(() => User, {
    as: 'parent',
    foreignKey: 'parentId',
    hooks: true,
  })
  parent: User;

  @HasMany(() => User, {
    as: 'children', foreignKey: 'parentId',
  })
  children: User[];


  @AllowNull(false)
  @Column
  name: string;

}
