 
 let tdlist=document.querySelectorAll(".shoppingcart .container .content .myproduct table tbody tr td.btn");
 let container=document.querySelectorAll(".shoppingcart .container .content .myproduct table tbody tr td.btn");
 let btnplus=document.querySelectorAll(".shoppingcart .container .content .myproduct table tbody tr td.btn");
 

function counter(){
    tdlist.forEach(btn=>{
        let count=0;
        let listele=btn.children;
        listele[0].addEventListener('click',()=>{
            count--;
            if(count<0)count=0;
            listele[1].innerHTML=count;
        })
        listele[2].addEventListener('click',()=>{
            count++;
            listele[1].innerHTML=count;
        })
    })
   
}
counter();