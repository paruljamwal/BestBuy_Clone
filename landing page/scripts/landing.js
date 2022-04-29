var slidermain1=document.getElementById("slidermain1");
var swaperitem1=document.getElementsByClassName("slideritem1");
function swapernext(){
    slidermain1.append(swaperitem1[0]);
    
    }

    function swaperpre1(){
          slidermain1.prepend(swaperitem1[swaperitem1.length-1]);
    }


    var slidermain2=document.getElementById("slidermain2");
var swaperitem2=document.getElementsByClassName("slideritem2");
function next2(){
    slidermain2.append(swaperitem2[0]);
     }

    function pri2(){
          slidermain2.prepend(swaperitem2[swaperitem2.length-1]);
         
    }

    var slidermain7=document.getElementById("slidermain7");
var swaperitem7=document.getElementsByClassName("slideritem7");
function next7(){
    slidermain7.append(swaperitem7[0]);
     }

    function pri7(){
          slidermain7.prepend(swaperitem7[swaperitem7.length-1]);
         
    }

    var slidermain5=document.getElementById("slidermain5");
var swaperitem5=document.getElementsByClassName("slideritem5");
function next5(){
    slidermain5.append(swaperitem5[0]);
     }

    function pri5(){
          slidermain5.prepend(swaperitem5[swaperitem5.length-1]);
         
    }


    var slidermain6=document.getElementById("slidermain6");
var swaperitem6=document.getElementsByClassName("slideritem6");
function next6(){
    slidermain6.append(swaperitem6[0]);
     }

    function pri6(){
          slidermain6.prepend(swaperitem6[swaperitem6.length-1]);
         
    }

//    let logoimg= document.querySelector("#logo1")
//    logoimg.addEventListener("click",logochange())
//     function logochange(){
//         window.location.href="../landing page/landing.html"
//     }
    // var cartcounter=document.querySelector("#count");
    // var cartdata=JSON.parse(localStorage.getItem("cart"))||[];
    // cartcounter.append(cartdata.length);
    document.querySelector("#logo").addEventListener("click", function() {
        window.location.href="../landing page/landing.html"
    });
    
 