let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let input=document.querySelector(".main #input");
let btn=document.querySelector(".main center button");
let img=document.querySelector("#qrg #qr");

btn.addEventListener("click", ()=>{
   let val=input.value;

  
   
   img.src=`${url}/${val}`;
  
   
});