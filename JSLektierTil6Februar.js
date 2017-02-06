$(document).ready(function () {
    var listOfAllUsers = document.getElementById('listOfAllUsers');
    var loginAndRegistration = document.getElementById('loginAndRegistration');
    var registerForm = document.getElementById('register-form');
    var loginForm = document.getElementById('login-form');
    var toggleButton = document.getElementById('toggle_Btn');
    var userLoggedIn;

console.log(userLoggedIn);
setUpLoginAndRegistrationDiv();
setUpUserListAndLogoutButton();
updateSiteToLoginStatus();

function setUpLoginAndRegistrationDiv(){
    //////Lost password text
    $("#lostPW").click(function () {
        alert("Too bad!");
    })

    var toggled = true;

    //////Registration button
    $("#reg_Btn").click(function(){
                console.log("register button pressed") //Den når hertil

    // storing input from register-form
    var name = document.getElementById('regUsername');
    var pw = document.getElementById('regPassword');
    localStorage.setItem("un"+name.value, name.value);
    localStorage.setItem("pw"+name.value, pw.value);

    });

    //////Menu toggle login/registration button
    $("#toggle_Btn").click(function () {

        console.log("toggle button pressed")  //den når hertil

        if (toggled) {
            $(loginForm).toggle(500);
            $(registerForm).toggle(500);
            toggleButton.innerHTML = "Already registered?";
        }
        else {
            $(loginForm).toggle(500);
            $(registerForm).toggle(500);
            toggleButton.innerHTML = "Create account";
        }
        toggled = !toggled;
    });

    //////Login button
    $("#login_Btn").click(function(){
    // check if stored data from register-form is equal to entered data in the   login-form
    // stored data from the register-form
    // entered data from the login-form
    var userName = document.getElementById('loginUsername').value;
    var userPw = document.getElementById('loginPassword').value;

    var storedName = localStorage.getItem("un"+userName);
    var storedPw = localStorage.getItem("pw"+userPw);

console.log("login button pressed"); //Den når hertil
console.log(storedName);
console.log(storedPw);
    // check if stored data from register-form is equal to data from login form
    if (userName == storedName && userPw == storedPw) {
        alert('You are logged in.');
        userLoggedIn = storedName;
        localStorage.setItem('loggedIn', true);
     //   listOfAllUsers.toggle(0)
    } else {
        alert('ERROR');
    }
    });
}

function setUpUserListAndLogoutButton(){
    $('#logOut_Btn').click(function(){
        console.log("log-out button pressed")
                localStorage.setItem('loggedIn', false);
        updateSiteToLoginStatus();
    })
}

function updateSiteToLoginStatus(){
    console.log(localStorage.getItem('loggedIn') == 'true');
if (localStorage.getItem('loggedIn') == 'true'){
    //Logged in  
    $(listOfAllUsers).show();
    //var users;
    
    var userList = document.getElementById("userList");
    for (var key in localStorage) {
        if (key.toString().substring(0,2) == "un"){
    //users += localStorage[key];
           var userListItem = document.createElement("li");

                    //create new text node
            var userListValue = document.createTextNode(localStorage.getItem(key));

                    //add text node to li element
            userListItem.appendChild(userListValue);

                    //add new list element built in previous steps to unordered list
                    //called userList
            userList.appendChild(userListItem);
    }}
    $(loginAndRegistration).hide();
}
else{//Not logged in
        $(listOfAllUsers).hide();
    $(loginAndRegistration).show();
}

};



/*function logInOrOut(){
//    if(userLoggedIn)
//   loginAndRegistration.show();
//   listOfAllUsers.show();        
//          console.error("logInOutMethod ran")
 
}
*/});