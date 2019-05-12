const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const userActivityData = {
  "userID": 2,
  "activityData": [
    {
      "date": "06/05/2019",
      "numSteps": 9101,
      "minutesActive": 202,
      "flightsOfStairs": 1
    },
    {
      "date": "07/05/2019",
      "numSteps": 11825,
      "minutesActive": 77,
      "flightsOfStairs": 28
    },
    {
      "date": "08/05/2019",
      "numSteps": 4423,
      "minutesActive": 266,
      "flightsOfStairs": 31
    },
    {
      "date": "09/05/2019",
      "numSteps": 6241,
      "minutesActive": 146,
      "flightsOfStairs": 43
    }
  ]
};


describe('Activity', function() {
let activity
  beforeEach(function() {
    activity = new Activity(userActivityData);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('thisUserData should return the data of user by ID', function() {
    expect(activity.thisUserData()).to.eql({
      "id": 2,
      "name": "Shayne Swift",
      "address": "747 Dickinson Gardens, South Helga AK 88484-2240",
      "email": "Lawson74@yahoo.com",
      "strideLength": 4.5,
      "dailyStepGoal": 11000
    });
  })

  it('stepsToMiles should convert a user’s number of steps to miles', function() {
    expect(activity.stepsToMiles("09/05/2019")).to.equal(5.3);
  });

});