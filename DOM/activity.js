
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor ();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor (){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para was clicked!!");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});

let btnn = document.querySelector(".btnn");

// btnn.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h5 = document.querySelector("h5");

function changeColor () {
    console.dir(this.innerText);
    this.style.backgroundColor ="blue";
}

btnn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);
h5.addEventListener("click",changeColor);

