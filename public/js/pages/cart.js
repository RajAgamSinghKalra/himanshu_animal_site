// Cart page functionality
const storage = {
  getCart: () => {
    // Mock implementation for demonstration purposes
    return JSON.parse(localStorage.getItem("cart")) || []
  },
}

function getCartContent() {
  return `
        <section id="cart" class="section active">
            <div class="page-header">
                <div class="container">
                    <h1>Your Adoption Cart</h1>
                    <p>Review your selected animals before proceeding with adoption</p>
                </div>
            </div>

            <div style="padding: 60px 0;">
                <div class="container">
                    <div id="cart-items">
                        <!-- Cart items will be loaded here by JavaScript -->
                    </div>
                    <div id="cart-empty" class="cart-empty" style="display: none;">
                        <h3>Your cart is empty</h3>
                        <p>Browse our available animals and add them to your cart to start the adoption process.</p>
                        <button class="btn btn-primary" onclick="showSection('animals')">Browse Animals</button>
                    </div>
                    <div id="cart-summary" class="cart-summary" style="display: none;">
                        <div>
                            <h3>Adoption Summary</h3>
                            <div style="display: flex; justify-content: space-between; margin: 15px 0; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                                <span>Total Animals:</span>
                                <span id="total-animals">0</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 15px 0; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                                <span>Adoption Fees:</span>
                                <span id="total-fees">$0</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 15px 0; padding-bottom: 15px; font-size: 1.2rem; font-weight: 600; color: #2c3e50;">
                                <span>Total:</span>
                                <span id="grand-total">$0</span>
                            </div>
                            <button class="btn btn-primary btn-full" onclick="proceedToAdoption()">Proceed to Adoption</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

function initializeCart() {
  updateCartDisplay()
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items")
  const cartEmptyContainer = document.getElementById("cart-empty")
  const cartSummaryContainer = document.getElementById("cart-summary")

  const cart = storage.getCart()
  console.log("Updating cart display. Cart length:", cart.length)

  if (!cartItemsContainer || !cartEmptyContainer || !cartSummaryContainer) {
    console.error("Cart containers not found")
    return
  }

  if (cart.length === 0) {
    console.log("Showing empty cart")
    cartEmptyContainer.style.display = "block"
    cartSummaryContainer.style.display = "none"
    cartItemsContainer.innerHTML = ""
    return
  }

  console.log("Showing cart with items")
  cartEmptyContainer.style.display = "none"
  cartSummaryContainer.style.display = "block"

  // Generate cart items HTML
  const cartItemsHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100/e67e22/ffffff?text=${item.name}'">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.breed}</p>
            </div>
            <div class="cart-item-price">$${item.price}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `,
    )
    .join("")

  cartItemsContainer.innerHTML = cartItemsHTML

  // Update summary
  const totalAnimals = cart.length
  const totalFees = cart.reduce((sum, item) => sum + item.price, 0)

  const totalAnimalsElement = document.getElementById("total-animals")
  const totalFeesElement = document.getElementById("total-fees")
  const grandTotalElement = document.getElementById("grand-total")

  if (totalAnimalsElement) totalAnimalsElement.textContent = totalAnimals
  if (totalFeesElement) totalFeesElement.textContent = `$${totalFees}`
  if (grandTotalElement) grandTotalElement.textContent = `$${totalFees}`

  console.log("Cart display updated successfully")
}

function showSection(sectionId) {
  // Mock implementation for demonstration purposes
  console.log(`Showing section: ${sectionId}`)
}

function proceedToAdoption() {
  // Mock implementation for demonstration purposes
  console.log("Proceeding to adoption...")
}

function removeFromCart(itemId) {
  // Mock implementation for demonstration purposes
  console.log(`Removing item with ID: ${itemId}`)
}
