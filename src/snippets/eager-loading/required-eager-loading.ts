/**
 * Required eager loading return only records which have an associated model.
 * At SQL Level, Required eager loading is INNER JOIN.
 *
 * You can use required eager loading with `required: true` option.
 *
 * ```typescript
 * User.findAll({
 *   include: {
 *     model: Book,
 *     required: true
 *   }
 * })
 * ```
 * */

import { Session, User } from '../../db';

User.findAll({
  include: [ {
    model: Session,
    required: true,
  } ],
}).then(users => {
  console.log(users.map(user => user.toJSON()));
});
