// Get data
const nameValue = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const error = document.querySelector(".error");
const success = document.querySelector("#success");

// Validate data
function validateForm(){

    // remove message when the error is cleared
    clearMessages();
    let errorFlag = false;

    // validating name inputted
    if(nameValue.value.length < 1){
        error[0].innerText = "Name cannot be blank";
        nameValue.classList.add("error-border");
        errorFlag = true;
    }

    // validating email inputted
    if (!emailIsValid(email.value)){
        error[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    // validating message inputted
    if(message.value.length < 1){
        error[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag){
        success.innerText = "Success!";
    }
}

// clear error/sucess popups
function clearMessages(){
    for(let i = 0; i < error.length; i++){
        error[i].innerText = "";
    }
    success.innerText = "";
    nameValue.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}