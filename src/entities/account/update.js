const updateUserEntity = ({data}) => {

    const {username, password, role} = data;


    if(!username) {
        username = username;
    }
    if(!password){
        password = password;   
    }
    if(password < 6){
        throw new Error("Password must be at least 6 characters.")
    }
    if(!role){
        role = role;   
    }

    return Object.freeze({
        getUsername: () => username,
        getPassword: () => password,
        getRole: () => role
    })
}
module.exports = updateUserEntity;