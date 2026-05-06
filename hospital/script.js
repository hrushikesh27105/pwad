let patients = JSON.parse(localStorage.getItem("patients")) || [];

// update count on load
document.getElementById("count").innerText = patients.length;

// form submit
document.getElementById("patientForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let gender = document.getElementById("gender").value;
let mobile = document.getElementById("mobile").value;
let problem = document.getElementById("problem").value;

// validation
if(mobile.length !== 10 || isNaN(mobile)){
alert("Enter valid 10-digit mobile number");
return;
}

let patient = {name, age, gender, mobile, problem};

patients.push(patient);

localStorage.setItem("patients", JSON.stringify(patients));

// update count
document.getElementById("count").innerText = patients.length;

alert("Patient Registered Successfully!");

document.getElementById("patientForm").reset();
});