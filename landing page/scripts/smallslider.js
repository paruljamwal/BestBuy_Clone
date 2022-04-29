var smallslide = [{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/dotdfb-216889.png;maxHeight=200;maxWidth=200",
    
},
{
   imgURL:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-507165-220131_DER-f1b7aab3-a477-4449-88fd-ae697fa9ed9b.jpg;maxHeight=504;maxWidth=740",
},
{
imgURL:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495694_sd.jpg;maxHeight=150;maxWidth=225",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478304cv11d.jpg;maxHeight=300;maxWidth=300",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484736_sd.jpg;maxHeight=150;maxWidth=225",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478304cv11d.jpg;maxHeight=300;maxWidth=300",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478304cv11d.jpg;maxHeight=300;maxWidth=300",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373127_sd.jpg;maxHeight=150;maxWidth=225",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453324_sd.jpg;maxHeight=272;maxWidth=400",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428991_sd.jpg;maxHeight=272;maxWidth=400",
}
];

slider()
function slider(){
    let minislider = document.getElementById("smalleslide");
    smallslide .textContent = " ";
      let image = document.createElement("img");
      image.setAttribute("id","leftsliderimg");
      
      let i = 1;
      setInterval(() => {
          if(i ==smallslide.length ){
              i=0;
          }
        image.src = smallslide[i].imgURL;
        minislider.append(image);
        i++;
      }, 3500);
    }