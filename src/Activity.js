if (typeof module !== 'undefined') {
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

   usersNumberOfStepsToday(date) {
     return this.userData.activityData.find(el => el.date === date).numSteps
   }

   usersNumberStairsClimbedToday(date) {
    return this.userData.activityData.find(el => el.date === date).flightsOfStairs
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
    return this.userData.activityData.reduce((acc, el) => acc + el.flightsOfStairs , 0);
  }

  oneWeekSteps(date) {
    let weekSteps = [];
    var userStepsData = this.userData.activityData;
    var firstDay = userStepsData.find(el => el.date === date);
    var firstDayIndex = userStepsData.indexOf(firstDay);
    var fixFirstDayIndex = (firstDayIndex - 7) > 0 ? firstDayIndex - 7 : 0;
    let sleepData = userStepsData.slice(fixFirstDayIndex, firstDayIndex);
    for (let i = 0; i < sleepData.length; i++) {
      weekSteps.push(sleepData[i].numSteps )
   }
    return weekSteps
  }

  oneWeekFlightsStairsClimbed(date) {
    let weekFlightStairs = [];
    var userStepsData = this.userData.activityData;
    var firstDay = userStepsData.find(el => el.date === date);
    var firstDayIndex = userStepsData.indexOf(firstDay);
    var fixFirstDayIndex = (firstDayIndex - 7) > 0 ? firstDayIndex - 7 : 0;
    let sleepData = userStepsData.slice(fixFirstDayIndex, firstDayIndex);
    for (let i = 0; i < sleepData.length; i++) {
      weekFlightStairs.push(sleepData[i].flightsOfStairs )
   }
    return weekFlightStairs
  }
  
  oneWeekMinutesActive(date) {
    let weekMinutesActive = [];
    var userStepsData = this.userData.activityData;
    var firstDay = userStepsData.find(el => el.date === date);
    var firstDayIndex = userStepsData.indexOf(firstDay);
    var fixFirstDayIndex = (firstDayIndex - 7) > 0 ? firstDayIndex - 7 : 0;
    let sleepData = userStepsData.slice(fixFirstDayIndex, firstDayIndex);
    for (let i = 0; i < sleepData.length; i++) {
      weekMinutesActive.push(sleepData[i].minutesActive )
   }
    return weekMinutesActive
  }

  threeDayIncreasingSteps(userID) {
    var threeInARow = [];
    var threeInARowDates = [];
    var userStepData = this.userData.activityData;
    const tIAR = userStepData.forEach(function(user) {
      if (threeInARow.length >= 3) {
        console.log('Im in shift territory')
        threeInARow.shift()
      }
      threeInARow.push(user.numSteps);
      console.log('ThreeInARow is:' ,threeInARow)
      if (threeInARow[2] > threeInARow[1] && threeInARow[1] > threeInARow[0]) {
        console.log('Yeah!!!');
        threeInARowDates.push(user.date)
      }
    });
    return threeInARowDates;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}