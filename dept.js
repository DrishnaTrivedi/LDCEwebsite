let grids = document.querySelector(".gridImgs");
let div = grids.getElementsByTagName("img");
console.log(div);

let bigImg = document.querySelector(".gridEl");

Array.from(div).forEach(e => {
    e.addEventListener("click", ()=>{
        // alert("img clicked");
        // console.log(e.src);
        let path = e.src;
        let previousImg= bigImg.getElementsByTagName("img");
        let previousImgURL = previousImg[0].getAttribute("src");
        bigImg.innerHTML= `
        <img src="${path}" alt="">  
        `
        e.src= previousImgURL;
    })
});
