import { AllowNull, BelongsToMany, Column, DataType, Default, Model, Table } from 'sequelize-typescript';
import { Blog } from './blog.model';
import { BlogTag } from './blog-tag.model';

@Table
export class Tag extends Model<Tag> {

  @AllowNull(false)
  @Default('')
  @Column(DataType.TEXT)
  name: string;

  @BelongsToMany(() => Blog, () => BlogTag)
  blogs: Blog[];

}
