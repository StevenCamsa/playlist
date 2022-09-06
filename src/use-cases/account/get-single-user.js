const UC_getsingleUser = ({userDb}) =>{
    return async function getUserbyID(userid) {


        const result = await userDb.getUserbyID({userid})
        .catch(e => console.log("error", e));
   
        if(result){
            return result
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = UC_getsingleUser