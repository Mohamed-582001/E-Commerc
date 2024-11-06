
let shippingaddress=document.querySelector(".checkout .container .checkoutcontent .address form .input .check input#diffaddress");
let anotherform=document.querySelector(".checkout .container .checkoutcontent .address form.anotheraddress");

console.log(shippingaddress)
function check(){
 if(shippingaddress.checked==true){
    anotherform.style.display='block'; 
     console.log("uio")
 }  
 else{
    anotherform.style.display='none';
 }     
}
check();

