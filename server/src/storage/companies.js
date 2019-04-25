import fs from 'fs';
import util from 'util';

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

let companies = {};

const getCompanies = async () => {
    if(Object.keys(companies).length === 0) {
        const files = await readDir('./data/companies');

        const list = files.filter(filename => filename.includes('.json'));

        for(let i = 0; i < list.length; i++) {
            let company = await readFile(`./data/companies/${list[i]}`, 'utf8');
            company = JSON.parse(company);
            companies[company.id] = company;
        }
    }

    return companies;
}

const updateCompany = async (newCompany) => {
    if(!companies) {
        await getCompanies();
    }

    if(newCompany && newCompany.id) {
        const { id } = newCompany;
        companies[id] = newCompany;
    }

    return companies;
}

export { updateCompany };

export default getCompanies;