// const axios = require("axios");
console.log("Test");

const form = document.querySelector("form");
const text = document.querySelector("input");
const mes1 = document.querySelector("#mes1");
const mes2 = document.querySelector("#mes2");

form.addEventListener("submit", (e) => {
   e.preventDefault()
   const location = text.value;
   mes1.textContent = "Loading...";
   mes2.textContent = "";

   async function data() {
      try {
         const response = await fetch("/weather?address=" + location);
         const JSONdata = await response.json();
         // console.log(JSONdata);
         if (JSONdata.error) {
            mes1.textContent = JSONdata.error;
         }
         else {
            mes1.textContent = JSONdata.location;
            mes2.textContent = JSONdata.forecast;
         }
      }
      catch (e) {
         mes1.textContent = "CHECK YOUR INTERNET CONNECTION!";
      }
   }
})
      data();
   






// console.log("Test");

// async function data (){
//    const response = await axios.get("http://localhost:3000/weather?address=rajkot");
//    const JSONdata = await response.json();
// //    console.log(JSONdata);
//    if(JSONdata.error){
//     console.log(JSONdata.error);
//    }
//    else{
//     console.log(JSONdata.location);
//     console.log(JSONdata.forecast);
//    }
// }

// data();


//Not True.....................
// async function(){
//     await fetch("http://localhost:3000/weather?address=rajkot");
// }

// async data = ()=>{
//     await fetch("http://localhost:3000/weather?address=rajkot");
// }