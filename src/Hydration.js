const dataFile = require('../data/hydrationSub.js');
const data = dataFile.hydrationData;

class Hydration {
  constructor(){
    
  }

  getAverageFluidConsumption(userID) {
    return dataFile.reduce((total, fluid) => { 
      console.log(fluid.hydrationData[userID].numOunces)
      return total + fluid.hydrationData[userID].numOunces},0)/dataFile.length
  }

  getDailyFluidConsumption(userID) {
    
  }
  getWeekFluidConsumption() {

  }
}

module.exports = Hydration;