document.querySelector(".add").addEventListener("click",()=>{
    let input=document.querySelector("#input-text");
    let text=input.value.trim();
    if(text!==""){
        let list=document.createElement('li');
        let box=document.createElement('input')
        box.type='checkbox';
        box.className="box";
        let t = document.createElement('span');
        t.className="text";
        t.textContent=`${text}`;
     //appendChild() method adds the element in the parenthesis as the last child in the parent Node.
        list.appendChild(box);
        list.appendChild(t);
        document.querySelector(".todo-list").append(list);
        input.value="";
        box.style.border="1px solid gray";

        //checkbox toggle
        box.addEventListener("change",()=>{
            if(box.checked){
                t.style.textDecoration="line-through";
                t.style.color="gray";
            }
            else{
                t.style.textDecoration="none";
                t.style.color="black";
            }
        })
    }
})

document.querySelector(".clear").addEventListener("click",()=>{
    let listitems=Array.from(document.getElementsByTagName('li'));
    for(let i=0;i<listitems.length;i++)
        listitems[i].remove();
})