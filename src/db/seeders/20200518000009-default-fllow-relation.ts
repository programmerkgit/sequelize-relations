import { QueryInterface } from 'sequelize';

const tableName = 'FollowRelations';
/* TODO: change seeds for production */
const records = [
  {
    userId: 1,
    followerId: 2,
  },
];

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.bulkInsert(tableName, records);
};

export const down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete(tableName, {
    id: records.map(r => 1),
  });
};
