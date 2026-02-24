const navbar = document.getElementById("navbar");
let cartCount = 0;

// Navbar scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Add to Cart function
function addToCart(itemName) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(itemName + " added to cart!");
}