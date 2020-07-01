import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Blog } from './blog.model';
import { Session } from './session.model';


@Table
export class BlogVisit extends Model<BlogVisit> {


  @ForeignKey(() => Blog)
  @Column(DataType.INTEGER)
  blogId: string;

  @BelongsTo(() => Blog)
  blog: Blog;

  @ForeignKey(() => Session)
  @Column(DataType.INTEGER)
  sessionId: string;

  @BelongsTo(() => Session)
  session: Session;

}
