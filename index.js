function fun() {
  var name1 = document.getElementById("name").value;
  var mobile = document.getElementById("mobileNumber").value;
  var email = document.getElementById("email").value;
  var table = document.getElementById("table");
  var flag = 0;
  console.log(mobile);
  if (name1 == "" || name1.length < 3) {
    alert("Name cannot be left empty");
    flag = 1;
  }
  if ((mobile == "" && flag == 0) || mobile.length < 10) {
    alert("Mobile Number cannot be left empty");
    flag = 1;
  }
  if (email == "" && flag == 0) {
    alert("Email cannot be left empty");
    flag = 1;
  }
  if (flag == 0) {
    var row = document.createElement("tr");
    var data1 = document.createElement("td");
    var data2 = document.createElement("td");
    var data3 = document.createElement("td");
    var data4 = document.createElement("td");

    data1.innerHTML = name1;
    data2.innerHTML = mobile;
    data3.innerHTML = email;
    data4.innerHTML = "<button id='deleteBtn' onclick=del() >Delete</button>";

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    table.appendChild(row);
  }
}
function del() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}
