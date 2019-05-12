const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  let hydration

  beforeEach(function() {
     hydration = new Hydration(1);

  });
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should return a user average ounces of liquid consumed', function() {
    expect(hydration.getAvgFluidConsumption()).to.equal(55.4);
  });
  it('should return a users liquid consumed on a given date', function() {
    expect(hydration.ozsConsumedOnDate('07/05/2019')).to.equal(80);
  });

  it('should return the fluid consumption for a week', function() { 
    expect(hydration.getWeekFluidConsumption('14/05/2019')).to.deep.equal([80, 39, 40, 65, 84, 33, 60]);
  })
});
