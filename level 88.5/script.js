import { cart, addToCart } from './helper.js'

const products = document.querySelectorAll(".card")
const cartContainer = document.getElementById("cart-items")

const renderCart = () => {
    cartContainer.innerHTML = ""

    cart.forEach((item) => {
        const cartItemDiv = document.createElement("div")
        cartItemDiv.classList.add("cart-item")
        
        cartItemDiv.innerHTML = `
            <p><strong>${item.name}</strong> - ${item.price} (${item.category})</p>
            <hr>
        `
        
        cartContainer.appendChild(cartItemDiv)
    })
}

products.forEach(product => {
    const addButton = product.querySelector(".add-btn")
    
    addButton.addEventListener("click", () => {
        const curProduct = {
            name: product.querySelector(".title").textContent,
            price: product.querySelector(".price").textContent,
            category: product.querySelector(".category").textContent
        }

        addToCart(curProduct)
        renderCart()
    })
})