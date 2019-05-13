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

  it('usersNumberStairsClimbedToday should convert a user’s number of steps to miles', function() {
    expect(activity.usersNumberStairsClimbedToday("09/05/2019")).to.equal(43);
  });

  it('usersNumberOfStepsToday should convert a user’s number of steps to miles', function() {
    expect(activity.usersNumberOfStepsToday("09/05/2019")).to.equal(6241);
  });

  it('stepsToMiles should convert a user’s number of steps to miles', function() {

    expect(activity.stepsToMiles("09/05/2019")).to.equal(5.3);
  });

  it('activeMinutes should return minutes were a user were active for a given day', function() {
    expect(activity.activeMinutes("07/05/2019")).to.equal(77);
  });

  it('averageActiveMinutesWeek should return average minutes active for a given week(7 days)', function() {
    expect(activity.averageActiveMinutesWeek("09/05/2019")).to.equal(181.7);
  });

  it('reachingStepGoal should return treu if user reach the step goal for a given day', function() {
    expect(activity.reachingStepGoal("06/05/2019")).to.equal(false);
    const activity2 = new Activity(userActivityData);
    expect(activity2.reachingStepGoal("07/05/2019")).to.equal(true);
  });

  it('daysExceededStepGoal should return all the days where they exceeded their step goal', function() {
    expect(activity.daysExceededStepGoal()).to.eql(["07/05/2019"]);
  });

  it('allTimeStairClimbing should return their all-time stair climbing record', function() {
    expect(activity.allTimeStairClimbing()).to.eql(103);
  });

  it('oneWeekSteps should return the steps for 7 days', function() {
    expect(activity.oneWeekSteps("09/05/2019")).to.eql([9101, 11825, 4423]);
  });

  it('oneWeekFlightsStairsClimbed should return the climbed stairs for 7 days', function() {
    expect(activity.oneWeekFlightsStairsClimbed("09/05/2019")).to.eql([1, 28, 31]);
  });

  it('oneWeekMinutesActive should return the active minutes for 7 days', function() {
    expect(activity.oneWeekMinutesActive("09/05/2019")).to.eql([202, 77, 266]);
  });
});