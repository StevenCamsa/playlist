const createUser = ({userDb, makeAccountEntity}) => {

    return async function add (data) {
        try {
            const {username} = data;
            let result = {};

            
            const isExisting = await userDb.isExisting({username})


            let entity = await makeAccountEntity({ data });

            // if(isExisting.rowCount > 0){
            //     throw new Error("Account already Exist")
            // }

            console.log(entity)

            const res = await userDb.createUser({
                username: entity.getUsername(),
                password:entity.getPassword(),
                role: entity.getRole(),
                status: entity.getStatus()
            })
                .catch(err => console.log(err));

            if(!res){
                throw new Error ("Failed to register Account");
            }

            return{
                message: "User registered successfully",
                username: res.username,
                password: res.password,
                role: res.role,
                status: res.status

            }
        } catch (error) {
            console.log(error)
        }
        
    }
}
module.exports = createUser;