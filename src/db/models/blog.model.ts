import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { BlogVisit, Session, User } from '../index';
import { CommentModel } from './comment.model';
import { Tag } from './tag.model';
import { BlogTag } from './blog-tag.model';

@Table({
  paranoid: true,
})
export class Blog extends Model<Blog> {

  @Column(DataType.TEXT)
  title: string;

  @BelongsToMany(() => Session, () => BlogVisit)
  sessions: Session[];

  @HasMany(() => CommentModel, { foreignKey: 'commentableId' })
  comments: CommentModel[];

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Tag, () => BlogTag)
  tags: Tag[];

}
