let userEmail = document.getElementById("email")
let userPass = document.getElementById("password")
let button = document.querySelector("button")

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
    else{
        // if(localStorage.users) {
        //     let users = JSON.parse(localStorage.users)
        //     users.push({
        //         email: userEmail.value.trim(),
        //         password: userPass.value.trim()
        //     })
        //     localStorage.setItem("users", JSON.stringify(users))
        // } else {
        //     localStorage.setItem("users",
        //     JSON.stringify(
        //     [
        //         {
        //         email: userEmail.value.trim(),
        //         password: userPass.value.trim()
        //         }
        //     ]));
        // }
        let userInput = {
            email: userEmail.value,
            password: userPassword.value
        }
        for (let i=0 ; i <users.length; i++){
            if (users[i] == userInput)
            window.location.assign("shop.html")
        }
    }
})