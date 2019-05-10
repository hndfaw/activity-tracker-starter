if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  userRepository =  require('../data/usersSub.js');
}

class Users {
  constructor (userData) {
    this.userData = userData;
  }

  userFirstName() {
    return userRepository.returnUserData(this.userID).name.split(" ")[0]    
  }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = Users
}