import { User } from '../db';

User.findByPk(1, {
  include: [ {
    model: User,
    as: 'parent',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find One with parent');
});

User.findByPk(1, {
  include: [ {
    model: User,
    as: 'following',
  }, {
    model: User,
    as: 'followers',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find with following, followers');
});

User.findByPk(2, {
  include: [ {
    model: User,
    as: 'following',
  }, {
    model: User,
    as: 'followers',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find with following, followers');
});


User.findByPk(3, {
  include: [ {
    model: User,
    as: 'children',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find with children');
});

User.findByPk(4, {
  include: [ {
    model: User,
    as: 'partner',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find wit partner');
});
