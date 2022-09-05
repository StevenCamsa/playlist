const createUser = ({userDb, makeAccountEntity}) => {

    return async function add (data) {
       
            const {username} = data;
            let result = {};

            const isExisting = await userDb.isExisting({username})
            .catch(e => console.log(e));

            if(isExisting.rowCount > 0){
                throw new Error("Account already Exist")
            }

            const entity = await makeAccountEntity({ data })
            .catch(e => console.log(e))
     
            // console.log(isExisting)

            const res = await userDb.createUser({

                username: entity.getUsername(),
                password:entity.getPassword(),
                role: entity.getRole(),
                status: entity.getStatus()
            })
            .catch(e => console.log(e))
            

            if(res){
                console.log(res);
                return res
                
            }else{
                throw new Error ("Failed to register Account");
            }
            
      
        
    }
}
module.exports = createUser;