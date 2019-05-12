if (typeof module !== 'undefined' && module.exports !== 'undefined') {
   ActivityRepository = require('./ActivityRepository');
   UserRepository = require('./UserRepository');
}

class Activity {
   constructor(userID) {
    this.userID = userID;
   }

   userData() {
     const userRepository = new UserRepository('../data/usersSub.js')
     return userRepository.returnUserData(this.userID)
   }

   userActivityData() {
     const activityRepository = new ActivityRepository('../data/activitySample.js');
     return activityRepository.getActivityDataOfAUser(this.userID)
   }

   stepsToMiles(date) {
     const steps = this.userActivityData().find(el => el.date === date).numSteps;
     const strideLength = this.userData().strideLength;
     const milesWalked = (steps * strideLength) / 5280
     return parseFloat(milesWalked.toFixed(2));
   }
   activityForADay(date) {
     return this.userActivityData().find(el => el.date === date).minutesActive;
   }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = Activity;
}