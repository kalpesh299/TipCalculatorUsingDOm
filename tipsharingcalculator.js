const input=document.querySelector(".input");
const satisfied=document.querySelector(".options");
const noOfpeoples=document.querySelector(".people");
const btn=document.querySelector(".submit_btn");
const result=document.querySelector(".result");

// console.log(input,satisfied,noOfpeoples,btn,result);

btn.addEventListener('click',()=>{



let ans=(input.value*(parseInt(satisfied.value)/100));
ans/=noOfpeoples.value;
result.innerText=`${ans} !`;
input.value="";
satisfied.value="";
noOfpeoples.value="";



})




