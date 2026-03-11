let second=0,minute=0,hour=0;
function updateTime(){
    if(second<59){
        second++;
    }
    else if(second==59&&minute<59){
        minute++;
        second=0;
    }
    else if(minute==59){
        hour++;
        minute=0;
        second = 0;
    }
}
let intervalID;
let st=document.querySelector(".start");
st.addEventListener("click", () => {
    if (!intervalID) { 
        intervalID = setInterval(() => {
            updateTime();
            let s = String(second).padStart(2, "0");
            let m = String(minute).padStart(2, "0");
            let h = String(hour).padStart(2, "0");
            document.querySelector(".display").innerHTML = `${h}:${m}:${s}`;
        }, 1000);
    }
});

document.querySelector(".pause").addEventListener("click",()=>{
    clearInterval(intervalID);
    intervalID=null;
})
document.querySelector(".reset").addEventListener("click",()=>{
    clearInterval(intervalID);
    intervalID=null;
    second = 0;
    minute = 0;
    hour = 0;
    document.querySelector(".display").innerHTML = `00:00:00`;
})