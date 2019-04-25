import getUsers from './users';
import getCompanies from './companies';

const initialize = () => {
    getUsers();
    getCompanies();
}

module.exports = initialize;