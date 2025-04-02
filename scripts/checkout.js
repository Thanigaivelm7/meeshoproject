import {cart,removecart} from '../scripts/cart.js';
import {products} from '../scripts/product.js';

let cartsummary=''

cart.forEach((cartitem) => {
    const productId =cartitem.productId;
    let matchingprod;

    products.forEach((product)=>{
        if(product.Id === productId){
            matchingprod = product;
        }
    });

cartsummary+=`
    <div class="border ${matchingprod.Id}">
        <div class="flexbox1">
            <div class="img">
                <img src="${matchingprod.Image}" alt="">
            </div>
            <div class="contents">
                <p>${matchingprod.name}</p>
                <span>${matchingprod.price}</span>
                <p>Size: IND-7 &nbsp; Qty: ${cartitem.quantity}</p><br>
                <button class="remove-btn" data-product-id="${matchingprod.Id}">&#10006; REMOVE</button>
            </div>
            <div class="editbtn">
                <span>EDIT</span>
            </div>
        </div><hr>
        <div class="flexbox2">
            <p>Sold by:Thanigai Enterprises America</p>
            <Span>Free Delhivery</Span>
        </div>
    </div>
`
});
document.querySelector('.border').innerHTML=cartsummary;

document.querySelectorAll('.remove-btn').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removecart(productId);

        const container = document.querySelectorAll(`border-${matchingprodId}`);
        container.remove();
    });
});
