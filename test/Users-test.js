const chai = require('chai');
const expect = chai.expect;

const Users = require('../src/Users');

describe('Users', function() {

  it('should be a function', function() {
    // const user = new User();
    expect(Users).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const user = new Users();
    expect(user).to.be.an.instanceof(Users);
  });
  it('should return user first name', function() {
    const user = new Users({
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    });
    expect(user.userFirstName()).to.equal('Nyasia');
  });
 
})
