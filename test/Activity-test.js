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
const userActivityData2 = {
  "userID": 6,
  "activityData": [
    {
      "date": "06/05/2019",
      "numSteps": 10323,
      "minutesActive": 56,
      "flightsOfStairs": 4
    },
    {
      "date": "07/05/2019",
      "numSteps": 14589,
      "minutesActive": 32,
      "flightsOfStairs": 21
    },
    {
      "date": "08/05/2019",
      "numSteps": 11386,
      "minutesActive": 220,
      "flightsOfStairs": 40
    },
    {
      "date": "09/05/2019",
      "numSteps": 10162,
      "minutesActive": 230,
      "flightsOfStairs": 19
    },
    {
      "date": "10/05/2019",
      "numSteps": 6239,
      "minutesActive": 105,
      "flightsOfStairs": 13
    },
    {
      "date": "11/05/2019",
      "numSteps": 9641,
      "minutesActive": 72,
      "flightsOfStairs": 8
    },
    {
      "date": "12/05/2019",
      "numSteps": 14639,
      "minutesActive": 64,
      "flightsOfStairs": 42
    },
    {
      "date": "13/05/2019",
      "numSteps": 14624,
      "minutesActive": 282,
      "flightsOfStairs": 30
    },
    {
      "date": "14/05/2019",
      "numSteps": 9534,
      "minutesActive": 159,
      "flightsOfStairs": 30
    },
    {
      "date": "15/05/2019",
      "numSteps": 3624,
      "minutesActive": 165,
      "flightsOfStairs": 2
    },
    {
      "date": "16/05/2019",
      "numSteps": 10028,
      "minutesActive": 209,
      "flightsOfStairs": 43
    },
    {
      "date": "17/05/2019",
      "numSteps": 11678,
      "minutesActive": 23,
      "flightsOfStairs": 3
    },
    {
      "date": "18/05/2019",
      "numSteps": 2241,
      "minutesActive": 94,
      "flightsOfStairs": 15
    },
    {
      "date": "19/05/2019",
      "numSteps": 8104,
      "minutesActive": 36,
      "flightsOfStairs": 45
    },
    {
      "date": "20/05/2019",
      "numSteps": 3057,
      "minutesActive": 33,
      "flightsOfStairs": 30
    },
    {
      "date": "21/05/2019",
      "numSteps": 9658,
      "minutesActive": 178,
      "flightsOfStairs": 26
    },
    {
      "date": "22/05/2019",
      "numSteps": 2643,
      "minutesActive": 235,
      "flightsOfStairs": 44
    },
    {
      "date": "23/05/2019",
      "numSteps": 6728,
      "minutesActive": 253,
      "flightsOfStairs": 36
    },
    {
      "date": "24/05/2019",
      "numSteps": 2546,
      "minutesActive": 131,
      "flightsOfStairs": 40
    },
    {
      "date": "25/05/2019",
      "numSteps": 9137,
      "minutesActive": 178,
      "flightsOfStairs": 32
    },
    {
      "date": "26/05/2019",
      "numSteps": 3166,
      "minutesActive": 101,
      "flightsOfStairs": 11
    },
    {
      "date": "27/05/2019",
      "numSteps": 14820,
      "minutesActive": 215,
      "flightsOfStairs": 32
    },
    {
      "date": "28/05/2019",
      "numSteps": 7975,
      "minutesActive": 85,
      "flightsOfStairs": 21
    },
    {
      "date": "29/05/2019",
      "numSteps": 5689,
      "minutesActive": 229,
      "flightsOfStairs": 4
    },
    {
      "date": "30/05/2019",
      "numSteps": 11776,
      "minutesActive": 180,
      "flightsOfStairs": 37
    },
    {
      "date": "31/05/2019",
      "numSteps": 8059,
      "minutesActive": 226,
      "flightsOfStairs": 1
    },
    {
      "date": "01/06/2019",
      "numSteps": 4918,
      "minutesActive": 185,
      "flightsOfStairs": 38
    },
    {
      "date": "02/06/2019",
      "numSteps": 10706,
      "minutesActive": 208,
      "flightsOfStairs": 45
    },
    {
      "date": "03/06/2019",
      "numSteps": 2942,
      "minutesActive": 60,
      "flightsOfStairs": 23
    },
    {
      "date": "04/06/2019",
      "numSteps": 3164,
      "minutesActive": 130,
      "flightsOfStairs": 2
    },
    {
      "date": "05/06/2019",
      "numSteps": 8665,
      "minutesActive": 170,
      "flightsOfStairs": 17
    },
    {
      "date": "06/06/2019",
      "numSteps": 14099,
      "minutesActive": 35,
      "flightsOfStairs": 8
    },
    {
      "date": "07/06/2019",
      "numSteps": 5408,
      "minutesActive": 151,
      "flightsOfStairs": 29
    },
    {
      "date": "08/06/2019",
      "numSteps": 3666,
      "minutesActive": 116,
      "flightsOfStairs": 16
    },
    {
      "date": "09/06/2019",
      "numSteps": 12255,
      "minutesActive": 197,
      "flightsOfStairs": 50
    },
    {
      "date": "10/06/2019",
      "numSteps": 13231,
      "minutesActive": 296,
      "flightsOfStairs": 11
    },
    {
      "date": "11/06/2019",
      "numSteps": 7606,
      "minutesActive": 285,
      "flightsOfStairs": 16
    },
    {
      "date": "12/06/2019",
      "numSteps": 12029,
      "minutesActive": 81,
      "flightsOfStairs": 30
    },
    {
      "date": "13/06/2019",
      "numSteps": 13512,
      "minutesActive": 198,
      "flightsOfStairs": 16
    },
    {
      "date": "14/06/2019",
      "numSteps": 9676,
      "minutesActive": 290,
      "flightsOfStairs": 26
    },
    {
      "date": "15/06/2019",
      "numSteps": 11714,
      "minutesActive": 46,
      "flightsOfStairs": 18
    },
    {
      "date": "16/06/2019",
      "numSteps": 13949,
      "minutesActive": 117,
      "flightsOfStairs": 40
    },
    {
      "date": "17/06/2019",
      "numSteps": 2814,
      "minutesActive": 89,
      "flightsOfStairs": 6
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

  it('threeDayIncreasingSteps should return an array of days that step count increased at least 3 in a row', function() {
    const activity3 = new Activity(userActivityData2);
    expect(activity3.threeDayIncreasingSteps()).to.eql(['12/05/2019', '17/05/2019', '05/06/2019', '06/06/2019', '10/06/2019', '13/06/2019', '16/06/2019']);
  });
});