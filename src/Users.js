class Users {
  constructor (userData) {
    this.userData = userData
  }
  
  userFirstName() {
    let fullName = this.userData.name.split(' ');
    return fullName[0];
  }
}

// if( typeof module !== "undefined" /*&& typeof module.exports !== "undefined"*/) {
//   module.exports = Users;
// }
module.exports = Users;
//export default Users;
