import { User } from '../db';

User.create({name: "unkouser"}).then(v => {
  console.log(v.id)
})
