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

  

});