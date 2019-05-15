var hydration
if (typeof module !== "undefined") {
  hydration = require("../data/hydrationSub.js");
} else {
  hydration = hydrationData;
}

class Hydration {
  constructor(userId) {
    this.userID = userId;
  }

  userData() {
    return hydration.find(element => element.userID === this.userID);
  }

  getAvgFluidConsumption() {
    var ozsConsumed =
      this.userData().hydrationData.reduce(
        (acc, cur) => acc + cur.numOunces,
        0
      ) / this.userData().hydrationData.length;
    return parseFloat(ozsConsumed.toFixed(1));
  }

  ozsConsumedOnDate(date) {
    return this.userData().hydrationData.find(el => el.date == date).numOunces;
  }

  getWeekFluidConsumption(date) {
    let fluidWeekDays = [];
    var userFluidData = this.userData().hydrationData;
    var firstDay = userFluidData.find(el => el.date === date);
    var firstDayIndex = userFluidData.indexOf(firstDay);
    var fixFirstDayIndex = firstDayIndex - 7 > 0 ? firstDayIndex - 7 : 0;
    let fluidData = userFluidData.slice(fixFirstDayIndex, firstDayIndex);
    for (let i = 0; i < fluidData.length; i++) {
      fluidWeekDays.push(fluidData[i].numOunces);
    }
    var finalFluidWeekDays = [];
    if (fluidWeekDays.length === 7) {
      finalFluidWeekDays = fluidWeekDays;
    } else {
      var newArray = [];
      for (var i = 0; i < 7 - fluidWeekDays.length; i++) {
        newArray.push("-");
      }
      finalFluidWeekDays = newArray.concat(fluidWeekDays);
    }
    return finalFluidWeekDays;
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
