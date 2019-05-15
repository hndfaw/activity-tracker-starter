var UserRepository, Sleep, sleepFilePath, sleepData;
if (typeof module !== "undefined") {
  UserRepository = require("../src/UserRepository");
  Sleep = require("./Sleep");
  sleepFilePath = require("../data/sleepSample.js").sleepData;
} else {
  sleepFilePath = sleepData;
}

class SleepRepository {
  constructor(userID) {
    this.data = sleepFilePath;
    this.userID = userID;
  }

  averageSleepQualityAll() {
    var totalQualityHours = 0;
    var days = 0;
    this.data.forEach(user => {
      user.sleepData.forEach(day => {
        totalQualityHours += day.sleepQuality;
        days++;
      });
    });
    return parseFloat((totalQualityHours / days).toFixed(1));
  }

  sleepQualityGreaterThanThreeIDs(date) {
    let averages = [],
      ids = [],
      finalIds = [];
    this.data.forEach(userData => {
      let total = 0,
        days = 0,
        index;

      userData.sleepData.forEach((el, i) => {
        if (el.date === date) {
          index = i;
        }
      });
      for (let i = 0; i < userData.sleepData.length; i++) {
        if (i >= index && i <= index + 6) {
          total += userData.sleepData[i].sleepQuality;
          days++;
        }
      }
      averages.push(parseFloat((total / days).toFixed(1)));
      ids.push(userData.userID);
    });
    for (let i = 0; i < averages.length; i++) {
      if (averages[i] >= 3) {
        finalIds.push(ids[i]);
      }
    }
    this.sleepQualityGreaterThanThreeNames(finalIds);
    return finalIds;
  }

  sleepQualityGreaterThanThreeNames(finalIds) {
    const userRepository = new UserRepository("../data/usersSub.js");
    return userRepository.returnNamesFromIds(finalIds);
  }

  sleepMostIds(date) {
    var sleepHours = [];
    var allIds = [];
    this.data.forEach(user => {
      user.sleepData.forEach(day => {
        if (day.date === date) {
          sleepHours.push(day.hoursSlept);
          allIds.push(user.userID);
        }
      });
    });
    var max = Math.max(...sleepHours);
    var ids = [];
    for (let i = 0; i < sleepHours.length; i++) {
      if (sleepHours[i] === max) {
        ids.push(allIds[i]);
      }
    }
    this.sleepMostNames(ids);
    return ids;
  }

  sleepMostNames(ids) {
    const userRepository = new UserRepository("../data/usersSub.js");
    return userRepository.returnNamesFromIds(ids);
  }

  instantiateSleep() {
    return this.data.map(sleep => (sleep = new Sleep(sleep)));
  }
}

if (typeof module !== "undefined" && module.exports !== "undefined") {
  module.exports = SleepRepository;
}
