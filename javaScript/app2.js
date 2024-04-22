

// for(let i=1; i<=100; i++){
//     console.log(i);
// }
// for(let i=20; i>=1; i--){
//     console.log(i);
// }

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// for(let i=2; i<=40; i=i+2){
//     console.log(i);
// }

// console.log("backward");

// for(let i=20; i>=2; i=i-2)
// {
//     console.log(i);
// }

// for(let i=5;i<50;i=i+5){
//     console.log(i);
// }

// let n= prompt("Write your number");
// n=parseInt(n);
// for(let i=n; i<=n*10;i=i+n){
//     console.log(i)
// }

// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j)
//     }
// }

// let i=1;

// while(i<=5)
// {
//     console.log(i);
//     i++;
// }

// let i=1;

// while(i>=5)
// {
//     console.log(i);
//     i--;
// }

// let a=0;
// while(a<=30){
//     console.log(a);
//     a=a+2;
// }

// const favMovie = "avatar";
// let guess=prompt("Guess my favorite movie");
// while((guess!= favMovie))
// {
//     if(guess == "quit")
//     {
//         console.log("You quit");
//     }
//     guess = prompt("Wrong guess. Please try again");
// }
// if(guess == favMovie){
//     console.log("Congrats !!");
// }


// else{
//     console.log("You quit")
// }

// let b=1;
// while(b<=5){
//     if(b==3){
//         break;
//     }
//     console.log(b);
//     b++;
// }
// console.log("We used break at 3");

// let fruitts=["mango","pear","litchi","banana","guava","graps","kiwi","cherry"];
// for(let i=0;i<fruitts.length;i++){
//     console.log(i,fruitts[i]);
// }

// let heros=[["ironman","spider man","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heros.length;i++){
//     console.log(`List #${i}`);
//     for(let j=0;j<heros[i].length;j++){
//         // console.log(heros[i][j]);
//         console.log(`j = ${j}, ${heros[i][j]}`);
//     }
// }

// let student=[["priyanka",90],["jitesh",92],["rahul",80]];
// for(let i=0;i<student;i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }

// let fruits=["mango","apple","banana","litchi","pear","kiwi"];
// for(fruits of fruits){
//     console.log(fruits);
// }

// for (char of"priyankashah"){
//     console.log(char);
// }

// let heros=[["ironman","spiderman","thor"],["wonderwoman","flash","avatar"]];
// for(list of heros){
//     for(hero of list){
//         console.log(hero);
//     }
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let number=2871529;
// let count=0; 
// let copy=number;
// while(copy>0){
//     count++;
//     copy= Math.floor(copy/10);
// }
// console.log(count);

// let number=287512;
// let sum=0;
// let copy=number;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Ma.floor(copy/10);
// }
// console.log(sum);


// let n=6;
// let factorial=1;
// for(let i=1;i<=n;i++){
//     factorial*=i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

let arry=[2,5,10,4,2,72,2,1,9];
let largest=0;
for(let i=0;i<arry.length;i++){
    if(largest<arry[i]){
        largest=arry[i];
    }
}
console.log(largest);