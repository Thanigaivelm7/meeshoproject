export let cart =JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart =[];
}

function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addtocart(productId){
    let matching;
       cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matching= cartItem;}
       });
        if(matching){
            matching.quantity +=1;
        }
        else{
            cart.push({
                productId:productId,
                quantity:1
            });
       }

       savetostorage();
}
export function updatecart(productId){
    let cartquantity = 0;

    cart.forEach((cartItem)=>{
        cartquantity += cartItem.quantity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartquantity;
}
export function removecart(productId){
    const newcart =[]
    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newcart.push(cartItem);
        }
    });
    cart=newcart;

    savetostorage();
}
