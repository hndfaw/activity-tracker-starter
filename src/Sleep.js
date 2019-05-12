class Sleep {
  constructor(userData) {
    this.userData = userData;
  }

  // userSleepData() {
  //   const sleepRepository = new SleepRepository('../data/sleepSample.js');
  //   return sleepRepository.getSleepDataOfAUser(this.userID)
  // }

  averageHrsSlept() {
    var data = this.userData.sleepData
    var total = 0;
    data.forEach(el =>  total += el.hoursSlept)
    return parseFloat((total / data.length).toFixed(1));
  }

  averageSleepQuality() {
    var data = this.userData.sleepData
    var total = 0;
    data.forEach(el =>  total += el.sleepQuality)
    return parseFloat((total / data.length).toFixed(1));
  }

  hoursSleptInDate(date) {
    var data = this.userData.sleepData
    return data.find(el => el.date == date).hoursSlept
  }

  hoursSleptQualityInDate(date) {
    var data = this.userData.sleepData
    return data.find(el => el.date == date).sleepQuality
  }

  hoursSleptWeek(date) {
    var sleptWeekDays = [];
    var userSleepData = this.userData.sleepData
    var firstDay = userSleepData.find(el => el.date === date);
    var firstDayIndex = userSleepData.indexOf(firstDay);
    for(let i = 0; i < userSleepData.length; i++) {
      if(i >= firstDayIndex && i <= firstDayIndex+6) {
        sleptWeekDays.push(userSleepData[i].hoursSlept)
      }
    }
    return sleptWeekDays
  }

  qualitySleptWeek(date) {
    var qualityWeekDays = [];
    var userSleepData = this.userData.sleepData
    var firstDay = userSleepData.find(el => el.date === date);
    var firstDayIndex = userSleepData.indexOf(firstDay);
    for(let i = 0; i < userSleepData.length; i++) {
      if(i >= firstDayIndex && i <= firstDayIndex+6) {
        qualityWeekDays.push(userSleepData[i].sleepQuality)
      }
    }
    return qualityWeekDays;
  }
}


if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = Sleep;
}