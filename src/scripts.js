const currentDate = () => {
  var fullDate = new Date()
  var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
  var currentDate = fullDate.getDate()  + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
  return currentDate;
}

const returnWeekDay = (days = 0) => {
  const date = new Date();
  const fixedDate = date.setDate(date.getDate() + days);
  const d = new Date(fixedDate).getDay();
  var day;
   if (d === 0) {
     day = "SUN";
   } else if (d === 1) {
     day = "MON";
   } else if (d === 2) {
    day = "TUE";
  } else if (d === 3) {
    day = "WED";
  } else if (d === 4) {
    day = "THU";
  } else if (d === 5) {
    day = "FRI";
  } else {
    day = "SAT";
  }
  return day;
}

$(window).on('load', () => {
    // const randomID = Math.floor(Math.random() * userData.length) + 1
    const randomID = 1
    const userRepository = new UserRepository(randomID);
    
    $('.aside__welcome-name').html(userRepository.userFirstName());
    $('.aside__fullname').html(userRepository.userData().name);
    $('.aside__address').html(userRepository.userData().address);
    $('.aside__email').html(userRepository.userData().email);
    $('.aside__stride-length').html(userRepository.userData().strideLength);
    $('.your-step-goal').html(userRepository.userData().dailyStepGoal);
    $('.others-step-goal').html(userRepository.averageStepGoal());

    const hydration = new Hydration(randomID);

    $('.water-consumed__today-input').html(hydration.ozsConsumedOnDate(currentDate()));
    $('.water-consumed__daily-day-1').html(hydration.getWeekFluidConsumption(currentDate())[0]);
    $('.water-consumed__daily-day-2').html(hydration.getWeekFluidConsumption(currentDate())[1]);
    $('.water-consumed__daily-day-3').html(hydration.getWeekFluidConsumption(currentDate())[2]);
    $('.water-consumed__daily-day-4').html(hydration.getWeekFluidConsumption(currentDate())[3]);
    $('.water-consumed__daily-day-5').html(hydration.getWeekFluidConsumption(currentDate())[4]);
    $('.water-consumed__daily-day-6').html(hydration.getWeekFluidConsumption(currentDate())[5]);
    $('.water-consumed__daily-day-7').html(hydration.getWeekFluidConsumption(currentDate())[6]);

    $('.week-day-1').html(returnWeekDay(-7));
    $('.week-day-2').html(returnWeekDay(-6));
    $('.week-day-3').html(returnWeekDay(-5));
    $('.week-day-4').html(returnWeekDay(-4));
    $('.week-day-5').html(returnWeekDay(-3));
    $('.week-day-6').html(returnWeekDay(-2));
    $('.week-day-7').html(returnWeekDay(-1));
    
    const sleepRepository = new SleepRepository(randomID);
    const sleep = sleepRepository.instantiateSleep();
    let instantiatedSleep = sleep.find(item => item.userData.userID === randomID)

    $('.hours-slept__today-input').html(instantiatedSleep.hoursSleptInDate(currentDate()));
    $('.hours-quality__today-input').html(instantiatedSleep.hoursSleptQualityInDate(currentDate()));
    $('.hours-slept__average-input').html(instantiatedSleep.averageHrsSlept(currentDate()));
    $('.hours-quality__average-input').html(instantiatedSleep.averageSleepQuality(currentDate()));

    $('.hours-slept__daily-day-1').html(instantiatedSleep.hoursSleptWeek(currentDate())[0]);
    $('.hours-slept__daily-day-2').html(instantiatedSleep.hoursSleptWeek(currentDate())[1]);
    $('.hours-slept__daily-day-3').html(instantiatedSleep.hoursSleptWeek(currentDate())[2]);
    $('.hours-slept__daily-day-4').html(instantiatedSleep.hoursSleptWeek(currentDate())[3]);
    $('.hours-slept__daily-day-5').html(instantiatedSleep.hoursSleptWeek(currentDate())[4]);
    $('.hours-slept__daily-day-6').html(instantiatedSleep.hoursSleptWeek(currentDate())[5]);
    $('.hours-slept__daily-day-7').html(instantiatedSleep.hoursSleptWeek(currentDate())[6]);

    $('.hours-quality__daily-day-1').html(instantiatedSleep.qualitySleptWeek(currentDate())[0]);
    $('.hours-quality__daily-day-2').html(instantiatedSleep.qualitySleptWeek(currentDate())[1]);
    $('.hours-quality__daily-day-3').html(instantiatedSleep.qualitySleptWeek(currentDate())[2]);
    $('.hours-quality__daily-day-4').html(instantiatedSleep.qualitySleptWeek(currentDate())[3]);
    $('.hours-quality__daily-day-5').html(instantiatedSleep.qualitySleptWeek(currentDate())[4]);
    $('.hours-quality__daily-day-6').html(instantiatedSleep.qualitySleptWeek(currentDate())[5]);
    $('.hours-quality__daily-day-7').html(instantiatedSleep.qualitySleptWeek(currentDate())[6]);

    const activityRepository = new ActivityRepository(randomID);
    const activity = activityRepository.instantiateActivity();
    let instantiatedActivity = activity.find(item => item.userData.userID === randomID)
  


    console.log(instantiatedActivity.thisUserData())

  })


  
