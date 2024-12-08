function loadCartItems() {
    let cartItemsContainer = document.querySelector('#cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItemsContainer.innerHTML = ""; // for clearing existing items

   let cartHTML = cart.map((i, id) => `
    <div class="cart-item">
        <img src="${i.image}" alt="${i.name}">
        <h3>${i.name}</h3>
        <p>$${i.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${id})">Remove</button>
    </div>
`).join('');

cartItemsContainer.innerHTML = cartHTML;

}

// Function to remove item;
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(id, 1); 
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();  //reloading so it can show empty;
    updateCount(); 
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCartItems(); //reloading again
    updateCount();
}

function goToMainPage() {
    window.location.href = 'index.html';
}

function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
    }


    localStorage.setItem('totalAmount', total.toFixed(2));

    window.location.href = 'checkout.html'; 
}


function updateCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = document.querySelector('#cart-count');
    cartCount.innerHTML = cart.length;
}

//load page;   
window.onload = () => {
    loadCartItems();
};
