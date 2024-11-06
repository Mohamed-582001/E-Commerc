
{ //   function for slider
let leftpart=document.querySelector('.slider .container .leftpart');

const slideArr=[
    {
        head:'man fashion',
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero",
        img:"img/carousel-1.jpg"
    },
    {
        head:'woman fashion',
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero",
        img:"img/carousel-2.jpg"
    },
    {
        head:'kids fashion',
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero",
        img:"img/carousel-3.jpg"
    }
]

function changecontentslider(){
    let c=0;
    while(c<slideArr.length){
             let store=`
            <div class="content">
            <img src="${slideArr[c].img}" alt="carousel-1">
            <div class="text">
              <h3>${slideArr[c].head}</h3>
              <p>${slideArr[c].para}</p>
               <a href="#">shop</a>
                 <ul>
                   <li><i class="fa-solid fa-angles-left"></i></li>
                   <li><i class="fa-solid fa-angles-right"></i></li>
                 </ul>
                </div>
              </div>
            
              `
        leftpart.innerHTML=store;
        
          c++
    } 

       
}
changecontentslider();
}

{  //function for product section
  const products=[
    {
      img:'img/product-1.jpg',
      price:'120',
      discount:'132',
      amount:80
    },
    {
      img:'img/product-2.jpg',
      price:'120',
      discount:'132',
      amount:99
    },
    {
      img:'img/product-3.jpg',
      price:'120',
      discount:'132',
      amount:99
    },
    {
      img:'img/product-4.jpg',
      price:'120',
      discount:'132',
      amount:49
    },
    {
      img:'img/product-5.jpg',
      price:'120',
      discount:'132',
      amount:30
    },
    {
      img:'img/product-6.jpg',
      price:'120',
      discount:'132',
      amount:200
    },
    {
      img:'img/product-7.jpg',
      price:'120',
      discount:'132',
      amount:150
    },
    {
      img:'img/product-8.jpg',
      price:'120',
      discount:'132',
      amount:55
    },
  ]
  function productcontent(){
    let store;
       products.forEach(ele => {
        store=` 
        <div class="product">
        <div class="image">
          <img src="${ele.img}" alt="product-1">
          <ul>
            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            <li> <a href="#"><i class="far fa-heart"></i></a></li>
            <li><a href="#"><i class="fa fa-sync-alt"></i></a></li>
            <li><a href="#"><i class="fa fa-search"></i></a></li>
          </ul>
        </div>
        <div class="details">
           <span>Product Name Goes Here</span>
           <p><small>$${ele.price}</small><del>$${ele.discount}</del></p>
           <div class="star">
            <ul>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
            </ul>
            <small>(${ele.amount})</small>
           </div>
        </div>
      </div>     
        `
        document.querySelectorAll('.featuredproducts .container .content').forEach(ele=>{
           ele.innerHTML+=store;
        })
      });
  }
   productcontent();
}

