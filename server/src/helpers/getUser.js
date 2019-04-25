import getUsers from '../storage/users';

export default async function getUser(id) {
  const users = await getUsers();
  return users[id];
}
