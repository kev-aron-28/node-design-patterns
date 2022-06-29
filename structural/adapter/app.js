const db = require('./database')
const dbAdapter = require('./db1');


const databaseAdapter = new dbAdapter({});
const database = new db(databaseAdapter);
database.init('users');
database.add({ collection: 'users', data: { name: 'kevin' } });
database.get('users');