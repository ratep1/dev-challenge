import fs from 'fs';
import util from 'util';
import getUsers from '../../../storage/users';

const readDir = util.promisify(fs.readdir);

export default async function companies(root, args, { ctx }, info) {
  const files = await readDir('./data/users');

  const users = await getUsers();

  return Promise.all(users)
  .then(entities => {
    return entities.map(user => user.address);
  })
  .catch(error => {
    throw error;
  })
}
