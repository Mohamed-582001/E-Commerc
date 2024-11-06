{  // two function for the head of the header:
   const acount=document.querySelectorAll('.header .head .container .userlinks .acount');
   const acountli=document.querySelectorAll('.header .head .container .userlinks .acount ul li');

  (function togglelist(){
    acount.forEach(ele => {
        ele.addEventListener('click',()=>{
            ele.lastElementChild.classList.toggle('toggle');
        })
    });

   })();


   (function clickli(){ 
   acountli.forEach(ele=>{
      ele.addEventListener('click',()=>{
        ele.style.backgroundColor='yellow'; 
      })
     })
    })()
}
{   // two function for middle header
  let category=document.querySelector('.headfooter .container .navbar .category');
  let navlist=document.querySelector('.headfooter .container .navbar nav ul li:nth-child(4)');

   (function categoryF(){
      category.addEventListener('click',()=>{
          category.lastElementChild.classList.toggle('toggle');
      }) 
   })();

   (function navList(){
    navlist.addEventListener("mouseenter",()=>{
           navlist.lastElementChild.classList.toggle('toggle');
    })
   })()
}
{    //two function for footerof header
let humbtn=document.querySelector('.headfooter .container i#home');
let mainlist=document.querySelector('.headfooter .container .logo nav');
let subbtn=document.querySelector('.headfooter .container .logo nav ul li:nth-child(4)');
let sublist=document.querySelector('.headfooter .container .logo nav ul li:nth-child(4) ul');

  (function togglemainlist(){
      humbtn.addEventListener("click",()=>{
        mainlist.classList.toggle('toggle');
      })
  })()

  function togglesublist(){
      subbtn.addEventListener("click",()=>{
        sublist.classList.toggle('toggle');
      })  
  };
  togglesublist();
}

let scrollup=document.querySelector('.scrollup');
let body=document.querySelector('body');

window.addEventListener('scroll',()=>{
     if(scrollY===0){
      scrollup.style.display='none';
     }
     else{
       scrollup.style.display='block';
     }
})

scrollup.addEventListener('click',()=>{
      body.scrollIntoView('.slider')
})