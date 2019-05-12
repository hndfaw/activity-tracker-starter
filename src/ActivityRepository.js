if (typeof module !== 'undefined' ) {
  UserRepository = require('../src/UserRepository');
  Activity = require('./Activity')
  activityFilePath = require('../data/activitySample.js');
} else {
  activityFilePath = activityData
}

class ActivityRepository {
  constructor (userID) {
    this.userID = userID;
    this.data = activityFilePath
  }

  oneDayAverageStairsClimbedAll(date) {
    var total = 0;
    var items = 0;
    this.data.forEach(user => {
      user.activityData.forEach(el => {
        if (el.date === date) {
          total += el.flightsOfStairs;
          items++;
        }
      })
    })
    return parseFloat((total/items).toFixed(1))
  }

  oneDayAverageStepsAll(date) {
    var total = 0;
    var items = 0;
    this.data.forEach(user => {
      user.activityData.forEach(el => {
        if (el.date === date) {
          total += el.numSteps;
          items++;
        }
      })
    })
    return parseFloat((total/items).toFixed(1))
  }

  oneDayAverageMinutesActiveAll(date) {
    var total = 0;
    var items = 0;
    this.data.forEach(user => {
      user.activityData.forEach(el => {
        if (el.date === date) {
          total += el.minutesActive;
          items++;
        }
      })
    })
    return parseFloat((total/items).toFixed(1))
  }

  instantiateActivity() {
    return  this.data.map(item => item = new Activity(item));
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}