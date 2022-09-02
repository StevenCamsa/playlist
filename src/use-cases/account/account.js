const UCgetuser = ({ userDb }) => {
    return async function getUser() {
        return userDb.getUser();
    }
}
module.exports = UCgetuser;