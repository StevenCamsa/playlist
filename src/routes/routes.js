const express = require('express');
const router = express.Router();

const makeExpressCallback = require('../express-callback/index');
const 
{
    C_getUser,
    C_createUser,
    C_getID,
    C_updateUser,
    C_deleteUser
}

= require('../controller/account/index')



//get

router.get("/api/account",makeExpressCallback(C_getUser))

router.post("/api/create", makeExpressCallback(C_createUser))

router.get("/api/account/:id", makeExpressCallback(C_getID))

router.put("/api/updateUser/:id", makeExpressCallback(C_updateUser))

router.delete("/api/delete/:id", makeExpressCallback(C_deleteUser))




module.exports = router