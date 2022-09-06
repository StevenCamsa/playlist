const UC_updateUser = ({userDb, updateUserEntity}) => {
    return async function patch(data) {

        const { username, password, role, id } = data


    
      
        const prevData = await userDb.getUserbyID({ id })
        // console.log(userid);
        console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const entity = await updateUserEntity({ data })
        const result = await userDb.UpdateUser({

            userid:id,
            username: entity.getUsername(),
            password:entity.getPassword(),
            role: entity.getRole(),})

        .catch(e => console.log("error", e));
    


        if(result){
            return {
                message:"Updated Successfully",
                result
 
            }
        }else{
            throw new Error("Failed to update")

        }
    
        
    }
}
module.exports = UC_updateUser;