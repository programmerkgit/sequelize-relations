import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { BlogVisit, Session } from '../index';
import { CommentModel } from './comment.model';


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

}
