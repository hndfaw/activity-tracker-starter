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
    var userSleepData = this.userData.sleepData;
    var today = userSleepData.find(el => el.date === date);
    var todayIndex = userSleepData.indexOf(today);
    var fixFirstDayIndex = todayIndex - 7 > 0 ? todayIndex - 7 : 0;
    let sleepData = userSleepData.slice(fixFirstDayIndex, todayIndex);
    return sleepData.map(el => el.hoursSlept)
  }

  qualitySleptWeek(date) {
    var userSleepData = this.userData.sleepData;
    var today = userSleepData.find(el => el.date === date);
    var todayIndex = userSleepData.indexOf(today);
    var fixFirstDayIndex = todayIndex - 7 > 0 ? todayIndex - 7 : 0;
    let sleepData = userSleepData.slice(fixFirstDayIndex, todayIndex);
    return sleepData.map(el => el.sleepQuality)
  }
}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
