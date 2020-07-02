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

User.findByPk(2, {
  include: [ {
    model: User,
    as: 'following',
    through: {
      attributes: [],
    },
  }, {
    model: User,
    as: 'followers',
    through: {
      attributes: [],
    },
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find with following, followers without intermidiate table');
});


User.findByPk(3, {
  include: [ {
    model: User,
    as: 'children',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find with children');
});

User.findByPk(1, {
  include: [ {
    model: User,
    as: 'youngChildren',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find with youngChildren(scope association)');
});

User.findByPk(2, {
  include: [ {
    model: User,
    as: 'wife',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find including wife');
});


User.findByPk(1, {
  include: [ {
    model: User,
    as: 'husband',
  } ],
}).then(v => {
  console.log(v.toJSON(), 'find including husband');
});


/*
 The Super Many-to-Many relationship
 User.belongsToMany(Profile, { through: Grant });
 Profile.belongsToMany(User, { through: Grant });
 User.hasMany(Grant);
 Grant.belongsTo(User);
 Profile.hasMany(Grant);
 Grant.belongsTo(Profile);
 User.findAll({
  include: [
    {
      model: Grant,
      include: [User, Profile]
    },
    {
      model: Profile,
      include: {
        model: User,
        include: {
          model: Grant,
          include: [User, Profile]
        }
      }
    }
  ]
 */
