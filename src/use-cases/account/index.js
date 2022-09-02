const userDb = require('../../data-access/account/index');
const UCgetuser = require('./account');
const createAccount = require('./create-account');
const {makeAccountEntity} = require('../../entities/account/index.js');



const getUser = UCgetuser({userDb});
const createUser = createAccount({userDb, makeAccountEntity})


const accountService = Object.freeze({
    getUser,
    createUser

})

module.exports = accountService;
module.exports = {
    getUser,
    createUser

};