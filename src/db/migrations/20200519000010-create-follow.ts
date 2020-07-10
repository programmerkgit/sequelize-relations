import { QueryInterface } from 'sequelize';

const tableName = 'FollowRelations';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: "follow",
      references: {
        key: 'id',
        model: 'Users',
      },
    },

    followerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: "follow",
      references: {
        key: 'id',
        model: 'Users',
      },
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
