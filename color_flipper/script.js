function colorpicker(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
document.querySelector(".change").addEventListener("click",()=>{
    document.body.style.backgroundColor=colorpicker();
})