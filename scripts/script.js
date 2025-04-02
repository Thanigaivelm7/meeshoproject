import {cart,addtocart,updatecart} from '../scripts/cart.js';
import {products} from '../scripts/product.js';
let productsHtml = ''
products.forEach((product) => {
    productsHtml += `
            <div class="prd">
                <div class="prouductimg">
                    <img src="${product.Image}">
                </div>
                <div class="product-name">
                    <p>${product.name}</p>
                </div>
                <div class="product-price"> 
                    <span>${product.price}</span>
                </div>
                <div class="product-quantity">
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                </select>
                </div>
                <div class="product-rating">
                    <img src="${product.rating.stars}" alt=""><span>${product.rating.count}</span>
                </div>
                <div class="product-btn" data-product-id="${product.Id}">
                    <button>Add to cart</button>
                </div>
            </div>`
})
document.querySelector('.lists').innerHTML = productsHtml;
document.querySelectorAll(".product-btn").forEach((button) =>{
    button.addEventListener('click',() =>{
       const productId = button.dataset.productId;
       addtocart(productId);
       updatecart(productId);
      
    });
})