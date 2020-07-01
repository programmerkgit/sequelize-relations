import { QueryInterface } from 'sequelize';

const tableName = 'BlogVisits';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    sessionId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        key: 'id',
        model: 'sessions',
      },
    },

    blogId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        key: 'id',
        model: 'blogs',
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
