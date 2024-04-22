
// let msg="   Helllooo      ";
// let password= prompt("Set your password");
// console.log(password.trim());
// let newPass = password.trim();
// console.log(newPass);

let namme="priyankaaa shah";
console.log(namme.toUpperCase());
 
let nammme="priyankasah";

let msg1="               hellooo     ";
// let newMessage=msg1.trim();
// console.log( "after trim: ", newMessage);
// newMessage=newMessage.toUpperCase();
// console.log("after uppercase:" ,newMessage);

let newmsg = msg1.trim().toUpperCase();
console.log(newmsg);

let msg2="hellooo";
console.log(msg2.slice(-2));

// let msg3="nationalinfotechcollege";
// console.log(msg2.slice(16,msg3.length));

let message="ilovecoding";
console.log(message);
let fruit="mango";

let mssg="   help!   ";
console.log(mssg.trim().toUpperCase());

let naamee="apnacollege";
naamee.slice(4,9)

let students=["priya","parii","priyanka"];

let cars=["audi","bmw","xuv","maruti"];


let arrayy=[7,9,0,-2];
let n = 3;
let ans=arrayy.slice(0,n);
console.log(ans);

let ar=[7,9,0,-2];
let nn = 3;
let anss=ar.slice(ar.length-nn);
console.log(ans);

let str=prompt("Enter a string");
if(str.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}

let strr="APNaCOLLEGE";
let idx=3;
if(str[idx]==str[idx].toLowerCase()){
    console.log("character is lowercase");
}
else{
    console.log("character is not lowercase");
}

let sttr=prompt("please enter a string");
console.log(`origital string=${sttr}`);
console.log(`string without space =${sttr.trim()}`);

let arraay = ["hello","a",23,64,99,-2];
let item=64;
if(arraay.indexOf(item) !=-1){
    console.log("Element exits in array");
} 
else{
    console.log("Element does not exit in array");
}