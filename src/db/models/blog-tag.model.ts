import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Tag } from './tag.model';
import { Blog } from './blog.model';

@Table
export class BlogTag extends Model<BlogTag> {

  @ForeignKey(() => Blog)
  @Column
  blogId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @BelongsTo(() => Blog)
  blog: Blog;

  @BelongsTo(() => Tag)
  category: Tag;

}
