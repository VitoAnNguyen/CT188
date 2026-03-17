var elUsername = document.getElementById('username'); //get username input
var elMsg = document.getElementById('feedback'); //get feedback element

function checkUsername(minLength) { //Declare function
    if (elUsername.ariaValueMax.length < minLength) { // if username too short
        //set the error message
        elMsg.textContent = 'Username must be' + minLength + 'characters or more';
    } else { //Otherwise
        elMsg.innerHTML = ''; //clear msg
    }
}

elUsername.addEventListener('blur', function() { //when it loses focus
    checkUsername(5); //pass arguments here
}, fales);