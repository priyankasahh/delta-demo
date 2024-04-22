
// let arr = [1,2,3,4,5];
// let print = function (el) {
//     console.log(el);
// } ;
// arr.forEach(print);

// let arr = [1,2,3,4,5];
// arr.forEach ((el) => {
//     console.log(el);
// });

// arr. forEach(function(el)
// {
//     console.log(el);
// })
// let print = function (el) {
//     console.log(el);
// } ;
// arr.forEach(print);


let array =[{
    name:"priya",
    marks:80,
},
{
    name:"priyanka",
    marks:82,

},
{
    name:"priyaanna",
    marks:82.2,
},
];

// let gpa = student.map((el) => {
//     return el.marks/10;
// });

array.forEach((student) =>{
    console.log(student.marks);
});

let num7 =[1,2,3,4,5,6];

let double = num7.map((el) => {
    return el*el;
});

let nums1 = [2,4,1,5,7,8,9,0];
let even = nums1.filter((el) => {
    return el % 2 == 0; 
});

let numss = [20,50,90,40,30,60];
let evenn = numss.filter((el) => {
    return el % 10 == 0; 
});


let nums2 = [1,2,3,4];
let finalvalue = nums2.reduce((res,el) => {
    console.log(res);
    return res+el
} );
console.log(finalvalue);

let nums3 =[1,2,3,4,5,6,7,8,3,5,6,7];
let result = nums3.reduce((max,el) =>{
    if(el>max){
        return el;
    }
    else {
        return max;
    }
});


let nums5 =[1,2,3,4,5,6,7,8,3,5,6,7];
function getMin(nums5)
{
    let resultt = nums5.reduce((min,el) =>{
        if(el<min){
            return el;
        }
        else {
            return min;
        }
    });
    return resultt;
}


 

let nums4 = [10,20,30,50,40,60];
let ans = nums4.every((el) => el % 10 == 0);
console.log(ans);


function suuum(a,b=4){
    return a + b;
}
// suuum(9);

let data = {
    email : "hellooo@gmail.com" ,
    password : "abcd" ,
};
let datacopy = {...data,id:12345, country:"Nepal"};
let arrr = [1,2,3,4,5];
let obj1 = {...arrr} ;
let obj2 = {..."priyanka"};


function summ0(...args){
     for(let i=0;i<args.length;i++) {
        console.log("ypu gave us:", args[i]);
     }
}

function summ1(...args){
    return args.reduce((summ1,el)=> summ1+el);
}

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min,el) =>{
        if(min>el){
            return el;
        } else {
            return min;
        }
    })
}

let names = ["tony","bruce", "peter", "steve", "abc" , "hjgh"];
// let winnerr = names[0];
// let runnerupp  =names[1];
// let secondRunnerupp  = names[2];

let [winnerr, runnerupp, secondRunnerupp, ...others] = names;

const student1 = {
    namee : "karan" ,
    class :9,
    age :14,
    subj :["english", "nepali", "science", "math", "social study"],
    username : "karan123",
    passw : 1478,
}
const { username:user, passw:pass , city: place= "birgunj"} =student1;
console.log(user);

let nums6 =[1,2,3,4,5,6];
const squaree = nums6.map((num) => nums6*nums6);
console.log(squaree);
let sum1 =squaree.reduce((acc,cur) =>acc+cur,0);
let avg =sum1/nums6.length;
console.log(avg);


let numbers = [2,4,6,8,-1,-2];
console.log(numbers.map((numbers) =>numbers+5));

let strings =["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((strings)=>strings .toUppercase()));


const doubleAndReturnArgs =(arr, ...args) => [
    ...args, ...args.map((v) => v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);


const mergeobjects = (obj1,obj2) =>({...obj1, ...obj2});
mergeobjects({a:1,b:2},{c:3,d:4});

