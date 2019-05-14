if (typeof module !== 'undefined') {
  User = require('./User');
  usersFilePath = require('../data/usersSub');
} else {
  usersFilePath = userData;
}

class UserRepository {
  constructor (userID) {
    this.userID = userID;
    this.data = usersFilePath;
  }
 
  returnUserData(userID) {
    return this.data.find(el => el.id === userID); 
  }

  userData() {
    return this.data.find(el => el.id === this.userID); 
  }

  userFirstName() {
    return this.userData().name.split(" ")[0];
  }

  averageStepGoal() {
    return this.data.reduce((total, crr) =>
    total + crr.dailyStepGoal ,0)/this.data.length
  }

  mostCommonState(){
    var  states = this.data.map(el => el.address.split(" ").splice(-2,1)[0]);
    var x = 1; var y = 0;  var state;
    states.forEach((el,i) => {
      states.forEach(s =>{
        if (states[i] == s)y++;
        if (x<y){x=y; state = states[i]}
      })
      y=0;
    })
    return state
  }

  returnNamesFromIds(ids) {
    var names = [];
    ids.forEach(i => {
      this.data.forEach(user => {
        if(user.id === i) {names.push(user.name.split(" ")[0])}
      })
    })
    return names
  }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
module.exports = UserRepository;

}