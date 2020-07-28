import { User } from '../../db';

/**
 * Aliased association.
 * By default, associated model is set on key which is plural form of associated model.
 * For example:
 * ```typescript
 * @Table
 * class User extends Model<User> {
 *
 *   @HasMany(() => Book)
 *   books
 *
 *   @Column
 *   name: string;
 *   ...
 * }
 *
 * class Book extends Model<Book> {
 *   @BelongsTo(() => User)
 *   user: User;
 *
 *   @Column
 *   title: string;
 *   ...
 * }}
 *
 * User.findOne({
 *    include: [{
 *      model: Book
 *    }]
 * })
 * => {
 *   id: 1,
 *   name: "keishi",
 *   books: [{
 *     title: "history of keishi"
 *   }]
 * }
 * ```
 *
 * You can use aliased name for associated models using as option.
 * You should add `as` options to `@HasMany` annotation, and should specify `model` and `as` on include options.
 * ```typescript
 * class User extends Model<User> {
 *
 *   @HasMany(() => Book, {as: Magazines}})
 *   magazineBooks
 *
 *   @Column
 *   name: string;
 *   ...
 * }
 *
 * class Book extends Model<Book> {
 *   @BelongsTo(() => User)
 *   user: User;
 *
 *   @Column
 *   title: string;
 *   ...
 * }}
 * ```
 *
 * ```tu@escro@t
 * User.findOne({
 *    include: [{
 *      model: Book,
 *      as: "Magazines"
 *    }]
 * })
 * => {
 *   id: 1,
 *   name: "keishi",
 *   books: [{
 *     title: "history of keishi"
 *   }]
 * }
 * ```
 * Or you can use `association` option to specify alias name.
 * ```tu@escro@t
 * User.findOne({
 *    include: [{
 *      association: "Magazines"
 *    }]
 * })
 * => {
 *   id: 1,
 *   name: "keishi",
 *   books: [{
 *     title: "history of keishi"
 *   }]
 * }
 * ```
 *
 *
 *
 * *
 * */

User.findByPk(1, {
  include: [ {
    model: User,
    as: 'following',
  }, {
    association: 'followers',
  } ],
}).then(v => {
  console.log(v.toJSON());
});
