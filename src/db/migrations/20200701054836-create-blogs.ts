import { QueryInterface } from 'sequelize';

const tableName = 'Blogs';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    title: {
      allowNull: false,
      defaultValue: '',
      type: Sequelize.TEXT,
    },

    userId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      references: {
        key: "id",
        model: "Users"
      }
    },

    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
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
