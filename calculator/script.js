let input=[];
let num="";
function calculate(input){
    if(input[1]=="+"){
        return Number(input[0])+Number(input[2]);
    }
    else if(input[1]=="-"){
        return Number(input[0])-Number(input[2]);
    }
    else if(input[1]=="x"){
        return Number(input[0])*Number(input[2]);
    }
    else if(input[1]=="/"){
        return Number(input[0])/Number(input[2]);
    }
    else{
        return "Error";
    }
}
let numberButtons= document.querySelectorAll(".numbers>div");
numberButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML!=="="&&button.innerHTML!=="AC"){
            num+=button.innerHTML;
            document.querySelector(".output").innerHTML=num;
        }
        else if(button.innerHTML==="="){
            input.push(num);
            console.log(input);
            num="";
            let ans=calculate(input);
            document.querySelector(".output").innerHTML=""+ans;
            input.length=0;
            input.push(ans);
        }
        else if(button.innerHTML==="AC"){
            document.querySelector(".output").innerHTML="";
            input.length=0;
            num="";
        }
    })
})
let operatorButtons=document.querySelectorAll(".operators>div");
operatorButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(num.length!=0){
            input.push(num);
            num="";
        }
                if (
            button.innerHTML === "-" &&
            (input.length === 0 || input[input.length - 1] === "x" ||
            input[input.length - 1] === "/" ||
            input[input.length - 1] === "+" ||
            input[input.length - 1] === "-")
        ) {
            num = "-";
            document.querySelector(".output").innerHTML = num;
            return;
        }
        else if(input.length==0)
            document.querySelector(".output").innerHTML="";
        else{
            input.push(button.innerHTML);
            document.querySelector(".output").innerHTML+=input[input.length-1];
            console.log(input)
        }
    })
})