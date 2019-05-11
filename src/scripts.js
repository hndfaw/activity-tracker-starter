$(window).on('load', () => {
    const randomNum = 1 + Math.floor(Math.random() * userData.length)
    const userRepository = new UserRepository(randomNum);
    $('.aside__welcome-name').html(userRepository.userFirstName());
    $('.aside__fullname').html(userRepository.userData().name);
    $('.aside__address').html(userRepository.userData().address);
    $('.aside__email').html(userRepository.userData().email);
    $('.aside__stride-length').html(userRepository.userData().strideLength);
})

