import { encodeId } from '../../helpers';
import getUsers from '../../storage/users';

export default {
  id:  async (root, args, { ctx }, info) => {
    let id = root ? root.id : null;

    if (root.id && typeof root.id === 'string') {
      id = encodeId(root.id);
    }

    return id;
  },
  employees:  async (root, args, { ctx }, info) => {
    let employees = [];

    const users = await getUsers();

    if (root && root.id && users) {
      employees = Object.values(users).filter(user => user.company === root.id);
    }

    return employees;
  }
};
