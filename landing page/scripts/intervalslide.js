var allslideData = [{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-513191-mappls-e51e1a14-7709-41b6-a3ec-f460a16afbaa.jpg",
    
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_2022TopDeals-GHPApp-LV-55adde1f-dd0b-48d7-9a08-b28bbc00187d.jpg",
},
{
    imgURL: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-459209-apple-868eb501-bc93-4129-b7e9-fc87b053083e.jpg",
},
{
    imgURL:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-514747-S22-na-ghp_der-fc0773d2-eab3-4279-9ad1-793d2ffa059e.jpg"
},
{
    imgURL:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-samsung-tablet-gc-MMT-514746-v3-0301-44ce8c82-78ae-4d90-9b03-9dcefa0db8fb.jpg"
},
{
    imgURL:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-513191-mappls-e51e1a14-7709-41b6-a3ec-f460a16afbaa.jpg"
},
{
    imgURL:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-514747-S22-na-ghp_der-fc0773d2-eab3-4279-9ad1-793d2ffa059e.jpg"
},
];

slider()
function slider(){
    let sliderDiv = document.getElementById("leftsliderbox");
    sliderDiv .textContent = " ";
      let image = document.createElement("img");
      image.setAttribute("id","leftsliderimg");
      
      let i = 1;
      setInterval(() => {
          if(i == allslideData.length ){
              i=0;
          }
        image.src = allslideData[i].imgURL;
        sliderDiv.append(image);
        i++;
      }, 2000);

      
    
    }

    // var gotootherpage=document.querySelector("#leftsliderimg");
    // gotootherpage.addEventListener("click",pro);
    // function pro(){
    //     window.location.href="sample.html"
    // }