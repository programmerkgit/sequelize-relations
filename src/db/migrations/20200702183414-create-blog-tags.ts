import { QueryInterface } from 'sequelize';

const tableName = 'BlogTags';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    blogId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: 'blog_tag',
      references: {
        key: 'id',
        model: 'Blogs',
      },
    },

    tagId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: 'blog_tag',
      references: {
        key: 'id',
        model: 'Tags',
      },
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
