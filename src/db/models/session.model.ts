import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';


@Table
export class Session extends Model<Session> {

  @Column(DataType.DATE)
  start: Date;

  @Column(DataType.DATE)
  end: Date;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: string;

  @BelongsTo(() => User)
  user: User[];

}
