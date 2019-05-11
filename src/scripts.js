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
    console.log()
})

