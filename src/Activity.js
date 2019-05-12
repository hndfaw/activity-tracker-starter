if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  //  ActivityRepository = require('./ActivityRepository');
   UserRepository = require('./UserRepository');
}

class Activity {
   constructor(userData) {
    this.userData = userData;
   }

   thisUserData() {
     const userRepository = new UserRepository()
     return userRepository.returnUserData(this.userData.userID)
   }

   stepsToMiles(date) {
     const steps = this.userData.activityData.find(el => el.date === date).numSteps;
     const strideLength = this.thisUserData().strideLength
     const miles = (steps * strideLength) / 5280

     return parseFloat(miles.toFixed(1))
   }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}