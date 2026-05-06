document.getElementById("regForm").addEventListener("submit", function(e){
e.preventDefault();

let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let dob = document.getElementById("dob").value;
let mobile = document.getElementById("mobile").value;
let email = document.getElementById("email").value;

let gender = document.querySelector('input[name="gender"]:checked');

if(!gender){
alert("Select Gender");
return;
}

if(mobile.length !== 10 || isNaN(mobile)){
alert("Mobile must be 10 digits");
return;
}

let user = {fname,lname,dob,mobile,email,gender:gender.value};

let users = JSON.parse(localStorage.getItem("users")) || [];
users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Registered Successfully 🚀");
window.location.href="display.html";
});