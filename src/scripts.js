const currentDate = () => {
  var fullDate = new Date()
  var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
  var currentDate = fullDate.getDate()  + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
  return currentDate;
}

const asideDate = () => {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let current_datetime = new Date();
  let formatted_date = days[current_datetime.getDay()] + " | " + months[current_datetime.getMonth()] + " " + current_datetime.getDate() + ", " +  current_datetime.getFullYear()
  return formatted_date
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
    var newIDs = [];
    for (let i = 1; newIDs.length < 5; i++) {
        const randomID = Math.floor(Math.random() * userData.length) + 1;
        if(newIDs.indexOf(randomID) === -1) {newIDs.push(randomID)}
    }

    const randomID = newIDs[0]

    const userRepository = new UserRepository(randomID);

    $('.aside__welcome-name').html(userRepository.userFirstName());
    $('.aside__date').html(asideDate());
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

    $('.your-steps-today').html(instantiatedActivity.usersNumberOfStepsToday(currentDate()));
    $('.your-active-minutes-today').html(instantiatedActivity.activeMinutes(currentDate()));
    $('.your-miles-today').html(instantiatedActivity.stepsToMiles(currentDate()));

    $('.others-steps-today').html(activityRepository.oneDayAverageStepsAll(currentDate()));
    $('.others-active-minutes-today').html(activityRepository.oneDayAverageMinutesActiveAll(currentDate()));
    $('.others-miles-today').html(instantiatedActivity.stepsToMiles(currentDate()));
  
    $('.your-stairs-climbed-today').html(instantiatedActivity.usersNumberStairsClimbedToday(currentDate()));
    $('.others-stairs-climbed-today').html(activityRepository.oneDayAverageStairsClimbedAll(currentDate()));

    $('.one-week-stpes__daily-day-1').html(instantiatedActivity.oneWeekSteps(currentDate())[0]);
    $('.one-week-stpes__daily-day-2').html(instantiatedActivity.oneWeekSteps(currentDate())[1]);
    $('.one-week-stpes__daily-day-3').html(instantiatedActivity.oneWeekSteps(currentDate())[2]);
    $('.one-week-stpes__daily-day-4').html(instantiatedActivity.oneWeekSteps(currentDate())[3]);
    $('.one-week-stpes__daily-day-5').html(instantiatedActivity.oneWeekSteps(currentDate())[4]);
    $('.one-week-stpes__daily-day-6').html(instantiatedActivity.oneWeekSteps(currentDate())[5]);
    $('.one-week-stpes__daily-day-7').html(instantiatedActivity.oneWeekSteps(currentDate())[6]);

    $('.one-week-flight-stairs__daily-day-1').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[0]);
    $('.one-week-flight-stairs__daily-day-2').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[1]);
    $('.one-week-flight-stairs__daily-day-3').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[2]);
    $('.one-week-flight-stairs__daily-day-4').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[3]);
    $('.one-week-flight-stairs__daily-day-5').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[4]);
    $('.one-week-flight-stairs__daily-day-6').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[5]);
    $('.one-week-flight-stairs__daily-day-7').html(instantiatedActivity.oneWeekFlightsStairsClimbed(currentDate())[6]);

    $('.one-week-active-minutes__daily-day-1').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[0]);
    $('.one-week-active-minutes__daily-day-2').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[1]);
    $('.one-week-active-minutes__daily-day-3').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[2]);
    $('.one-week-active-minutes__daily-day-4').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[3]);
    $('.one-week-active-minutes__daily-day-5').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[4]);
    $('.one-week-active-minutes__daily-day-6').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[5]);
    $('.one-week-active-minutes__daily-day-7').html(instantiatedActivity.oneWeekMinutesActive(currentDate())[6]);


    var names = userRepository.returnNamesFromIds(newIDs)
    var weeks = [];
    var totals = [];
    newIDs.forEach(el => {
        el = activity.find(item => item.userData.userID === el);

        var total = el.oneWeekSteps(currentDate()).reduce((acu, cur) => {
            return acu + cur;
        })

        weeks.push(el.oneWeekSteps(currentDate()));
        totals.push(total)
    })

    var max = Math.max(...totals)

    if((totals.indexOf(max)+1) === 1) {
      $('.winner-you').css("color", "#548C72")
    } else if ((totals.indexOf(max)+1) === 2){
      $('.winner-person-2').css("color", "#548C72")
    } else if ((totals.indexOf(max)+1) === 3){
      $('.winner-person-3').css("color", "#548C72")
    } else if ((totals.indexOf(max)+1) === 4){
      $('.winner-person-4').css("color", "#548C72")
    } else {
      $('.winner-person-5').css("color", "#548C72")
    }
    
    $('.steps-against-friends-you-day-1').html(weeks[0][0]);
    $('.steps-against-friends-you-day-2').html(weeks[0][1]);
    $('.steps-against-friends-you-day-3').html(weeks[0][2]);
    $('.steps-against-friends-you-day-4').html(weeks[0][3]);
    $('.steps-against-friends-you-day-5').html(weeks[0][4]);
    $('.steps-against-friends-you-day-6').html(weeks[0][5]);
    $('.steps-against-friends-you-day-7').html(weeks[0][6]);
    $('.steps-against-friends-total-steps-you').html(totals[0]);

    $('.steps-against-friends-name-2').html(names[1]);
    $('.steps-against-friends-person-2-day-1').html(weeks[1][0]);
    $('.steps-against-friends-person-2-day-2').html(weeks[1][1]);
    $('.steps-against-friends-person-2-day-3').html(weeks[1][2]);
    $('.steps-against-friends-person-2-day-4').html(weeks[1][3]);
    $('.steps-against-friends-person-2-day-5').html(weeks[1][4]);
    $('.steps-against-friends-person-2-day-6').html(weeks[1][5]);
    $('.steps-against-friends-person-2-day-7').html(weeks[1][6]);
    $('.steps-against-friends-total-steps-person-2').html(totals[1]);

    $('.steps-against-friends-name-3').html(names[2]);
    $('.steps-against-friends-person-3-day-1').html(weeks[2][0]);
    $('.steps-against-friends-person-3-day-2').html(weeks[2][1]);
    $('.steps-against-friends-person-3-day-3').html(weeks[2][2]);
    $('.steps-against-friends-person-3-day-4').html(weeks[2][3]);
    $('.steps-against-friends-person-3-day-5').html(weeks[2][4]);
    $('.steps-against-friends-person-3-day-6').html(weeks[2][5]);
    $('.steps-against-friends-person-3-day-7').html(weeks[2][6]);
    $('.steps-against-friends-total-steps-person-3').html(totals[2]);

    $('.steps-against-friends-name-4').html(names[3]);
    $('.steps-against-friends-person-4-day-1').html(weeks[3][0]);
    $('.steps-against-friends-person-4-day-2').html(weeks[3][1]);
    $('.steps-against-friends-person-4-day-3').html(weeks[3][2]);
    $('.steps-against-friends-person-4-day-4').html(weeks[3][3]);
    $('.steps-against-friends-person-4-day-5').html(weeks[3][4]);
    $('.steps-against-friends-person-4-day-6').html(weeks[3][5]);
    $('.steps-against-friends-person-4-day-7').html(weeks[3][6]);
    $('.steps-against-friends-total-steps-person-4').html(totals[3]);

    $('.steps-against-friends-name-5').html(names[4]);
    $('.steps-against-friends-person-5-day-1').html(weeks[4][0]);
    $('.steps-against-friends-person-5-day-2').html(weeks[4][1]);
    $('.steps-against-friends-person-5-day-3').html(weeks[4][2]);
    $('.steps-against-friends-person-5-day-4').html(weeks[4][3]);
    $('.steps-against-friends-person-5-day-5').html(weeks[4][4]);
    $('.steps-against-friends-person-5-day-6').html(weeks[4][5]);
    $('.steps-against-friends-person-5-day-7').html(weeks[4][6]);
    $('.steps-against-friends-total-steps-person-5').html(totals[4]);
    
    console.log(randomID)
    console.log(instantiatedActivity.threeDayIncreasingSteps())
  })
