let itemQuant = 0;
let itemQuantInCart = 0;
const display = document.getElementById("display-quant");

document.getElementById("minus").addEventListener("click", function (){
    if (itemQuant == 0) return;
    itemQuant--;
    display.textContent = itemQuant;
});

document.getElementById("plus").addEventListener("click", function (){
    itemQuant++;
    display.textContent = itemQuant;
});

document.getElementById("add-to-cart").addEventListener("click", function(){
    itemQuantInCart = itemQuant;
})

const userCart = document.getElementById("user-cart");
const showCart = document.getElementById("cart");
const numberItems = userCart.querySelector("#num-items");
const total = userCart.querySelector("#total-cost");
const cartItems = userCart.querySelector("#cart-items");

function closeCart(){
    delete userCart.dataset.visible;
}

function openCart(){
    userCart.dataset.visible = "true";
}

function fillCart(){
    if (itemQuantInCart == 0){
	let emptyCartHTML = ""
	cartItems.innerHTML = emptyCartHTML;
    }else{
	let filledCartHTML = `
`
	cartItems.innerHTML = filledCartHTML;

    }
}

function deleteCart(){
    itemQuantInCart = 0;
    fillCart();
}

document.addEventListener("click", function(event){
    if (!event.target.closest(".user-cart")){
	closeCart();
    }
})

showCart.addEventListener("click", function(){
    if (!userCart.dataset.visible){
	fillCart();
	openCart();
    }else{
	closeCart();
    }
    event.stopPropagation();
})


