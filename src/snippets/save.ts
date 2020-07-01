import { User } from '../db';

User.create({name: "unko"}).then(v => {
  console.log(v.id)
})
