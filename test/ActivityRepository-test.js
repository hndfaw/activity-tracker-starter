const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityRepository');

describe('ActivityRepository', function() {
  let activityRepository
  beforeEach(function() {
    activityRepository = new ActivityRepository('../src/ActivityRepository');
  })

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('oneDayAverageStairsClimbedAll shoul return the average number of stairs climbed of all users for a specified date', function() {
    expect(activityRepository.oneDayAverageStairsClimbedAll("06/05/2019")).to.eql(30.6);
  });

  it('oneDayAverageStepsAll shoul return the average number of steps of all users for a specified date', function() {
    expect(activityRepository.oneDayAverageStepsAll("07/05/2019")).to.eql(5504.3);
  });

  it('oneDayAverageMinutesActiveAll shoul return the average number of steps of all users for a specified date', function() {
    expect(activityRepository.oneDayAverageMinutesActiveAll("08/05/2019")).to.eql(159.5);
  });

});