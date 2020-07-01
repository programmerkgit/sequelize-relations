import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table
export class Blog extends Model<Blog> {

  @Column(DataType.TEXT)
  title: string;

}
