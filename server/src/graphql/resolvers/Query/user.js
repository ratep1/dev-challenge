import { getUser, decodeId } from '../../../helpers';

export default async function user(root, { id }, { ctx }, info) {
  const decodedId = decodeId(id)
  const user = await getUser(decodedId);
  return user;
}
