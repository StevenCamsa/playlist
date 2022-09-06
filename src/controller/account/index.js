const CON_getUser = require ('./account.js');
const register = require('./create-account');
const CON_getUserbyID = require ('./get-account-by-ID')
const CON_updateUser = require ('./update.js')
const CON_deleteUser = require ('./delete.js')


const {
    getUser, 
    createUser, 
    getUserbyID,
    updateUser,
    deleteUser
} = require('../../use-cases/account/index')


const C_getUser = CON_getUser({getUser});
const C_createUser = register({createUser});
const C_getID = CON_getUserbyID({getUserbyID});
const C_updateUser = CON_updateUser({updateUser});
const C_deleteUser = CON_deleteUser({deleteUser})


const CON_account = Object.freeze({

    C_getUser,
    C_createUser,
    C_getID,
    C_updateUser,
    C_deleteUser


});

module.exports = CON_account;
module.exports = 
{
    C_getUser,
    C_createUser,
    C_getID,
    C_updateUser,
    C_deleteUser
};
