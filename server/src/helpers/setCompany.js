import fs from 'fs';
import util from 'util';
import { updateCompany } from '../storage/companies';

const writeFile = util.promisify(fs.writeFile);

export default async function setCompany(company) {
  const companies = await updateCompany(company);
  return writeFile(`./data/companies/${company.id}.json`, JSON.stringify(company));
}
