import { Session, User } from '../../db';

/**
 * Eager loading is the act of querying data of several associated models at once.
 * At the SQL model, this is query with one or more joins.
 *
 * You can use `include` option on find query (such as findByPk, findOne, findAll, etc) to use eager loading.
 * Example:
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
 */
User.findByPk(1, {
  include: [ {
    model: Session,
  } ],
}).then(v => {
  console.log(v.toJSON());
});
