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
    usergender.innerHTML = users[id].gender;

}