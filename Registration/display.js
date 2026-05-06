let users = JSON.parse(localStorage.getItem("users")) || [];

let table = document.getElementById("dataTable");

users.forEach(u=>{
table.innerHTML += `
<tr>
<td>${u.fname} ${u.lname}</td>
<td>${u.dob}</td>
<td>${u.gender}</td>
<td>${u.mobile}</td>
<td>${u.email}</td>
</tr>
`;
});