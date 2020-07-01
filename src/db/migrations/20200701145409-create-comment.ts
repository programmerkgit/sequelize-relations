import { QueryInterface } from 'sequelize';

const tableName = 'CommentModels';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    commentableId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    commentableType: {
      allowNull: false,
      type: Sequelize.ENUM('Blog', 'Comment'),
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
