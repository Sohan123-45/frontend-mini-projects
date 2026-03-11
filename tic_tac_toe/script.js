let boxes=document.querySelectorAll(".box");
let o=true;
let win=false;
let ans=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (box.innerText !== "" || win) return;
        if(o==true){
            box.innerHTML="<p>O</p>";
            box.style.color="blue";
            o=false;
        }
        else if(o==false){
            box.innerHTML="<p>X</p>";
            box.style.color="black"
            o=true;
        }
        for(let i=0;i<ans.length;i++){
            let pos1=ans[i][0];
            let pos2=ans[i][1];
            let pos3=ans[i][2];
            let val1=document.getElementById(pos1).innerText;
            let val2=document.getElementById(pos2).innerText;
            let val3=document.getElementById(pos3).innerText;
            if(val1 !== "" && val1 === val2 && val2 === val3){
                document.querySelector(".winner").innerHTML=`<p>${val1} Wins</p>`;
                win=true;
                break;
            }
        }
    });
});