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

   activeMinutes(date) {
    return this.userData.activityData.find(day => day.date === date).minutesActive;
   }

   averageActiveMinutesWeek(date) {
    var total = 0;
    var items = 0;
    var userActivityData = this.userData.activityData
    var today = userActivityData.find(el => el.date === date);
    var todayIndex = userActivityData.indexOf(today);
    for(let i = 0; i < userActivityData.length; i++) {
      if(i >= todayIndex - 7 && i < todayIndex) {
        total += userActivityData[i].minutesActive
        items++
      }
    }
    return parseFloat((total/items).toFixed(1))
   }

   reachingStepGoal(date) {
    const userDailyGoal = this.thisUserData().dailyStepGoal;
    const userTodayReached = this.userData.activityData.find(el => el.date === date).numSteps;
    return userTodayReached >= userDailyGoal;
   }

   daysExceededStepGoal() {
     const userDailyGoal = this.thisUserData().dailyStepGoal;
     var days = this.userData.activityData.reduce((acc, el) => {
       if (el.numSteps >= userDailyGoal) {acc.push(el.date)}
       return acc
      },[]);
     return days
   }

   allTimeStairClimbing() {
    return this.userData.activityData.reduce((acc, el) => acc + el.flightsOfStairs ,0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}