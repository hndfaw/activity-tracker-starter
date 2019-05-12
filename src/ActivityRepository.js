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

  instantiateActivity() {
    return  this.data.map(item => item = new Activity(item));
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}