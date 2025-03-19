let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Update cart count
    cartCount.innerText = cart.length;

    // Update cart items
    cartItems.innerHTML = "";
    cart.forEach((cartItem) => {
        const li = document.createElement("li");
        li.innerText = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total price
    totalPrice.innerText = total.toFixed(2);
}

function toggleCart() {
    const cartModal = document.getElementById("cart");
    cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
}

function checkout() {
    const address = document.getElementById("address").value;

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    if (address === "") {
        alert("Please enter a delivery address.");
        return;
    }

    alert(`Thank you for your order!\nTotal: $${total.toFixed(2)}\nDelivery Address: ${address}`);
    cart = [];
    total = 0;
    updateCart();
    toggleCart();
}
