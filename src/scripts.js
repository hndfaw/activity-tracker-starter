console.log("Hello World");

const userRepository = new UserRepository('../data/usersSub.js');

function createTaskItemList(itemList) {
  listEntry.innerHTML += `
   <div class="list-entry">
     <img class="checkbox-img" src="assets/delete.svg">
     <p class="task-content">${itemList.content}</p>
   </div>
  `
  checkCardInputs();
}