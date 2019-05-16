class Sleep {
  constructor(userData) {
    this.userData = userData;
  }

  averageHrsSlept() {
    var data = this.userData.sleepData;
    var total = 0;
    data.forEach(el => (total += el.hoursSlept));
    return parseFloat((total / data.length).toFixed(1));
  }

  averageSleepQuality() {
    var data = this.userData.sleepData;
    var total = 0;
    data.forEach(el => (total += el.sleepQuality));
    return parseFloat((total / data.length).toFixed(1));
  }

  hoursSleptInDate(date) {
    var data = this.userData.sleepData;
    return data.find(el => el.date === date).hoursSlept;
  }

  hoursSleptQualityInDate(date) {
    var data = this.userData.sleepData;
    return data.find(el => el.date === date).sleepQuality;
  }

  hoursSleptWeek(date) {
    var sleptWeekDays = [];
    var userSleepData = this.userData.sleepData;
    var today = userSleepData.find(el => el.date === date);
    var todayIndex = userSleepData.indexOf(today);
    for (let i = 0; i < userSleepData.length; i++) {
      if (i >= todayIndex - 7 && i < todayIndex) {
        sleptWeekDays.push(userSleepData[i].hoursSlept);
      }
    }
    var finalSleptWeekDays = [];
    if (sleptWeekDays.length === 7) {
      finalSleptWeekDays = sleptWeekDays;
    } else {
      var newArray = [];
      for (var i = 0; i < 7 - sleptWeekDays.length; i++) {
        newArray.push("-");
      }
      finalSleptWeekDays = newArray.concat(sleptWeekDays);
    }
    return finalSleptWeekDays;
  }

  qualitySleptWeek(date) {
    var qualityWeekDays = [];
    var userSleepData = this.userData.sleepData;
    var today = userSleepData.find(el => el.date === date);
    var todayIndex = userSleepData.indexOf(today);
    for (let i = 0; i < userSleepData.length; i++) {
      if (i >= todayIndex - 7 && i < todayIndex) {
        qualityWeekDays.push(userSleepData[i].sleepQuality);
      }
    }
    var finalQualityWeekDays = [];
    if (qualityWeekDays.length === 7) {
      finalQualityWeekDays = qualityWeekDays;
    } else {
      var newArray = [];
      for (var i = 0; i < 7 - qualityWeekDays.length; i++) {
        newArray.push("-");
      }
      finalQualityWeekDays = newArray.concat(qualityWeekDays);
    }
    return finalQualityWeekDays;
  }
}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
