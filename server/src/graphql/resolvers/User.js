import { getUser, getCompany, encodeId } from '../../helpers';

// todo: 5. it would be nicer to return a base62 value for the id field instead of a base16 uuid.
// ideally this would be implemented without changing the underlaying data, in a reusable way.
// Sending data to the client side should convert a base16 uuid to a base62 string, and inputting
// into the graphql api should convert a base62 string back to a base16 uuid

export default {
  id:  async (root, args, { ctx }, info) => {
    let id = root ? root.id : null;

    if (root.id && typeof root.id === 'string') {
      id = encodeId(root.id);
    }

    return id;
  },
  friends: async (root, args, { ctx }, info) => {
    let friends = [];
    if (root.friends) {
      for(let i = 0; i < root.friends.length; i++) {
        const friend = await getUser(root.friends[i]);
        friends.push(friend);  
      }
    }

    return friends;
  },
  company: async (root, args, { ctx }, info) => {
    let company = null;

    if (root.company) {
      company = await getCompany(root.company);
    }

    return company;
  }
};
