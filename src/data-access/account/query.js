const connect = require('../../config/db')

const userDb = () => {
    return Object.freeze({
        getUser,
        createUser,
        isExisting,
    
    });
};


async function getUser(){
    const con = await connect()
    return con.query(`SELECT * FROM account ORDER BY account_id ASC`)
};


async function createUser({username, password, role, status}){
    const con = await connect()
    const sql = `INSERT INTO account(username, password, role, status) VALUES ($1, $2, $3, $4) RETURNING *`
    const params = [username, password, role, status];
    
    try {

        const result = await con.query(sql, params)
        return result.rows
  
    } catch (error) {
        console.log("Error: ", error);

    }
    
};

async function isExisting({username}) {
    const con = await connect()
    const sql = `SELECT * FROM account WHERE username =$1`;
    const params = [username];
    try {
        return await con.query(sql, params)

    } catch (error) {
        console.log("Error: ", error);  
    }
}






module.exports = userDb;