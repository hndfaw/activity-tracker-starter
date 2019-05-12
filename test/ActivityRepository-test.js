const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityRepository');

describe('ActivityRepository', function() {
  let activityRepository
  beforeEach(function() {
    activityRepository = new ActivityRepository('../data/activitySample.js');
  })

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('getSlepDataOfAUser method should return sleep data of one user by ID', function() {
    expect(activityRepository.getActivityDataOfAUser(5)).to.eql([
      {
        "date": "06/05/2019",
        "numSteps": 3905,
        "minutesActive": 146,
        "flightsOfStairs": 42
      }
    ]);
  });

  it('should return most stairs climbed for a user for all time', function()
  { 
    expect(activityRepository.getAllTimeStairClimbRecord(3)).to.equal(36);
    expect(activityRepository.getAllTimeStairClimbRecord(4)).to.equal(42);
  });

  it('should return all days a user exceded step goal', function()
  { 
    expect(activityRepository.getAllDaysExcededStepGoal(3)).to.deep.equal([ '08/05/2019', '09/05/2019' ]);
    // expect(activityRepository.getAllDaysExcededStepGoal(4)).to.equal(42);
  });

});