if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  UserRepository = require('./UserRepository');
  Activity = require('./Activity')
}

class ActivityRepository {
  constructor (dataFilePath) {
    this.data = require(dataFilePath);
  }

  getActivityDataOfAUser(id) {
    return this.data.find(el => el.userID === id).activityData
  }

  getAllTimeStairClimbRecord(id) {
    var stairClimbRecord = 0;
    this.data.find(el => el.userID === id).activityData.forEach(day => {
      if ( day.flightsOfStairs >= stairClimbRecord) {
        stairClimbRecord = day.flightsOfStairs;
      }
    });
    return stairClimbRecord;
  }

  getAllDaysExcededStepGoal(id) {
    const userRepository = new UserRepository('../data/usersSub.js')
    var stepGoal = userRepository.returnUserData(id).dailyStepGoal;
    var daysExcededStepGoal = [];
    this.data.find(el => el.userID === id).activityData.forEach(day => {
      if ( day.numSteps > stepGoal ) {
        daysExcededStepGoal.push(day.date)
      };
    });
    return daysExcededStepGoal;
  }
}

if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = ActivityRepository;
}