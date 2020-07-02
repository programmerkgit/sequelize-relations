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

    wifeId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      unique: true,
      /* when partner deleted */
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      references: {
        key: 'id',
        model: 'Users',
      },
    },

    parentId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      references: {
        key: 'id',
        model: 'Users',
      },
    },

    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    age: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: -1,
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
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  });
};

export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable(tableName);
};
