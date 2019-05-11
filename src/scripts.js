const currentDate = () => {
  var fullDate = new Date()
  var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
  var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
  return currentDate;
}


$(window).on('load', () => {
    const randomID = Math.floor(Math.random() * userData.length) + 1

    const userRepository = new UserRepository(randomID);
    
    $('.aside__welcome-name').html(userRepository.userFirstName());
    $('.aside__fullname').html(userRepository.userData().name);
    $('.aside__address').html(userRepository.userData().address);
    $('.aside__email').html(userRepository.userData().email);
    $('.aside__stride-length').html(userRepository.userData().strideLength);
    $('.your-step-goal').html(userRepository.userData().dailyStepGoal);
    $('.others-step-goal').html(userRepository.averageStepGoal());


    const hydration = new Hydration(1);

    $('.water-consumed__today-input').html(hydration.ozsConsumedOnDate(currentDate()));
    console.log(hydration.getWeekFluidConsumption(currentDate())[6])

  })


  
