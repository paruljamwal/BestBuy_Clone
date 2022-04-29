//getdata()
//appenddata()
// netwrk call take time so async

// whatever url u pass not hardcoded.

async function getdata(url) {
    try {
        let res = await fetch(url)
        let data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err)
    }

}
//append data 
// it is not await no waiting


//data may be diff; use paramtr
//need some parant for appnd
function appenddata(data,parent){
    data.forEach((el) => {
        //read data all
        //create frame
        let box=document.createElement("div");
        let p=document.createElement('p');
        p.innerHTML=el.title;
        let img=document.createElement('img');
        img.src=el.image
        box.append(img,p);
        parent.append(box);
    });
}
//this is used in multiple pages so export


export {getdata , appenddata}