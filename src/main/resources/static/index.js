// alert("hello" ,+name);
console.log("Hello from js");

//data = {

//    "name" : "Jane",
//    "gender" : "Female"
//}

//data.name // Jane


var users = [
    {
        "name" : "Sravasthi",
        "gender" : "Female",
        "image" : "jane.png"
    },
    {
        "name" : "John doe",
        "gender" : "Male",
        "image" : "john.png"
    }
]

var id = 0;

function toggleUser(){
    id = (id + 1)%2
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].image;
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;
    var gender = document.getElementById("user-gender");
    gender.innerHTML = users[id].gender;

}

function randomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            var usersData = data.results[0];

            var userImage = document.getElementById("user-image");
            userImage.src = usersData.picture.large;
            var userName = document.getElementById("user-name");
            userName.innerHTML = usersData.name.first + " " + userDate.name.last;
            var gender = document.getElementById("user-gender");
            gender.innerHTML = usersData.gender;
  
        })
        .catch(function(err){
            console.log("Error: " + err);
        })

}