
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// });


let form = document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
});
   let user= document.querySelector("#user");
//    let pass= document.querySelector("#pass");
//    console.dir(inp);
//    console.log(inp.innerText);
//    console.log(inp.value);

// console.log(user.value);
// console.log(pass.value);
// alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });

user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value =",this.value);
});

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value =",this.value);
});

let inpp = document.querySelector("#text");
let p = document.querySelector("p");
inpp.addEventListener("input",function(){
    console.log(inpp.value);
    p.innerText = inpp.value.toUpperCase();
});