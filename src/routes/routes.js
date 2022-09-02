const express = require('express');
const router = express.Router();

const makeExpressCallback = require('../express-callback/index');
const 
{
    _getUser,_createUser
}

= require('../controller/account/index')



//get

router.get("/api/account",makeExpressCallback(_getUser))

router.post("/api/create", makeExpressCallback(_createUser))

module.exports = router