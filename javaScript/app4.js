
// function hello() {
//     console.log("inside hello function");
//     console.log("hello");
// }
//  function demo() {
//     console.log("calling hello function");
//     hello();
//  }

//  console.log("calling demo function");
//  demo();
//  console.log("done,bye!");

//  function one() {
//     return 1;
//  }

//  function two() {
//     return one() + one();
//  }

//  function three() {
//     let ans = two() +one();
//     console.log(ans);
//  }

//  three();

//  setTimeout(function(){
//    console.log("priyanka shah");
//  },2000);
//  console.log("helloo.......");

h2 = document.querySelector("h2");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random()*5)+1;
      if(num>3){
         reject("promise rejected");
      }
      h2.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

async function demo(){
   try{
      await changeColor("red",1000);
      await changeColor("green",1000);
      await changeColor("blue",1000);
      await changeColor("gray",1000);
      await changeColor("yellow",1000);
      await changeColor("orange",1000);
      await changeColor("pink",1000);
      await changeColor("purple",1000);
   }
   catch(err){
      console.log("error caught");
      console.log(err);
   }
   

   let a= 5;
   console.log(a);
   console.log("new number=",a+9);
}

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("blue color was completed");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//     return changeColor("yellow", 1000);
//   })
//   .then(() => {
//     console.log("yellow color was completed");
//     return changeColor("purple", 1000);
//   })
//   .then(() => {
//     console.log("purple color was completed");
//   });


//  changeColor("red",1000,()=>{
//    changeColor("green",1000,()=>{
//       changeColor("blue",1000,()=>{
//       changeColor("pink",1000,()=>{
//       changeColor("purple",1000,()=>{
//       changeColor("yellow",1000,()=>{
//       });
//      });
//    });
//   });
//   });
//  });

 //callback nexting -> callback hell

//  function savetoDb(data,success,failure){
//    let internetSpeed = Math.floor(Math.random()*10)+1;
//    if(internetSpeed>4){
//       success();
//    } else { 
//       failure();
//    }
//  }

//  savetoDb(
//    "priyanka sah",() =>{
//       console.log("success:your data was saved");
//       savetoDb(
//          "hello world", () =>{
//             console.log("success2:data2 saved");
//             savetoDb(
//                "priyanka",
//                ()=>{
//                   console.log("success3:data3 saved");
//                },
//                () =>{
//                   console.log("failure3:weak connection");
//                }
//             );
//          },
//          () =>{
//             console.log("failure2:weak connection");
//          }
//       );
//    },
//    () =>{
//       console.log("failure:Weak connection.data not saved");
//    }
// );

// function savetoDb(data){
//    return new Promise((resolve,reject)=>{
//       let internetSpeed = Math.floor(Math.random()*10)+1;
//       if(internetSpeed > 4){
//          resolve("success:data was saved");
//       } else {
//          reject("failure:weak connection");
//       }
//    });
// }

// savetoDb("National infotech college");

// savetoDb("apna college")
// .then((result) =>{
//    console.log("data1 saved.");
//    console.log("result of promise:",result);
//    return savetoDb("hello world");
// })
//    .then((result)=>{
//       console.log("data2 saved");
//       console.log("result of promise:", result);
//       return savetoDb("priyanka sah");
//    })

//    .then((result)=>{
//       console.log("data3 saved");
//       console.log("result of promise:", result);
//    })

// .catch((error) =>{
//    console.log("promises was rejected");
//    console.log( "error of promise:",error);
// });

//  async function greet() {
//    throw "404 page not found";
//    return "hello world"; //return a promise
// }

// greet()
// .then((result)=>{
//    console.log("promise are resolved");
//    console.log("result was :",result);
// })
// .catch((err)=>{
//    console.log("promise was rejected with err:",err);
// })

// function getNum(){
//    return new Promise ((resolve,reject)=>{
//       setTimeout(()=>{
//          let num = Math.floor(Math.random()*10) +1;
//          console.log(num);
//          resolve(); 
//       },1000);
//    });
// }

// async function demo(){
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//    getNum();
// }

// function getNum() {
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        let num = Math.floor(Math.random() * 10) + 1;
//        console.log(num);
//        resolve();
//      }, 1000);
//    });
//  }
 
//  async function demo() {
//    await getNum();
//    await getNum();
//    await getNum();
//  }
 
//  demo();
 
// let jsonRes = 
// '{"activity":"Fix something that broken in your house","type":"diy","participants":1,"price":0.1,"link":"","key":"6925988","accessibility":0.3}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//    Name:"priyanka sah",
//    mark: 85,
// };

// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//    let fact = await getFacts();
//    console.log(fact);
//    let p = document.querySelector("#result");
//    p.innerText = fact;
// }) 

// let url = "https://catfact.ninja/fact";

// fetch(url)
//    .then((res)=>{
//   return  res.json();
//    })

//    .then((data) =>{
//       console.log("data1 =", data.fact);
//       return fetch(url);
//    })

//    .then((res)=>{
//       return  res.json();
//        })

//    .then((data2) =>{
//       console.log("data2 =", data.fact);
//    })

//    .catch((err)=>{
//    console.log("ERROR - ",err);
//    });

//    console.log("i am happy!!")

// async function getFacts(){
//    try{
//       let res = await fetch(url);
//       let data = await res.json();
//       console.log(data.fact);

//       let res1 = await fetch(url);
//       let data1 = await res1.json();
//       console.log(data1.fact);
//    } catch(e){
//       console.log("error -",e);
//    }
//    console.log("bye");
// }


async function getFacts(){
   try{
      let res = await axios.get(url);
      return res.data.fact;
   } catch (e){
      console.log("ERROR-",e);
      return "No fact found";
   }
}


// let btn1 = document.querySelector("button");
// btn1.addEventListener("click", async()=>{
//   let link = await getImage();
// //   console.log(link);
// let img = document.querySelector("#resultt");
// img.setAttribute("src",link);
// console.log(link);
// }) 

// let url1 = "https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//    try{
//       let res1 = await axios.get(url1);
//       return res1.data.message ;
//    } catch (e){
//       console.log("ERROR-",e);
//       return "No image found";
//    }
// }


// let url1 = "https://dog.ceo/api/breeds/image/random";

// let btn1 = document.querySelector("button");
// btn1.addEventListener("click", async () => {
//   let link = await getImage();
//   //   console.log(link);
//   let img = document.querySelector("#resultt");
//   img.setAttribute("src", link);
//   console.log(link);
// });

// async function getImage() {
//   try {
//     let res1 = await axios.get(url1);
//     return res1.data.message;
//   } catch (e) {
//     console.log("ERROR-", e);
//     return "No image found";
//   }
// }


let url2 = "https://icanhazdadjoke.com/";

async function getJokes (){
  try {
    const config = {headers:{Accept:"application/json"}};
    let res2 = await axios.get(url2,config);
    console.log(res2.data);
  } catch(err) {
    console.log(err);
  }
}

// let url3 = "http://universities.hipolabs.com/search?name=";
// let btn4 = document.querySelector("button");

// btn4.addEventListener("click",async()=>{
//   let country = document.querySelector("input").value;
//   console.log(country);

//   let colleges = await getColleges(country); 
//   console.log(colleges);
// });
 
// async function getColleges(){
//   try {
//     let res4= await axios.get(url3 + country);
//   return res4.data;
//   } catch (e) {
//     console.log("error -",e);
//     return [];
//   }
// }

let url3 = "http://universities.hipolabs.com/search?name=";
let btn4 = document.querySelector("button");

btn4.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country); 
  let collArr = await getColleges( country); // Removed the argument here
   show(collArr);
});

function show(collArr) { 
  let list = document.querySelector("#list");
  list.innerText = " ";
  for(college of collArr) {
    console.log(college.name);
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}

async function getColleges(country) { // Removed the parameter here
  try {
    let res4 = await axios.get(url3 + country); // Using country directly here
    return res4.data;
  } catch (e) {
    console.log("error -", e);
    return [];
  }
}


