
// let para1 = document.createElement("p");
// para1.innerText ="HEY I'M RED";
// document.querySelector("body").append(para1);
// para1.classList.add("red");

// let h3 = document.createElement("he");
// h3.innerText ="HEY I'M blue";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");
// h1.innerText = "I'm in a div";
// para2.innerText = "Me too!";
// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").append(div);

let smallImg = document.getElementsByClassName("oldImg");
for( let i=0; i<smallImg.length; i++) {
    smallImg[i].src = "assets/spiderman_img.png"
    console.log(`value of image no.${i} is changed`);
}

document.querySelector('p');  //select first p element

document.querySelector('#myid'); //select first element with id=myid

document.querySelector('.myclass');  //select first element with class=myclass

document.querySelectorAll("p");  //select all p element

console.dir(document.querySelector("hi"));  

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "yellow";
// }

for(link of links) {
    link.style.color = "green";
}

// //qn.1

// let button = document.createElement("button");
// let input = document.createElement("input");
// button.innerText = "Click me!!";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);


// //qn.2

// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

// //qn.3

// let btn =  document.querySelector("#btn");
// btn.classList.add("btnStyle");


// //qn.4

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u> DOM practice </u>";
// document.querySelector("body").append(h1);

// //qn.5

// let p = document.createElement("p");
// p.innerHTML = "APNA COLLEGE <b> DELTA </b> practice";
// document.querySelector("body").append(p);



//Click EVENTT


// let btn = document.querySelector("button");
// console.dir(btn);
// // btn.onclick = function() {
// //     console.log("button was clicked");
// // };


// function sayHello() {
//     alert("Hello!!");
// }
// btn.onclick = sayHello;

let btns = document.querySelectorAll("button");
for(btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("You double clicked me!!");
    });

    // btn.onmouseenter = function(){
    //     console.log("you entered a button");
    // }
    // console.dir(btn);
}

function sayHello() {
    alert("hellloo!!");
}
function sayName() {
    alert("National infotech college!!");
}

