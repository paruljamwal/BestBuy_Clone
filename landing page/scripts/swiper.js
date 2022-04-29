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

var sliderbag = [
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464688_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Level-Touch Edition App Smart Lock-Matte Black",
        price: 329
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464686_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Level-Bolt App Retrofit Smart Lock",
        price: 190
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429450_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Epson-120 EpiqVision Ultra LS500 short Throw Laser Projection TV ",
        price: 5999
    },
  
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6354/6354960_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Apline-S-Series 1 Car Tweeters (Pairs)-Black",
        price: 899
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479707_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Amazon-50 Class 4- Series 4K UHD Smart Fire TV",
        price: 319
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1634/1634012_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Sony-Alpha a7 II full Frame Mirrorless Video Camera with 28-70mm",
        price: 1599
    },
   
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452913_sd.jpg;maxHeight=150;maxWidth=225",
        name: "ASUS-ROG Zephyrus 14 Gaming Laptop-AMD Ryzen 9-16GB",
        price: 15498
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432058_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Sony-Alpha 7C Full-frame Murroless Camera-Sliver",
        price: 1799
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479708_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Amazon-55 Class 4-Series 4K UHD Smart Fire TV",
        price: 3499
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5852/5852906_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Nikon-D7500 Dslr 4k Video Camera (Body Only)-Black",
        price: 9999
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461977_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Lenevo Ideapad 3 15.6 FHD Touch Screen Laptop-Intel Core i5",
        price: 5499
    },
    {
        Image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1261/1261402_sd.jpg;maxHeight=150;maxWidth=225",
        name: "Logitech-MK550 Ergonomic Full-size Wirelless Alkaline Wave",
        price: 4999
    }

];

appendSponsered(sliderbag)
// var bag=JSON.parse(localStorage.getItem("cartdata"));
function appendSponsered(arr) {
    let x = ` `;
    arr.map((el) => {
        x += `  <div class="swiper-slide">
      <img
        src= ${el.Image}
        alt="">
      <p><b>${el.name}</b></p>
      <h5>$ ${el.price} </h5>
     <a href="sample.html"> <button id="gotocart"><b>Go To Product</b></button></a>
      
 
    </div>`
    });
    document.querySelector(".swiper-wrapper").innerHTML = x;
}
