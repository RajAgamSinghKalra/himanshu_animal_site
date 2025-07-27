// Cart functionality
// These functions are now globally accessible via `window.`
// They rely on `window.storage`, `window.animals`, `window.openModal`, `window.updateCartCount`, `window.updateCartDisplay`

window.addToCart = (animalId) => {
  // Check if user is logged in
  const currentUser = window.storage.getCurrentUser()
  if (!currentUser) {
    alert("Please login to add animals to your cart.")
    window.openModal("loginModal")
    return
  }

  console.log("Adding to cart:", animalId)

  const animal = window.animals.find((a) => a.id === animalId)
  if (!animal) {
    console.error("Animal not found:", animalId)
    return
  }

  // Check if animal is already in cart
  const cart = window.storage.getCart()
  const existingItem = cart.find((item) => item.id === animalId)
  if (existingItem) {
    alert(`${animal.name} is already in your adoption cart!`)
    return
  }

  // Add to cart
  const cartItem = {
    id: animal.id,
    name: animal.name,
    breed: animal.breed,
    price: animal.price,
    image: animal.image,
    quantity: 1,
    userId: currentUser.id,
  }

  window.storage.addToCart(cartItem)
  console.log("Cart after adding:", window.storage.getCart())

  window.updateCartCount()

  // Show success message
  alert(`${animal.name} has been added to your adoption cart!`)

  // If we're on the cart page, refresh it
  const currentSection = document.querySelector(".section.active")
  if (currentSection && currentSection.id === "cart") {
    window.updateCartDisplay()
  }
}

window.removeFromCart = (animalId) => {
  console.log("Removing from cart:", animalId)

  const initialLength = window.storage.getCartCount()
  window.storage.removeFromCart(animalId)

  if (window.storage.getCartCount() < initialLength) {
    console.log("Item removed. Cart now:", window.storage.getCart())
    window.updateCartCount()
    window.updateCartDisplay()

    const removedAnimal = window.animals.find((a) => a.id === animalId)
    if (removedAnimal) {
      alert(`${removedAnimal.name} has been removed from your cart.`)
    }
  }
}

window.updateCartCount = () => {
  const cartCountElement = document.getElementById("cart-count")
  if (cartCountElement) {
    const count = window.storage.getCartCount()
    cartCountElement.textContent = count
    console.log("Cart count updated:", count)
  }
}

window.proceedToAdoption = () => {
  const currentUser = window.storage.getCurrentUser()
  if (!currentUser) {
    alert("Please login to proceed with adoption.")
    window.openModal("loginModal")
    return
  }

  const cart = window.storage.getCart()
  if (cart.length === 0) {
    alert("Your cart is empty!")
    return
  }

  const animalNames = cart.map((item) => item.name).join(", ")
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0)

  const confirmed = confirm(`Hello ${currentUser.name}!

Are you ready to proceed with adopting ${animalNames} for a total of $${totalCost}?

This will redirect you to our adoption application process.`)

  if (confirmed) {
    alert(`Thank you for your interest in adoption, ${currentUser.name}! 

In a real application, this would redirect to an adoption application form. 

For this demo, we'll clear your cart.`)

    // Clear cart
    window.storage.clearCart()
    window.updateCartCount()
    window.updateCartDisplay()
  }
}
