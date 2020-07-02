import { QueryInterface } from 'sequelize';
import { Tag } from '../models/tag.model';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return Tag.create({ name: 'blockchain' });
};

export const down = (queryInterface, Sequelize) => {
  return Tag.destroy({ where: {} });
};
