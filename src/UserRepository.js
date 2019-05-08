class UserRepository {
  constructor (dataFilePath) {
    this.data = require(dataFilePath);
  }
 
  returnUserData(userID) {
    var found = this.data.find(function(element) {
      return element.id === userID;
    }); 
    return found;
  }

  averageStepGoal() {
    return this.data.reduce((total, crr) =>  total + crr.dailyStepGoal ,0)/this.data.length
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
}

module.exports = UserRepository;