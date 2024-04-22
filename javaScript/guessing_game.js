
let max=prompt("Enter the max number");
console.log(max);

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("Congrats!! You are right! Random number was ", random );
        break;
    } 
    else  if ( guess<random)
    {
        guess=prompt("Hint:Your guess was too small.please try again");
    }
    else ( guess<random)
    {
        guess=prompt("Hint:Your guess was too large.please try again");
    }

    // else{
    //     guess=prompt("Your guess was wrong,Please try again");
    // }
}