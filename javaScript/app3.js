
function hello(){
    console.log("hello world! This is first calling function");
}

hello();
hello();
hello();

function printName(){
    console.log("National infotech College");
}
printName();

function print1to5(){
    for(let i=1;i<5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age=25;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("Not adult");
    }
}
isAdult();

function printpoem(){
    console.log("Twinkle Twinkle ,little star");
    console.log("How i wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}
printpoem();


function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();
rollDice();

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Priyanka",23);
printInfo("munna",25);

function sum(a,b){
    console.log(a+b);
}
sum(8,9);
sum(88,19);

function calcuAvg(a,b,c) {
    let avg=(a+b+c)/3;
    console.log(avg);
}
calcuAvg(4,2,6);

function printTable(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable(18);

function summ(a,b){
    return a+b;
}
console.log(summ(77,18));

function isAdultt(age){
    if(age>=18){
        return"adult";
    }
    else{
        return "Not adult";
    }
}
console.log(isAdultt);

function getsum(n) {
    let sum=0;
    for(let i=1; i<=n; i++) {
        sum+=i;
    }
    return sum;
}

let str=["hi", "hello","bye", "!"];
function concat(str) {
    let result;
    for(let i=0; i<str.length ;i++){
        result += str[i];
    }
return result;
}

let sum1 = 54;      //global scope
function calSum(a,b){
    let sum=a+b;    //funstion scope
    console.log(sum);
}
calSum(1,2);
console.log(sum1);


let age=13;
if(age>=18){
    let str="adult";
    console.log(str)
}
else{
    console.log("not adult");
}

function outerFunc() {
    let x=8;
    let y=9;
    function innerFunc() {
        console.log(x);
        console.log(y);
        console.log(x+y);
    }
    innerFunc();
}


// lexical scope
let greet="Hello";  //global scope

function changegreet(){
    let greet="Namaste";    //function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);  //lexical scope
    }
    innerGreet();
}
console.log(greet);
changegreet();


const sum2=function(a,b){
    return a+b;
}
sum2(12,5);

let hello1=function(){
    console.log("Hello");
}

hello1=function(){
    console.log("Namastee!");
}


function multipleGreet(func,n){   //higher function
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet1=function(){
    console.log("hello");
}
// multipleGreet(greet1,4);
multipleGreet(function() {console.log("NAMASTEE")},4);


//return a function
function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request == "even")
    {
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("wrong request");
    }
}





function oddOrEvenFactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request=="even"){
        let even=function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log("Wrong request");
    }
}

let request="odd";


// methods

const calculator={
    num4:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};

// shorthand
const calculator1={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};


//generate random number
let start = 100 ;
let end = 100;

function generateRandom (start,end){
    let diff= end- start;
    return Math.floor(Math.random() * diff)+start;
}




//return array element larger
let arr = [8,9,7,1,10,5,6,8,4];
let num5=5;
// element larger than a number num5
function getElements(arr,nuum){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>nuum){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num5);


//extract unique character from string
let strr="aabbbshgddjgjkgdshjdb";
function getUnique(strr){
    let ans=" ";
    for(let i=0; i<strr.length; i++){
        let currChar=strr[i];
        if(ans.indexOf(currChar) == -1)  //if current character is not added ,then add it in ans. else it is a duplicate. 
        {
            ans += currChar;
        }
    }
    return ans;
}
getUnique(strr);

//return longest  countryy character
let country = ["Australia","Germany","United kingdom", "United state of America"];
function longestName(country) {
    let ansIdx=0;
    for(let i=0; i<country.length; i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}

longestName(country);

//count the number of vowels
let string="Nationalinfotechcollege";
function countVowels(string){
    let count=0;
    for(let i=0; i<string.length; i++) {
        if(
            string.charAt(i) == "a" ||
            string.charAt(i) == "e" ||
            string.charAt(i) == "i" ||
            string.charAt(i) == "o" ||
            string.charAt(i) == "u" 
        )
        {
            count++;
        }
    }
    return count;
}

const student = {
    name:"priyanka",
    age:23,
    math:90,
    eng:75,
    sci:63,
    phy:50,
    getAvg() {
        console.log(this);
        let avg = (this.math + this.eng + this.sci + this.phy)/4;
        console.log( `${this.name} got avg marks = ${avg} `);
    }

}

function getAvg () {
    console.log(this);
}

console.log("helloo")
console.log("helloo1")
let a = 5;
try {
    console.log(a);
} catch  (err) {
    console.log("catch  an error ... a is not defined");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");


const sum3 = (a,b) =>{
    console.log(a+b);
};

const cube = (n) =>{
    return n*n*n;
};

// const cube = (n) =>{
//     console.log(n*n*n);
// }

const power = (a,b) => {
    return a**b;
};

const mul = (a,b) => (
    a*b
);

//   console.log("Hi there!");
//   setTimeout( () => {
//     console.log("Apna college");
//  }, 4000);
//  console.log("Welcome to");


 
//   let id = setInterval ( () => {
//     console.log("Apna collegeee");
//  }, 2000);

//  console.log(id);

//   let id1 = setInterval ( () => {
//     console.log("Welcome here!!");
//  }, 3000);

//  console.log(id1);


 const student1 = {
    name:"priyaa",
    marks:90,
    prop: this,  //global scope
    getName:function(){
        console.log(this);  
        return this.name;
    },
    getMarks:() =>{
        console.log(this);   //parent's scope ->window
        return this.marks;
    },

    getInfo1: function(){
        setTimeout( () =>{
            console.log("this");  //student
        },2000);
    },
    getInfo2: function(){
        setTimeout(function () {
            console.log("this");  //window
        },2000);
    },
 };

 const sqr = (n) =>n*n;
 console.log(sqr(8) ) ;

 let idd = setInterval(() =>{
    console.log("Hello world");
 },2000);
 
 setTimeout( () =>{
    clearInterval(idd);
 },10000);



 const arrayAverage = (arr0) => {
    let total= 0;
    for ( let number of arr0) {
        total += number;
    }
    return total/arr0.length;
 };

 let arr0 = [1,2,3,4,5,6];
 console.log(arrayAverage(arr0));


 let num6 =4;
 const isEven1 = (num6) => num6 % 2 ==0;

 