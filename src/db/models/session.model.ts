import {
  AllowNull,
  BeforeValidate,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Blog, BlogVisit } from '../index';


@Table
export class Session extends Model<Session> {

  /* DataType.NOW is set at build time. Different from database saved time */
  @Default(DataType.NOW)
  @AllowNull(false)
  @Column(DataType.DATE)
  start: Date;

  /* DataType.NOW is set at build time */
  @AllowNull(false)
  @Column(DataType.DATE)
  end: Date;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: string;

  @BelongsToMany(() => Blog, () => BlogVisit)
  blogs: Blog[];

  @BelongsTo(() => User)
  user: User[];

  @BeforeValidate
  static setEnd(instance: Session) {
    /* if not end is set */
    if (!instance.end) {
      instance.end = new Date();
    }
  }

}
