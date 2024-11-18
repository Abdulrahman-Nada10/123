function loki(){
    var UserName = document.getElementById('userName').value;
    var Email = document.getElementById('Email').value;
    var Phone = document.getElementById('Phone').value;
    var error = document.getElementById('error');
    var text = '';

    if(UserName.length < 3){
        text = 'Username must be at least 3 characters long';
        error.innerHTML = text;
        return false;
    }
    else if(Email.indexOf("@") == -1){
        text = 'Invalid Email';
        error.innerHTML = text;
        return false
    }else if(isNaN(Phone) || Phone.length != 11){
        text = 'Invalid Phone Number';
        error.innerHTML = text;
        return false
    }else{
        alert('Registration Successful');
        return true;
    }
}





















// var loki ='malek'
// console.log(loki.indexOf('c'));

// index = 0
// length = 1
