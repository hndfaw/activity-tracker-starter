var userFirstName = document.querySelector('.user__first_name');


window.addEventListener('load', getUsersFirstName);

function getUsersFirstName() {
  const users = new Users(1);
   userFirstName.innerHTML = users.userFirstName(userData);
}