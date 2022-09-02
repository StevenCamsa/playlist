

const pool = require('../../config/db')
const userDb = () => {
    return Object.freeze({
        getUser,
        createUser,
        isExisting
    
    });
};

async function getUser(){
    return pool.query(`SELECT * FROM account ORDER BY account_id ASC`)
};


async function createUser({username, password, role, status}){
    
    try {

        let result 
        let sql = `INSERT INTO account(username, password, role, status) VALUES ($1, $2, $3, $4)`
     

        let params = [username, password, role, status];
        await pool.query(sql, params)
            .then(res => {
            console.log(res)
            result = res.rows
        }) 
             
            return result
  
    } catch (error) {
        console.log("Error: ", error);

    }
    
};

async function isExisting ({username}) {
    try {

        const con = await connect();
        const response = await new Promise((resolve) =>{
            let sql = `SELECT * FROM account WHERE username =$1`;
            let params = [username];
            con.query(sql, params, (err, res) => {
                con.end();
                if (err) resolve(err)
                resolve(res)
            });

        let results

        con.query(sql, params)
            .then(res => results = res.rows)
            .catch(err => console.log(err))
        })
        return response
    } catch (error) {
        
    }
}


module.exports = userDb;