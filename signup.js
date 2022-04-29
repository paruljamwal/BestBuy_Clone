


document.querySelector("#form").addEventListener("submit",formsubmit);
// var userstack = JSON.parse(localStorage.getItem("userdatabase"));
// var userstack = [];
 var userStack = JSON.parse(localStorage.getItem("userdatabase")) || [];
function formsubmit(event){
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    var confirmpass = document.querySelector("#confirmpassword").value;
    var user = document.querySelector("#username").value;
    var mob = document.querySelector("#mob").value;
    // console.log(email,pass,user,mob)


    if(pass != confirmpass) {
        document.getElementById("messages").innerHTML="**Password are not same";
        return false;
    }

    if(pass.length < 5) {
        document.getElementById("messages").innerHTML="**Password length must be greater then five";
        return false;
    }

    if(pass === "" || email === "" || user === ""  || mob === "") {
        document.getElementById("messages").innerHTML="**please fill the above details";
        return false;
    }
   
    
    var userdata = {
        emailadd:email,
        password:pass,
        confirmpassword:confirmpass,
        username:user,
        mobilenumber:mob,
    };

   
    userStack.push(userdata);
    // console.log(userstack)
    localStorage.setItem("userdatabase", JSON.stringify(userStack));
    alert("Sign Up Successful")
    window.location.href="login.html"
}

//document.getElementById("image").addEventListener("click",function(){
  //  window.location.href="home.html"
//});



