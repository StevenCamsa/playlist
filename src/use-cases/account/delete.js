const UC_deleteUser = ({userDb}) =>{
    return async function getUserbyID(userid) {


        const result = await userDb.DeleteUser({userid})
        .catch(e => console.log("error", e));
   
        if(result){
            return result
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = UC_deleteUser