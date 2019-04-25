import getCompanies from '../storage/companies';

export default async function getCompany(id) {
  const companies = await getCompanies();
  return companies[id];
}
