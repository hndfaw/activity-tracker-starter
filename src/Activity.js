if (typeof module !== "undefined") {
  UserRepository = require("./UserRepository");
}

class Activity {
  constructor(userData) {
    this.userData = userData;
  }

  thisUserData() {
    const userRepository = new UserRepository();
    return userRepository.returnUserData(this.userData.userID);
  }

  usersNumberOfStepsToday(date) {
    return this.userData.activityData.find(el => el.date === date).numSteps;
  }

  usersNumberStairsClimbedToday(date) {
    return this.userData.activityData.find(el => el.date === date)
      .flightsOfStairs;
  }

  stepsToMiles(date) {
    const steps = this.userData.activityData.find(el =>
      el.date === date).numSteps;
    const strideLength = this.thisUserData().strideLength;
    const miles = (steps * strideLength) / 5280;
    return parseFloat(miles.toFixed(1));
  }

  activeMinutes(date) {
    return this.userData.activityData.find(day =>
      day.date === date).minutesActive;
  }

  averageActiveMinutesWeek(date) {
    var total = 0;
    var userActivityData = this.userData.activityData;
    var today = userActivityData.find(el => el.date === date);
    var todayIndex = userActivityData.indexOf(today);
    var fixTodayIndex = todayIndex - 7 > 0 ? todayIndex - 7 : 0;
    let data = userActivityData.slice(fixTodayIndex, todayIndex);
    data.forEach(el => total += el.minutesActive)
    return parseFloat((total / data.length).toFixed(1));
  }

  reachingStepGoal(date) {
    const userDailyGoal = this.thisUserData().dailyStepGoal;
    const userTodayReached = this.userData.activityData.find(
      el => el.date === date
    ).numSteps;
    return userTodayReached >= userDailyGoal;
  }

  daysExceededStepGoal() {
    const userDailyGoal = this.thisUserData().dailyStepGoal;
    var days = this.userData.activityData.reduce((acc, el) => {
      if (el.numSteps >= userDailyGoal) {
        acc.push(el.date);
      }
      return acc;
    }, []);
    return days;
  }

  allTimeStairClimbing() {
    return this.userData.activityData.reduce(
      (acc, el) => acc + el.flightsOfStairs
      , 0);
  }

  oneWeekSteps(date) {
    var userStepsData = this.userData.activityData;
    var firstDay = userStepsData.find(el => el.date === date);
    var firstDayIndex = userStepsData.indexOf(firstDay);
    var fixFirstDayIndex = firstDayIndex - 7 > 0 ? firstDayIndex - 7 : 0;
    let sleepData = userStepsData.slice(fixFirstDayIndex, firstDayIndex);
    return sleepData.map(el => el.numSteps)
  }

  oneWeekFlightsStairsClimbed(date) {
    var userStepsData = this.userData.activityData;
    var firstDay = userStepsData.find(el => el.date === date);
    var firstDayIndex = userStepsData.indexOf(firstDay);
    var fixFirstDayIndex = firstDayIndex - 7 > 0 ? firstDayIndex - 7 : 0;
    let sleepData = userStepsData.slice(fixFirstDayIndex, firstDayIndex);
    return sleepData.map(el => el.flightsOfStairs)
  }

  oneWeekMinutesActive(date) {
    var userStepsData = this.userData.activityData;
    var firstDay = userStepsData.find(el => el.date === date);
    var firstDayIndex = userStepsData.indexOf(firstDay);
    var fixFirstDayIndex = firstDayIndex - 7 > 0 ? firstDayIndex - 7 : 0;
    var sleepData = userStepsData.slice(fixFirstDayIndex, firstDayIndex);
    return sleepData.map(el => el.minutesActive)
  }

  threeDayIncreasingSteps() {
    var threeInARow = [];
    var threeInARowDates = [];
    var userStepData = this.userData.activityData;
    userStepData.forEach(function(user) {
      if (threeInARow.length >= 3) {
        threeInARow.shift();
      }
      threeInARow.push(user.numSteps);
      if (threeInARow[2] > threeInARow[1] && threeInARow[1] > threeInARow[0]) {
        threeInARowDates.push(user.date);
      }
    });
    return threeInARowDates;
  }
}

if (typeof module !== "undefined") {
  module.exports = Activity;
}
