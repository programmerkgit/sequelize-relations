import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Blog } from '../index';
import { Tag } from './tag.model';

@Table({
  paranoid: true,
})
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
