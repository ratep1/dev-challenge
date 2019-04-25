import fs from 'fs';
import util from 'util';

import { updateUser } from '../storage/users';

const writeFile = util.promisify(fs.writeFile);

export default async function setUser(user) {
  const users = await updateUser(user);
  return writeFile(`./data/users/${user.id}.json`, JSON.stringify(user));
}
