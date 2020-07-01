import {
  AfterFind,
  AllowNull,
  AssociationGetOptions,
  BelongsTo,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Blog } from '../index';

export type CommentableType = 'Blog' | 'Comment'

@Table
export class CommentModel extends Model<CommentModel> {

  @Default('')
  @AllowNull(false)
  @Column(DataType.STRING)
  commentableType: CommentableType;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  commentableId: number;

  @HasMany(() => CommentModel, { foreignKey: 'commentableId' })
  comments: CommentModel[];

  /**
   * constraints: false
   * Should on update and on delete constraints be enabled on the foreign key.
   */
  @BelongsTo(() => Blog,
    { foreignKey: 'commentableId', constraints: false, as: 'blog' },
  )
  @BelongsTo(() => CommentModel, {
    foreignKey: 'commentableId', constraints: false, as: 'comment',
  })
  commentable;

  @AfterFind
  static commentable(instance: CommentModel & { blog?: any, comment?: any }) {
    if (instance.commentableType === 'Blog' && instance.blog !== undefined) {
      instance.commentable = instance.blog;
      instance.setDataValue('commentable', instance.blog.get());
    } else if (instance.commentableType === 'Comment' && instance.comment !== undefined) {
      instance.commentable = instance.comment;
      instance.setDataValue('commentable', instance.comment.toJSON());
    }
    delete instance.comment;
    delete (instance as any).dataValues.comment;
    delete instance.blog;
    delete (instance as any).dataValues.blog;

  }

  getCommentable(options: AssociationGetOptions = {}): Promise<CommentModel | null> {
    if (!this.commentableType) return Promise.resolve(null);
    /* Commentable Type should match Blog or Comment(class name). */
    return this.$get(this.commentableType as any, options);
  }

}
