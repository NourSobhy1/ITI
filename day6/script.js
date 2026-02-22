

function Register(){
    var name= document.getElementById("_name").value;
    var age= document.getElementById("_age").value;
    var genders = document.getElementsByName("gender");
    var genderValue = "";
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderValue = genders[i].value;
        }
    }

    var date = new Date();
    date.setDate(date.getDate() + 7);
     setCookie("username", name,date);
     setCookie("gender", genderValue,date);
     setCookie("visits", 0, date);
     setCookie("registered", "true",date);


    location.replace("result.html");

}


if (window.location.pathname.includes("result.html")){
var username = getCookie("username");
var gender = getCookie("gender");
var visits = getCookie("visits");

visits = parseInt(visits) + 1;
setCookie("visits", visits);

var imgSrc = gender === "male" ? "1 (1).jpg" : "2 (1).jpg";

document.getElementById("result").innerHTML =
    "<img src='" + imgSrc + "' width='60'><br>" +
    "<h2>Hello " + username + "</h2>" +
    "<p>You have visited this site " + visits + " times</p>";}

if (window.location.pathname.includes("register.html")) {
    if (getCookie("registered") === "true") {
  window.location.replace("result.html");
 }
}




var getUsersBtn = document.getElementById("getUsersBtn");
var TableBody = document.querySelector("#usersTable tbody");
var detailsDiv = document.getElementById("details");


getUsersBtn.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function() {
        if(xhr.status == 200) {
            var users = JSON.parse(xhr.response);
            TableBody.innerHTML = "";
            for(var i = 0; i < users.length; i++) {
                var user = users[i];
                var row = document.createElement("tr");

                var id = document.createElement("td");
                id.innerHTML = i + 1;
                row.appendChild(id);

                var name = document.createElement("td");
                name.innerHTML = user.name;
                row.appendChild(name);

                var email = document.createElement("td");
                email.innerHTML = user.email;
                row.appendChild(email);

                var action = document.createElement("td");
                var btn = document.createElement("button");
                btn.innerHTML = "View Details";

                
                (function(u) {
                    btn.onclick = function() {
                        detailsDiv.innerHTML = 
                            "<p><strong>Name:</strong> " + u.name + "</p>" +
                            "<p><strong>Email:</strong> " + u.email + "</p>" +
                            "<p><strong>Website:</strong> " + u.website + "</p>" +
                            "<p><strong>Phone:</strong> " + u.phone + "</p>";
                    };
                })(user);

                action.appendChild(btn);
                row.appendChild(action);

                TableBody.appendChild(row);
            }
        }
    };
    xhr.send();
};










function myFunction(a, b) {
    try {
        if (arguments.length !== 2) {
            throw new Error("Function must accept exactly 2 parameters");
        }

        console.log("First:", a);
        console.log("Second:", b);
    } catch (error) {
        console.log(error.message);
    }
}

// myFunction(1);
// myFunction(1,2,4);


function addNumbers() {
    try {
        if (arguments.length === 0) {
            throw new Error("No parameters passed");
        }

        var sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== "number") {
                throw new Error("All parameters must be numbers");
            }
            sum += arguments[i];
        }

        console.log(sum);
    } catch (error) {
        console.log(error.message);
    }
}

addNumbers(1,'a',3);
addNumbers();


