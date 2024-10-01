// const btn = document.getElementById("btn");
// console.log(btn);
//import React from "react"
import './index.html'
// const promise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("success");
//     }else{
//         reject("error")
//     }
// })
// .then((Response)=>{
//     console.log("success")
// }).catch((error)=>{
//     console.log("error")
// })


// const btn = document.getElementById("btn");
// console.log(btn);

// const promise = new Promise((resolve, reject) => {
//     let success = true; // 'true' should be a boolean, not a string
//     if (success) {
//         resolve("Success"); // Resolve the promise if success is true
//     } else {
//         reject("Error"); // Reject the promise if success is false
//     }
// })
// .then((response) => {
//     console.log(response); // Logs "Success" if the promise resolves
// })
// .catch((error) => {
//     console.log(error); // Logs "Error" if the promise is rejected
// });

const promise = new Promise((res,rej)=>{
    document.getElementById("btn").addEventListener('click',()=>{
        res("myvalue");
    })
})
promise.then((res)=>console.log(res))
.catch((error)=>console.log(error));