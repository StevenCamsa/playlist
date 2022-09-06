const userDb = require('../../data-access/account/index');
const UC_getuser = require('./account');
const UC_getsingleUser = require('./get-single-user')
const createAccount = require('./create-account');
const UC_updateUser = require('./update')
const UC_deleteUser = require('./delete')

const {
    makeAccountEntity,
    updateUserEntity
} = require('../../entities/account/index.js');



const getUser = UC_getuser({userDb});
const createUser = createAccount({userDb, makeAccountEntity})
const getUserbyID = UC_getsingleUser({userDb})
const updateUser = UC_updateUser({userDb, updateUserEntity})
const deleteUser = UC_deleteUser({userDb})


const accountService = Object.freeze({
    getUser,
    createUser,
    getUserbyID,
    updateUser,
    deleteUser

})

module.exports = accountService;
module.exports = {
    getUser,
    createUser,
    getUserbyID,
    updateUser,
    deleteUser

};