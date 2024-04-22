
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("button");
    
    item.append(delBtn);
    ul.appendChild(item);
    inp.value= "";
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName =="BUTTON"){
    let ListItem = event.target.parentElement;
    ListItem.remove();
    console.log("deleted");
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn  of delBtns){
//     delBtn.addEventListener("click",function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }