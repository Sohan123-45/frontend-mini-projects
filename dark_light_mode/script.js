// let light=document.getElementById("light_mode").style;
// light.display="none";
// let dark=document.getElementById("dark_mode").style;
// document.querySelector(".container").addEventListener("click",()=>{
//     if(light.display=="none"){
//         light.display="block";
//         dark.display="none";
//         document.body.style.backgroundColor="black";
//     }
//     else{
//         light.display="none";
//         dark.display="block";
//         document.body.style.backgroundColor="white";
//     }
// })
let light=document.getElementById("light_mode");
light.classList.add("hidden");
document.querySelector(".container").style.boxShadow="0px 4px 15px rgba(0, 0, 0, 0.48)";
let dark=document.getElementById("dark_mode");
function changetheme(theme){
    if(theme=="light"){
        light.classList.add("hidden");
        dark.classList.remove("hidden");
        document.body.style.backgroundColor = "white";
        document.querySelector(".container").style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.48)";
    }
    else{
        light.classList.remove("hidden");
        dark.classList.add("hidden");
        document.body.style.backgroundColor = "black";
        document.querySelector(".container").style.boxShadow = "0px 4px 15px rgba(139, 139, 139, 0.66)";
    }
}
let savedTheme=localStorage.getItem("theme");
if(savedTheme=="dark"||savedTheme=="light"){
    changetheme(savedTheme);
}
document.querySelector(".container").addEventListener("click",()=>{
    let newTheme=light.classList.contains("hidden")?"dark":"light";
    localStorage.setItem("theme",newTheme);
    changetheme(newTheme);
})