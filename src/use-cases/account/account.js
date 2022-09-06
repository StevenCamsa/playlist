const UC_getuser = ({ userDb }) => {
    return async function getUser() {
        return userDb.getUser();
    }
}
module.exports = UC_getuser;