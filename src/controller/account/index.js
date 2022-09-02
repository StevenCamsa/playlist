const CON_getUser = require ('./account.js');
const register = require('./create-account');


const {getUser, createUser} = require('../../use-cases/account/index')


const _getUser = CON_getUser({getUser});
const _createUser = register({createUser});


const CON_account = Object.freeze({

    _getUser,_createUser

});

module.exports = CON_account;
module.exports = 
{
    _getUser,
    _createUser

};
