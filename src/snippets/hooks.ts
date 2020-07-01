import { AfterCreate, BeforeValidate, Model, Table } from 'sequelize-typescript';
import { User } from '../db';


@Table({
  paranoid: true,
})
export class HooksSample extends Model<HooksSample> {

  @BeforeValidate
  static test(instance: User) {
    instance.name = '';
  }

  @AfterCreate
  static test2(instance: User) {
    return;
  }

}
