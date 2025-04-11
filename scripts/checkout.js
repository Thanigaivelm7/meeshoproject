import { cart, removecart } from '../scripts/cart.js';
import { products } from '../scripts/product.js';

let cartsummary = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingprod = products.find(product => product.Id === productId);

    if (matchingprod) {
        cartsummary += `
            <div class="border-${matchingprod.Id}">
                <div class="flexbox1">
                    <div class="img">
                        <img src="${matchingprod.Image}" alt="">
                    </div>
                    <div class="contents">
                        <p>${matchingprod.name}</p>
                        <span>${matchingprod.price}</span>
                        <p>Size: IND-7 &nbsp; Qty: ${cartItem.quantity}</p><br>
                        <button class="remove-btn" data-product-id="${matchingprod.Id}">&#10006; REMOVE</button>
                    </div>
                    <div class="editbtn">
                        <span>EDIT</span>
                    </div>
                </div><hr>
                <div class="flexbox2">
                    <p>Sold by: Thanigai Enterprises America</p>
                    <span>Free Delivery</span>
                </div>
            </div><hr>
        `;
    } else {
        console.warn(`No matching product found for productId: ${productId}`);
    }
});

document.querySelector('.border').innerHTML = cartsummary;

document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const productId = btn.dataset.productId;
        removecart(productId);

        const container = document.querySelector(`.border-${productId}`);
        if (container) {
            container.remove();
        }
    });
});
