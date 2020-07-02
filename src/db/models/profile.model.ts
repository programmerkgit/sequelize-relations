import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  paranoid: true,
})
export class Profile extends Model<Profile> {
  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
