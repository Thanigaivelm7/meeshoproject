export let cart =JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart =[{
        productId:'ks-gitw5465',
        quantity:1,
    },{
        productId:'x8f0g545-s505v48z',
        quantity:1,
    }];
}

function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
export function addtocart(productId){
    let matching;
       cart.forEach((cartitem)=>{
        if(productId===cartitem.productId){
            matching= cartitem;}
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

    cart.forEach((cartitem)=>{
        cartquantity += cartitem.quantity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartquantity;
}
export function removecart(productId){
    const newcart =[]
    cart.forEach((cartitem) =>{
        if(cartitem.productId !== productId){
            newcart.push(cartitem);
        }
    });
    cart=newcart;

    savetostorage();
}
