let btn=document.querySelector(".find");
let input=document.querySelector("#input-word");
let word="";
    btn.addEventListener("click",()=>{
        word=input.value.trim();
        word=word.toLowerCase();
        input.value="";
        wordfinder();
    });

async function wordfinder(){
    let div=document.querySelector(".meaning");
    div.innerHTML = "";
    try{
        let promise=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let text=await promise.json();
        console.log(text);

        // Header container
        let header=document.createElement("div");
        header.className="word-header";

        let heading=document.createElement("h2");
        heading.textContent=text[0].word.charAt(0).toUpperCase()+text[0].word.slice(1);

        let play=document.createElement("button");
        const icon=document.createElement("i");
        icon.className="fa fa-play";
        icon.style.fontSize="20px";
        play.append(icon);
        play.addEventListener("click",()=>{ 
            const phonetics=text[0].phonetics;
            const audioObj=phonetics.find(p => p.audio && p.audio !== "");
            if (!audioObj){ 
                alert("Audio not available"); 
                return; 
            } 
            const audio = new Audio(audioObj.audio); 
            audio.play(); 
        });

        let phoneticSpan = document.createElement("span");
        phoneticSpan.className = "phonetic";
        const phoneticObj = text[0].phonetics.find(p => p.text);
        if (phoneticObj) {
        phoneticSpan.textContent=phoneticObj.text;
        }

        header.append(heading, play, phoneticSpan);
        div.append(header);

        let definition=document.createElement("div");
        let defarr=text[0]["meanings"];
        let ul=document.createElement("ul");

        for(let i=0;i<defarr.length;i++){
            let li=document.createElement("li");
            li.textContent=defarr[i]["partOfSpeech"]+" : ";
            li.textContent+=defarr[i]["definitions"][0]["definition"];
            
            let h4=document.createElement("h4");
            let synop=document.createElement("p");
            let antop=document.createElement("p");
            let h4a=document.createElement("h4");
            
            let synonyms=defarr[i]["synonyms"];
            h4.textContent="Synonyms:";
            if(synonyms.length==0) synop.textContent="None";
            for(let j=0;j<synonyms.length;j++){
                if(j==synonyms.length-1) synop.textContent=synonyms[j];
                else synop.textContent=synonyms[j]+" , ";
            }
            
            let antonyms=defarr[i]["antonyms"];
            h4a.textContent="Antonyms: ";
            if(antonyms.length==0) antop.textContent="None";
            for(let j=0;j<antonyms.length;j++){
                if(j==antonyms.length-1) antop.textContent=antonyms[j];
                else antop.textContent=antonyms[j]+" , ";
            }
            li.append(h4);
            li.append(synop);
            li.append(h4a);
            li.append(antop);

            ul.append(li);
        }
        definition.append(ul);
        div.append(definition);
    }   
    catch(error){
        alert("The word doesn't exist. Search another word");
        input.value="";
    }
}
