import { BelongsTo, Column, DataType, Default, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';


@Table
export class Session extends Model<Session> {

  /* DataType.NOW is set at build time. Different from database saved time */
  @Default(DataType.NOW)
  @Column(DataType.DATE)
  start: Date;

  /* DataType.NOW is set at build time */
  @Column(DataType.DATE)
  end: Date;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: string;

  @BelongsTo(() => User)
  user: User[];

}
