import { setUser, getUser } from '../../../helpers';

export default function User(root, { user }, { ctx }, info) {
  // todo: 1 this throws a unfriendly (and potentially unsafe) error if a non-existnant user ID is entered.
  // how can we check for a non-existing user id and throw a more friendly error.

  // todo: 2 why is this update overwriting existing user data? Need to fix this so that just data input is
  // updated rather than overwritting all the data.

  return getUser(user.id)
  .then(async existingUser => {
    if(existingUser) {
      const newUser = { ...existingUser, ...user };
      await setUser(newUser);

      return true;
    }
    else {
      throw new Error(`User with id ${user.id} does not exists`);
    }
  })
  .catch(error => {
    throw new Error(`User with id ${user.id} does not exists`);
  });
}
