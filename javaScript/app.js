
// console.log("Hello World!!");
// console.log("Hello JavaScript!!");
// let a=10;
// let b=5;
// console.log("sum is :",a+b);

// let pencilprice=10;
// let erasorprice=5;
// let output='The total price is:${pencilprice+erasorprice}Rupee.'
// console.log(output);
// // console.log("The total price is:",pencilprice+erasorprice,"Rupees.");

// // Arithmetic operator
// let x=10;
// let y=5;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x**y);
// console.log(x%y);
// console.log(x++);
// console.log(++x);

// let age=23;
// console.log(age<=18);

// // conditional statement
// console.log("Before my if statement");
// let agee=23;
// if(agee>=25){
//     console.log("You can vote");
//     console.log("You can drive");
// }
// if(age>20){
//     console.log("you can in 20s");
// }
// console.log("After my if statement");
// let firstName="priyanka";
// if(firstName=="priyanka"){
//     console.log(`Welcome ${firstName}`);
// }

let color="red";

if(color==="red")   /*traffice light system*/
{
    console.log("Stop!.light color is red");
}
 else if(color==="yellow")  
{
    console.log("Wait! .light color is yellow");
}
 else if(color==="green")  
{
    console.log("Go!.light color is green");
}

// let age=14;
// if(age>=18){
//     console.log("you can vote");
// }
// else if(age<18){
//     console.log("you cannot vote")
// }

let marks=58;
if(marks>=80){
    console.log("A+");
}
else if(marks>=60){
    console.log("A");
}
else if(marks>=40){
    console.log("B");
}
else if(marks>=33){
    console.log("C");
}
else if(marks< 32){
    console.log("D");
}

let month="march";
if(month==="january"){
    console.log("Winter is here");
}
if(month==="february"){
    console.log("Love season is started");
}
if(month==="march"){
    console.log("Flowers are started bloom");
}
if(month==="april"){
    console.log("summer is here");
}

let age=15;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

let colour="green";
if(colour==="red"){
    console.log("Stop");
}
else if(colour==="yellow"){
    console.log("Slow down");
}
else if(colour==="green"){
    console.log("Go");
}
else{
    console.log("Traffice light is broken");
}

let size="";
if(size==="XL"){
    console.log("Price is Rs.250");
}
else if(size==="L"){
    console.log("Price is Rs.200")
}
else if(size==="M"){
    console.log("Price is Rs.150")
}
else{
    console.log("Price is Rs.50")
}

let markss=45;
if(markss>=33){
    console.log("Pass");
    if(markss>=80){
        console.log("Grade:0");
    }
    else{
        console.log("Grade:A");
    }
}
else {
    console.log("Better luck next time");
}

//logocal operator

let marks1=70;
if(marks1>=33 && marks1>=80){
    console.log("Pass");
    console.log("A+");
}
 else if(marks1>=33 && marks1>=80){
    console.log("Pass");
    console.log("A");
}

let marks2=23;
if((marks2>33 && marks2<=80)||!false){
    console.log("pass");
}

let str="apple";
if(str[0]=== "a" && str.length > 3){
    console.log("Good string");
}
else{
    console.log("Not a good string");
}

let num=12;
if((num%3 === 0)&& ((num+1 == 15)||(num-1 == 11)))
{
    console.log("Safe");
}
else{
    console.log(Unsafe)
}

if(1){
    console.log("it has true value");
}
else{
    console.log("it has false value");
}
let string="a";
if(string){
    console.log("string is not empty");
}
else{
    console.log("string is empty");
}

let num1=2;
if(num1){
    console.log("num is not equal to zero ");
}
else{
    console.log("num is equal to zero");
}

//switch statement
let colouur="yellow";
switch(colouur){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
        default:console.log("Broken light");
}
console.log("after switch statement");

let day=1;
switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("friday");
    break;
    case 6:console.log("saturday");
    break;
    case 7:console.log("Sunday,Fun day");
    break;
    default:console.log("Wrong day");
}

// alert("Something is wrong");

// let firstName=prompt("Enter your name:");
// console.log(firstName);

// let firstName=prompt("Enter your first name:");
// let lastName=prompt("Enter your last name");
// let msg="Welcome " + firstName+ " "+ lastName +"!";
// alert(msg);
// console.log("Welcome",firstName," ",lastName, " !");

let numm=10;
if(numm % 10== 0){
    console.log(" Good! ");
}
else{
    console.log("Not good");
}

let name=prompt("Enter your name:");
let age1=prompt("Enter your age:");
alert(`${name} is ${age} years old`);

let quarter=1;
switch(quarter){
    case 1:console.log("January, february,march");
    break;
    case 2:console.log("April, May,June");
    break;
    case 3:console.log("July, August,September");
    break;
    case 3:console.log("October, November,December");
    break;
    default:console.log("Not a quarter");
}

let strr="apple";
if((strr[0]=='a'|| start[0]=='A') && (str.length > 5)){
    console.log("golden string");
}
else{
    console.log("Not a golden string");
}

let a=18;
let b=15;
let c=10;

if(a > b){
    if(a > c){
        console.log(a,"is largest");
    }
    else{
        console.log(c, "is largest");
    }
}
else {
    if(b > c){
        console.log(b,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}

let numm1=32;
let numm2=47852;
if((numm1 % 10)==(numm2%10)){
    console.log("Numbers have same last digit which is ",numm1%10);
}
else {
    console.log("Numbers dont have the same last digit");
}



