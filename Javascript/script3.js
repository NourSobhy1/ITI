function mode(){
    document.body.classList.toggle("dark");
}

function show(){
    var tag= document.getElementById("tname").value;
var className= document.getElementById("cname").value;
var _id= document.getElementById("id").value;
var _name= document.getElementById("name").value;

var tCount=tag? document.getElementsByTagName(tag).length :0;
var cCount=className? document.getElementsByTagName(className).length :0;
var iCount=_id? 1 :0;
var nCount=_name? document.getElementsByTagName(_name).length :0;

document.getElementById("output").innerHTML =
                "Number Of " + tag + " : " + tCount +
                " | Class " + className + " : " + cCount +
                " | Id : " + iCount +
                " | Name : " + nCount;
}



// ----------------------------task3----------------------------------
var id = 1;
function addStudent() {

    var name = document.getElementById("studentName").value;
    var age = document.getElementById("studentAge").value;

    var nameError = document.getElementById("nameError");
    var ageError = document.getElementById("ageError");

    nameError.innerHTML = "";
    ageError.innerHTML = "";

    var valid = true;

     if (name === "") {
        nameError.innerHTML = "Student Name is Required";
        valid = false;
    } else if (name.length <= 3) {
        nameError.innerHTML = "Name Length Must be greater than 3";
        valid = false;
    }
     if (age === "") {
        ageError.innerHTML = "Age is Required";
        valid = false;
    } else if (parseInt(age) <= 18) {
        ageError.innerHTML = "Age Must be greater than 18";
        valid = false;
    }

    if (valid === false) {
        return;
    }

    var table = document.getElementById("tableBody");

    var row = document.createElement("tr");

    row.innerHTML =
        "<td>" + id + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + age + "</td>" +
          "<td class='delete'>delete student</td>";

    table.appendChild(row);

    id++;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}