var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "none",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let object2 = [
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452961_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "LG - 3.1-Channel 420W Wireless DTS Virtual:X ",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450295_rd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Sanus - Advanced  4D TV Wall Mount TVs 42 ",
    },  {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331611_rd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Sanus - Premium Series Advanced Tilt 4D Mount for TVs 42 Black Black Metal color Soundbar",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1501/1501144_sd.jpg;maxHeight=640;maxWidth=550",
        span: "Hand Towel ",
        detail: "Legrand - In-Wall Flat Screen White",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5463/5463303ld.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Sanus - Premium Series for Most TVs 32-64 up to 150 lbs - Black",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6353/6353060_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Rocketfish™ - Full-Motion TV Wall Mount for Most 40 - 75 TVs - Black",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451333_sd.jpg;maxHeight=640;maxWidth=550",
        span: "Cotton Wash Cloth",
        detail: "Best Buy essentials™ - Full Motion TV Wall Mount for 47–84 TVs - Black",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9881/9881868_rd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Rocketfish™ - Tilting TV Wall Mount for Most 32-75 TVs - Black",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6361/6361807_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Sanus - Mount for Sonos Beam Soundbar (Gen 1, 2) - Black",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452961_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "LG 3.1.2 Channel Soundbar with Dolby Atmos Soundbar (Gen 1, 2)",
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406935_sa.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Best Buy® - Totaltech™ Yearly Membership  (Gen 1, 2) Premium  Membership",
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6354/6354301_rd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Rocketfish™ - Universal Soundbar Mounting System - Black",
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6332/6332693ld.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Sanus - Premium Series - Black Brushed Metal Advance  Premium Series",
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3720/3720011_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "AudioQuest - Ocean 5' 4K-8K-10K 48Gbps In-Wall HDMI Cable - Blue/Black",
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9881/9881868_rd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Rocketfish™ - Tilting TV Wall Mount for Most 32-75 TVs - Black",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6361/6361807_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Sanus - Mount for Sonos Beam Soundbar (Gen 1, 2) - Black color Soundbar",
    }, {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452961_sd.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "LG 3.1.2 Channel Soundbar with Dolby Atmos Soundbar (Gen 1, 2) Soundbar",
    },
    {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406935_sa.jpg;maxHeight=640;maxWidth=550",
        span: "",
        detail: "Best Buy® - Totaltech™ Yearly Membership  Advance  Premium Series",
    },
]

appendSponsered(object2)

function appendSponsered(arr) {
    let x = ` `;
    arr.map((el) => {
        x += `  <div class="swiper-slide">
      <img
        src= ${el.image}
        alt="" width="75px" height="65px">
      <p><b>${el.span}</b> ${el.detail}</p>
      <h5>$ ${Math.floor(Math.random() * 2000) + 500} </h5>
      <button><b>Add To Cart</b></button>
    </div>`
    });
    document.querySelector(".swiper-wrapper").innerHTML = x;
}
 var sum=0;

var div3=document.getElementById("div3prod").innerHTML;

var arr=JSON.parse(localStorage.getItem("cartitem"))||[];
function showcart(arr){
    document.getElementById("div3prod").innerHTML="";

arr.map((elem)=>{
   let div=document.createElement("div");
   div.id="div11"

   let image=document.createElement("img");
   image.setAttribute("id","proimg");
   image.src=elem.image;
    
   let div4=document.createElement("p");
   div4.innerHTML=`<i class="fa-solid fa-xmark"></i>`
   div4.style.top="0px"
   div4.className="logo"


   let p =document.createElement("p");
   p.setAttribute("id","texthover");
   p.innerText=elem.name;

   let price=document.createElement("p");
//    price.setAttribute("","");
   price.innerText=elem.price;
   var x=elem.price.split("$");
   sum+=Number(x[1]);


   let h5 = document.createElement("p");
   h5.innerHTML = `&#9733&#9733&#9733&#9733&#9734`;
   h5.style.color="rgb(255, 195, 31)";
   h5.style.fontSize="20px"

   let save=document.createElement("button");
   save.setAttribute("id","mybtn");
   save.innerText=elem.save;

  div.append(image,div4,p,h5,price,save);
  document.getElementById("div3prod").append(div);

})

document.getElementById("paisahipaisa").innerHTML=`$ ${sum}`
document.getElementById("paisa").innerHTML=`$ ${sum-100}`

localStorage.setItem("paisa",sum)
function movetopayment(){
 window.location.href="../payment/payment.html"
}
}
showcart(arr)