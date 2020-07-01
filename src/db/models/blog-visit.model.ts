import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Blog } from './blog.model';
import { Session } from './session.model';


@Table
export class BlogVisit extends Model<BlogVisit> {

  @AllowNull(false)
  @ForeignKey(() => Blog)
  @Column(DataType.INTEGER)
  blogId: number;

  @BelongsTo(() => Blog)
  blog: Blog;

  @AllowNull(false)
  @ForeignKey(() => Session)
  @Column(DataType.INTEGER)
  sessionId: number;

  @BelongsTo(() => Session)
  session: Session;

}
