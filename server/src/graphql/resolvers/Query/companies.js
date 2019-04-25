import getCompanies from '../../../storage/companies';

export default async function companies(root, args, { ctx }, info) {
  const companies = await getCompanies();

  let response = Object.values(companies);

  return response;
}
