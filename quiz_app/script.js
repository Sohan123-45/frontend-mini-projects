let audio =new Audio("crocodile_laugh.mp3");
const audiobtn=document.createElement("button");
audiobtn.innerHTML="<p>▶</p>";
audiobtn.addEventListener("click",()=>{
    audio.currentTime = 0;
    audio.play();
});

let currentAudio=null;
function createAudioButton(audioFile) {
    const audio = new Audio(audioFile);
    const btn = document.createElement("button");
    btn.className = "music-btn";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-music";
    btn.appendChild(icon);
    btn.addEventListener("click", () => {
            if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = audio;
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
    return btn;
}

const hogbackButtons = [
    createAudioButton("caesar_clown_laugh.mp3"),
    createAudioButton("morias_laugh.mp3"),
    createAudioButton("hogback_laugh.mp3"),
    createAudioButton("brooks_laugh.mp3")
];


const quizData=[
    {
        question:"1.Who was the first Straw Hat to be showed in the anime?",
        options:["Luffy","Zoro","Nami","Usopp"],
        answer:"Nami"
    },
    {
        question:"2.How many berries did Nami require to save her island from Arlong?",
        options:["100,000 Berries","1,000,000 Berries","10,000,000 Berries","100,000,000 Berries"],
        answer:"100,000,000 Berries"
    },
    {
        question:"3.Which sword did Zoro used with his mouth?",
        options:["Wado Ichimonji","Shisui","Enma","Sandai Kitetsu"],
        answer:"Wado Ichimonji"
    },
    {
        question:"4.Who is the biologocal father of Portgas D Ace?",
        options:["Gol D Roger","Whitebeard","Monkey D Garp","Edward Newgate"],
        answer:"Gol D Roger"   
    },
    {
        question:"5.What was the money used in Skypiea called?",
        options:[" Dials","Skypiean Gold","Extol","Belly"],
        answer:"Extol",
    },
    {
        question:"6.What is the name of the mushroom Dr. Hiruluk gave Chopper?",
        options:["Heal Heal Mushroom"," Sakura Cap","Blue Cap Mushroom","Amiudake"],
        answer:"Amiudake",
    },
    {
        question:"7.What is the laugh of Dr.Hogback? (Click the icon to hear)",
        options:["","","",""],
        answer:"2",
    },
    {
        question:"8.Which Straw Hat did NOT directly fight one of Doflamingo's top three executives in Dressrosa?",
        options:["Robin","Zoro","Usopp","Franky"],
        answer:"Robin",
    },
    {
        question:"9.Which of the following arcs are anime-only filler?",
        options:["The Long Ring Long Land arc","The Foxy’s Return arc","The G-8 Marine Base arc","Both B and C"],
        answer:"Both B and C",
    },
    {
        question:"10.What was the name of Jimbei's former captain while he was a member of the Sun Pirates?",
        options:["Fishing Tiger","Fisher Tiger","Sea Tiger","Grand Fisher"],
        answer:"Fisher Tiger",
    },
    {
        question:"11.How many children do Big Mom have?",
        options:["39","46","85","86"],
        answer:"85",
    },
    {
        question:"12.Guess the laugh?",
        options:["Portgas D Ace","Enel","Shanks","Crocodile"],
        answer:"Crocodile",
    },
];

let questionIndex=0;
let score=0;
let ans="";

function loadQuestion(index){
    if(index>=quizData.length){
        document.querySelector(".question-box").innerHTML = "Quiz Completed!";
        document.querySelector(".options").innerHTML = "";
        document.querySelector(".feedback").innerHTML="";
        document.querySelector(".check").style.display="none";
        document.querySelector(".score").innerHTML = `${score} / ${quizData.length}`;
        document.querySelector(".score").style.fontSize="50px";
        return;
    }
    ans="";
    document.querySelector(".question-box").innerHTML=quizData[index]["question"];
    if (quizData[index].question.includes("Guess the laugh")) {
        document.querySelector(".question-box").appendChild(audiobtn);
    }
    document.querySelector(".options").innerHTML="";
    document.querySelector(".feedback").textContent="Feedback:"

    if (quizData[index].question.includes("Dr.Hogback")) {
        hogbackButtons.forEach((btn, i) => {
            let div = document.createElement("div");
            div.className = "option" + i;
            let input = document.createElement("input");
            input.type = "radio";
            input.name = "option";
            btn.dataset.index = i;
            div.append(input, btn);
            document.querySelector(".options").append(div);
            input.addEventListener("change", () => {
                ans = String(i);
            });
        });
        return;
    }

    for(let i=0; i<quizData[index]["options"].length;i++){
        let div=document.createElement('div');
        div.className=`option${i}`;
        let input=document.createElement('input');
        input.type="radio";
        input.name="option";
        input.id=`op${i}`;
        let label=document.createElement('label');
        label.htmlFor=`op${i}`;
        label.innerHTML=quizData[index].options[i];

        document.querySelector(".options").append(div);
        document.querySelector(`.option${i}`).append(input);
        document.querySelector(`.option${i}`).append(label);
    }

    let opt=document.querySelectorAll(".options>div");
        opt.forEach((buttons)=>{
        buttons.addEventListener("click",()=>{
            ans=buttons.lastElementChild.innerHTML;
        });
    })
}

loadQuestion(0);

let ch=document.querySelector(".check")
ch.addEventListener("click",()=>{
    if(quizData[questionIndex].question.includes("Guess the laugh")){
        audio.pause();
    }
    else if(quizData[questionIndex].question.includes("Dr.Hogback")){
        currentAudio.pause();
    }
    if(ans==quizData[questionIndex].answer){
        score++;
        document.querySelector(".feedback").textContent+="✅ Correct";
        let opt=document.querySelectorAll(".options>div");
        opt.forEach((button)=>{
            if(button.lastElementChild.innerHTML==ans){
                button.style.backgroundColor="#5ced74a3";
                button.style.borderRadius="20px";
            }
        });
    }
    else{
        document.querySelector(".feedback").textContent+="❌ Wrong";
        let opt=document.querySelectorAll(".options>div");
        opt.forEach((button)=>{
            if(button.lastElementChild.innerHTML==quizData[questionIndex].answer){
                button.style.backgroundColor="#5ced74a3";
                button.style.borderRadius="20px";
            }
            if(button.lastElementChild.innerHTML==ans){
                button.style.backgroundColor="#ed6f5ca3";
                button.style.borderRadius="20px";
            }
        });
    }
    document.querySelector(".score").innerHTML = `${score} / ${quizData.length}`;
    setTimeout(() => {
        questionIndex++;
        loadQuestion(questionIndex);
    }, 1500);
});