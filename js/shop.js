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
          document.querySelectorAll('.shop .container .content .productcontent .productcontainer').forEach(ele=>{
             ele.innerHTML+=store;
          })
        });
    }
     productcontent();
  }

  // ///////////////////////////////////////////
  //
  let products=document.querySelectorAll('.shop .container .content .productcontent .productcontainer .product');
  function toDetail(){
    products.forEach(product=>{
      product.addEventListener('click',()=>{
        window.location.href='details.html';
      })
    })
  }
  toDetail();