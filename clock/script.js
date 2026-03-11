let days=["SU","MO","TU","WE","TH","FR","SA"];
async function time(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const now=new Date();
            let hours=String(now.getHours()).padStart(2,"0");
            let minutes=String(now.getMinutes()).padStart(2,"0");
            let seconds=String(now.getSeconds()).padStart(2,"0");
            let dayName=days[now.getDay()];
            document.querySelector(".day").innerHTML=dayName;
            document.querySelector(".hour").innerHTML=hours;
            document.querySelector(".minute").innerHTML=minutes;
            document.querySelector(".second").innerHTML=seconds;
            let date=String(now.getDate()).padStart(2,0);
            let month=String(now.getMonth()).padStart(2,0);
            let year=now.getFullYear(); 
            document.querySelector(".date").innerHTML=`${date} / ${month} / ${year}`;
        },1000)
        resolve("");
    })
}
async function main(){
    await time();
}
main();