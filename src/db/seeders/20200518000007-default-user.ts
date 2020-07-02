import { QueryInterface } from 'sequelize';
import { User } from '../index';

const tableName = 'Users';
export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.sequelize.transaction(async t => {
    const mother = await User.create({ name: '母美' }, { transaction: t });
    const father = await User.create({ name: '父夫' }, { transaction: t });
    const kotaro = await User.create({ name: '小太郎', age: 20 }, { transaction: t });
    const kojiro = await User.create({ name: '小次郎' }, { transaction: t });
    await father.update({
      wifeId: mother.id,
    }, { transaction: t });
    await kotaro.update({
      parentId: mother.id,
    }, { transaction: t });
    await kojiro.update({
      parentId: mother.id,
    }, { transaction: t });
  });
  // return queryInterface.removeConstraint(tableName, 'users_ibfk_2', {}).then(() => {
  //   return queryInterface.removeConstraint(tableName, 'users_ibfk_1', {});
  // }).then(() => {
  //   return queryInterface.bulkInsert(tableName, records);
  // }).then(() => {
  //   return queryInterface.addConstraint(tableName, {
  //     fields: [ 'parentId' ],
  //     type: 'foreign key',
  //     name: 'users_ibfk_2',
  //     references: {
  //       table: 'users',
  //       field: 'id',
  //     },
  //     onDelete: 'set Null',
  //     onUpdate: 'cascade',
  //   });
  // }).then(() => {
  //   return queryInterface.addConstraint(tableName, {
  //     fields: [ 'partnerId' ],
  //     type: 'foreign key',
  //     name: 'users_ibfk_1',
  //     references: {
  //       table: 'users',
  //       field: 'id',
  //     },
  //     onDelete: 'set Null',
  //     onUpdate: 'cascade',
  //   });
  // });
};


export const down = (queryInterface, Sequelize) => {
  return User.destroy({ where: {}, force: true });
};
