
userData = [
    {
        userEmail: "azhar@gmail.com",
        userPassword: "12345",
        userName: "Azhar",
        userGender: "male",
        active: true,
        marks : [12,4,6,8,9,10,10],

    }
]


const signup = () => {

    var user = document.getElementById("name").value;
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value;


    isFound = false;
    if (document.getElementById("male").checked) {
        gender = "male";
    }
    else {
        gender = "female";
    }


    for (let i = 0; i < userData.length; i++) {

        if (userData[i].userEmail === email) {
            isFound = true;
            break;
        }

    }

    if (isFound) {
        alert("email alreay exists");
    }

    else {
        userData.push( new UserConstructor( user , email , password , gender , [1,4,6,8,10,1,5])  )
   
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("signedup succesfully")
        // window.location.href = "login.html";
    }

return false;

}
const check = () => {

    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var index = false;

    for (let i = 0; i < userData.length; i++) {
        if (email === userData[i].userEmail) {
            index = i
            localStorage.setItem("currIndex", JSON.stringify(index));
            break;
        }
    }
    if (index === false) {
        alert("password or email not found");
    }
    else if (password === userData[index].userPassword) {
        alert("logged in successfully", index);
        window.location.href = "dashboard.html";

    }

    else {
        alert("password or email not found");
    }
    return false;
}


userData = JSON.parse(localStorage.getItem("userData"));


var index = JSON.parse(localStorage.getItem("currIndex"));

 var averageBtn = document.getElementById("averageBtn");

const loginSuccess = () => {
    index = parseInt(index);
    console.log(index);
    document.getElementById("loginemail").innerHTML = userData[index].userEmail;
    document.getElementById("name").innerHTML = userData[index].userName;
}


// if (window.location.href="dashboard.html")
// {
//     averageBtn.addEventListener("click",function(){
//         index = parseInt(index);
//         userData[1].calculateAverage();
//         console.log(index);
        
    
//     })
// }



const logout = () => {
    window.location.href = "login.html";
}
// DONE WITH IT