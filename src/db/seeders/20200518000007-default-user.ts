import { QueryInterface } from 'sequelize';

const tableName = 'Users';
/* TODO: change seeds for production */
const records = [
  {
    parentId: '3',
    name: '小太郎',
  },
  {
    parentId: '3',
    name: '小次郎',
  },
  {
    name: '母美',
    partnerId: 4,
  },
  {
    name: '父夫',
    partnerId: 3,
  },
];

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.removeConstraint(tableName, 'users_ibfk_2', {}).then(() => {
    return queryInterface.removeConstraint(tableName, 'users_ibfk_1', {});
  }).then(() => {
    return queryInterface.bulkInsert(tableName, records);
  }).then(() => {
    return queryInterface.addConstraint(tableName, {
      fields: [ 'parentId' ],
      type: 'foreign key',
      name: 'users_ibfk_2',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'set Null',
      onUpdate: 'cascade',
    });
  }).then(() => {
    return queryInterface.addConstraint(tableName, {
      fields: [ 'partnerId' ],
      type: 'foreign key',
      name: 'users_ibfk_1',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'set Null',
      onUpdate: 'cascade',
    });
  });
};

export const down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete(tableName, {
    id: records.map((r, i) => i + 1),
  });
};
