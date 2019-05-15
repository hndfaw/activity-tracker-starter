const chai = require("chai");
const expect = chai.expect;
const Sleep = require("../src/Sleep");
const userSleepData = {
  userID: 1,
  sleepData: [
    {
      date: "06/05/2019",
      hoursSlept: 8,
      sleepQuality: 4.8
    },
    {
      date: "07/05/2019",
      hoursSlept: 10.7,
      sleepQuality: 4.8
    },
    {
      date: "08/05/2019",
      hoursSlept: 5,
      sleepQuality: 1.9
    }
  ]
};

describe("Sleep", function() {
  let sleep;
  beforeEach(function() {
    sleep = new Sleep(userSleepData);
  });

  it("should be a function", function() {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it("averageHrsSlept method should return users average of hours slept", function() {
    expect(sleep.averageHrsSlept()).to.equal(7.9);
  });

  it("averageSleepQuality method should return users average of quality hours", function() {
    expect(sleep.averageSleepQuality()).to.equal(3.8);
  });

  it("hoursSleptInDay should return hours slept in one day", function() {
    expect(sleep.hoursSleptInDate("07/05/2019")).to.equal(10.7);
  });

  it("hoursSleptQualityInDate should return hours slept in one day", function() {
    expect(sleep.hoursSleptQualityInDate("08/05/2019")).to.equal(1.9);
  });

  it("hoursSleptWeek should return hours slept of one week", function() {
    expect(sleep.hoursSleptWeek("08/05/2019")).to.eql([
      "-",
      "-",
      "-",
      "-",
      "-",
      8,
      10.7
    ]);
  });

  it("qualitySleptWeek should return sleeping quality of one week", function() {
    expect(sleep.qualitySleptWeek("08/05/2019")).to.eql([
      "-",
      "-",
      "-",
      "-",
      "-",
      4.8,
      4.8
    ]);
  });
});
