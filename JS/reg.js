const uname = document.querySelector("#uname");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const regB = document.querySelector("#regB");
const resetB = document.querySelector("#resetB");
const form = document.querySelector("#form");

function createStore() {
  let store = JSON.parse(localStorage.getItem("store"));
  if (store === null) {
    localStorage.setItem("store", JSON.stringify([]));
    return store;
  } else {
    return store;
  }
}
createStore();

function addUser() {
  let store = createStore();
  let unameInput = uname.value.trim();
  let passwordInput = password.value.trim();
  let confirmInput = confirm.value.trim();

  if (confirmInput != passwordInput) {
    alert("Please re-enter correct password");
    return false;

  } else {

    const User = {
      userName: unameInput,
      password: passwordInput
    };
  
    store.push(User);
    localStorage.setItem("store", JSON.stringify(store));
  }

 
}

regB.onclick = addUser;
