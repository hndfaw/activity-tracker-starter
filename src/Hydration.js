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
      this.userData().hydrationData.reduce((acc, cur) =>
        acc + cur.numOunces,0) / this.userData().hydrationData.length;
    return parseFloat(ozsConsumed.toFixed(1));
  }

  ozsConsumedOnDate(date) {
    return this.userData().hydrationData.find(el => el.date === date).numOunces;
  }

  getWeekFluidConsumption(date) {
    var userFluidData = this.userData().hydrationData;
    var firstDay = userFluidData.find(el => el.date === date);
    var firstDayIndex = userFluidData.indexOf(firstDay);
    var fixFirstDayIndex = firstDayIndex - 7 > 0 ? firstDayIndex - 7 : 0;
    let fluidData = userFluidData.slice(fixFirstDayIndex, firstDayIndex);
    return fluidData.map(el => el.numOunces);
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
