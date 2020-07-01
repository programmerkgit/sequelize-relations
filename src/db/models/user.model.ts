import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Op } from 'sequelize';
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


  /* Scoped Association　*/
  @HasMany(() => User, {
    as: 'youngChildren', foreignKey: 'parentId', scope: {
      age: {
        [ Op.lte ]: 12,
      },
    },
  })
  youngChildren: User[];


  @Default(-1)
  @AllowNull(false)
  @Column
  age: number;

  @AllowNull(false)
  @Default('')
  @Column
  name: string;

  // @BeforeValidate
  // static test(instance: User) {
  //   instance.name = '';
  // }

}
