let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
let userPass = document.getElementById("password")
let userPass2 = document.getElementById("password2")
let button = document.querySelector("button")

// localStorage.setItem("name", JSON.stringify(userName))
button.addEventListener("click",(e) =>{
    if (userEmail.value.length==0 && userPass.value.length==0){
    alert("Please enter an email and password")
    }
    else if(userEmail.value.length!=0 && userPass.value.length==0){
    alert("Please enter a password")
    }
    else if(userEmail.value.length==0 && userPass.value.length!=0){
    alert("Please enter an email")
    }
    else if (userEmail.value.length!=0 && userPass.value.length<8){
    alert("A password must have either 8 or more letters")
    }
    else if (userPass2.value.length==0 && userPass.value.length>=8) {
        alert("Please confirm your password")
    }
    else if (userPass2.value != userPass.value){
        alert ("Invalid confirmation")
    }
    else
    {
        localStorage.setItem("users")
        let users= [{
            email:userEmail.value,
            password:userPass.value,
        }]

        if(localStorage.users) {
            let users = JSON.parse(localStorage.users)
            users.push({
                email: userEmail.value.trim(),
                password: userPass.value.trim()
            })
            localStorage.setItem("users", JSON.stringify(users))
        } else {
            localStorage.setItem("users",
            JSON.stringify(
            [
                {
                email: userEmail.value.trim(),
                password: userPass.value.trim()
                }
            ]));
        }
    }
})