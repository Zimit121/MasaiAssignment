let form = document.querySelector('form');
let name = document.getElementById('name');
let employeeID = document.getElementById('employeeID');
let department = document.getElementById('department');
let exp = document.getElementById('exp');
let email = document.getElementById('email');
let mbl = document.getElementById('mbl');
let tbody = document.querySelector('tbody');
let Alldata = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let data = {
    name: name.value,
    employeeID: employeeID.value,
    department: department.value,
    exp: exp.value,
    email: email.value,
    mbl: mbl.value
  };

  Alldata.push(data);

  name.value = '';
  employeeID.value = '';
  department.value = '';
  exp.value = '';
  email.value = '';
  mbl.value = '';

  tbody.innerHTML = null;

  Alldata.forEach((ele) => {
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener('click',function(){
    row.innerText = null
    })


    td8.append(deleteBtn)

    td1.innerText = ele.name;
    td2.innerText = ele.employeeID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mbl;
    
    if (ele.exp > 5) {
      td7.innerText = "Senior";
    } else if (ele.exp > 2) {
      td7.innerText = "Junior"
    } else {
      td7.innerText = "Fresher"
    }
    // ele.experience > 5 ? td7.innerText = "Senior" : (ele.experience > 2 ? td7.innerText ="Junior" : td7.innerText ="Fresher");
    row.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(row);
  });

});