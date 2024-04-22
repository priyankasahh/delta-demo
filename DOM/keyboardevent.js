
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key = ", event.key);
//     console.log( "key = ", event.code);
//     console.log("key was pressed");
// });


// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// });



// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("code = ", event.code);
//    if(event.code == "ArrowUp") {
//     console.log("Character moves forward");
//    } else if(event.code == "ArrowDown") {
//     console.log("Character moves backward");
//    } else if(event.code == "ArrowLeft") {
//     console.log("Character moves left");
//    } else if(event.code == "ArrowRight") {
//     console.log("Character moves right");
//    }

// });


let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("code = ", event.code);          //ArrowUp(U) , ArrowDown(D) , ArrowLeft (L), ArrowRight(R)
   if(event.code == "KeyU") {
    console.log("Character moves Up");
   } else if(event.code == "KeyD") {
    console.log("Character moves down");
   } else if(event.code == "KeyL") {
    console.log("Character moves left");
   } else if(event.code == "KeyR") {
    console.log("Character moves right");
   }

});