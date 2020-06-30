import { QueryInterface } from 'sequelize';

const tableName = 'Users';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    partnerId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        key: 'id',
        model: 'Users',
      },
    },

    parentId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        key: 'id',
        model: 'Users',
      },
    },

    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
  });
};

export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable(tableName);
};
