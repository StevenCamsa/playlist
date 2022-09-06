const connect = require('../../config/db')

const userDb = () => {
    return Object.freeze({
        getUser,
        createUser,
        isExisting,
        getUserbyID,
        UpdateUser,
        DeleteUser
    
    });
};


async function getUser(){
    const con = await connect()
    return con.query(`SELECT * FROM account WHERE status = 'active'`)
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


async function getUserbyID({ userid }) {
    const con = await connect()
    const sql = `SELECT * FROM account WHERE account_id = $1`
    const params = [ userid.id]
try{

    const result = await con.query (sql, params)
    return result.rows

}catch (error){
    console.log("Error: ", error);
}
}

async function UpdateUser({userid, username, password,role}) {
    const con = await connect()
    const sql = `UPDATE account a1 SET username = $1, password = $2, role = $3 FROM account a2 WHERE a1.account_id = $4 AND a2.account_id = a1.account_id returning a2.account_id as old_id, a2.username as old_username, a2.password as old_password, a2.role as old_role, a1.account_id as new_id, a1.username as new_username, a1.password as new_password, a1.role as new_role`
    const params = [username, password, role, userid]

    try {
        const result = await con.query(sql, params)
        return  result.rows
    } catch (error) {
        console.log("Error: ", error); 
    }
}

async function DeleteUser({userid}) {
    const con = await connect()
    const sql = `Update account SET status = $1 where account_id = $2 RETURNING *`
    const params = ["inactive", userid.id]

    try {
        const result = await con.query(sql, params)
        return  result.rows
    } catch (error) {
        console.log("Error: ", error); 
    }
}


module.exports = userDb;