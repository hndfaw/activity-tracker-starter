const hydration = require('../data/hydrationSub.js');
const hydrationData = hydration.hydrationData;

class Hydration {
  constructor(userId) {
    this.userID = userId;
  }

  userData() {
    return hydration.find(element => element.userID === this.userID);
  } 
 
  getAvgFluidConsumption() {
    const hydration = require('../data/hydrationSub.js');
    const hydrationData = hydration.hydrationData;
    var ozsConsumed = this.userData().hydrationData.reduce((acc, cur) =>
    acc + cur.numOunces,0)/this.userData().hydrationData.length;
    return parseFloat(ozsConsumed.toFixed(1));
  }

  ozsConsumedOnDate(date) {
    return this.userData().hydrationData.find(el => el.date == date).numOunces
  }

  getWeekFluidConsumption(date) {
    let fluidWeekDays = [];
    var userFluidData = this.userData().hydrationData;
    var firstDay = userFluidData.find(el => el.date === date);
    var firstDayIndex = userFluidData.indexOf(firstDay);
    let fluidData = userFluidData.slice(firstDayIndex - 6, firstDayIndex + 1);
    for (let i = 0; i < fluidData.length; i++) {
      fluidWeekDays.push(fluidData[i].numOunces)
      }
    return fluidWeekDays
  }
}

if (typeof module !== "undefined" /*&& typeof module.exports !== "undefined"*/) {
  module.exports = Hydration;
 }