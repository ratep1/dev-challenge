import fs from 'fs';
import util from 'util';

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

let users = {};

const getUsers = async () => {
    if(Object.keys(users).length === 0) {
        const files = await readDir('./data/users');

        const list = files.filter(filename => filename.includes('.json'));

        for(let i = 0; i < list.length; i++) {
            let user = await readFile(`./data/users/${list[i]}`, 'utf8');
            user = JSON.parse(user);
            users[user.id] = user;
        }
    }

    return users;
}

const updateUser = async (newUser) => {
    if(!users) {
        await getUsers();
    }

    if(newUser && newUser.id) {
        const { id } = newUser;
        users[id] = newUser;
    }

    return users;
}

export { updateUser };

export default getUsers;