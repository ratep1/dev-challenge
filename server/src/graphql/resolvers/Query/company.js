import { getCompany, decodeId } from '../../../helpers';

export default async function company(root, { id }, { ctx }, info) {
  const decodedId = decodeId(id)
  const company = await getCompany(decodedId);
  return company;
}
