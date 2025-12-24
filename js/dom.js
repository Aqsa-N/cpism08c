// // console.log(window)
// var hh=document.getElementById('h');
// //console.log(hh);
// var para=document.getElementsByClassName('p');
// console.log(para);
var hh=document.querySelectorAll('.p');
 hh.innerHTML = 'hello DOM'


  hh.forEach(para=>{
   para.style.color = "green"
   para.innerHTML = "hello"
  })

  
  
// let myApp = name => document.write("hello ",  name)
// myApp('ali')

 
//  var head=document.querySelector('#h');
//  head.addEventListener("click",function(){
//     head.innerHTML="<h1>DOM seekh chuky hain</h1>";
//   head.style.color="white";
//   head.style.backgroundColor="pink";
//  });
//  hh.forEach(e =>{
//     e.style.color="purple";
//     e.style.backgroundColor="pink";
//  });
  

// function get(){
//     var input=document.querySelector('#t').value;
// // var b=document.querySelector("#btn");
// var p=document.querySelector("#p");
// p.innerHTML=input;

// }


