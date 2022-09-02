const makeAccountEntity = ({ data }) => {
    // return function make({fullname, contact, address} = {}) {
    console.log(data);
    const { username, password, role, status  } = data;

     let userRole = role;
     let userStatus = status;


         if(!username || !password){
      throw new Error("Username and Password are required.")
         }
        if(!username){
            throw new Error("Username is required.")
         }
         if(!password){
             throw new Error("Password is required.")
       }
         if(password < 6){
             throw new Error("Password must be at least 6 characters.")
         }
         if(!role){
             throw new Error("Role is required.")
         }

         return Object.freeze({
             getUsername: () => username,
             getPassword: () => password,
             getRole: () => userRole,
             getStatus: () => userStatus
         });
    };

module.exports = makeAccountEntity;