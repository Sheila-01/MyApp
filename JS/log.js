const usename = document.querySelector("#usename");
const password = document.querySelector("#password");
const logB = document.querySelector("#logB");
const form= document.querySelector("#form");


function checkDetails() {
let details = localStorage.getItem("store")
// details = JSON.parse(details)
// console.log(details)
details.forEach(function(user){
    console.log(user.userName)
    console.log(user.password)

    if(user != details )
    {
        alert("User doesn't exist! Please register for an account");
        // return false;

    } else{
        return window.location.href = 'reg.html';
    }

})

}
// checkDetails();

logB.onclick = checkDetails;