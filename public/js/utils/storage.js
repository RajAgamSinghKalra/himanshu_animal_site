// Storage utility functions (dockerless)
class Storage {
  constructor() {
    this.users = [
      // Demo user for testing
      {
        id: 1,
        name: "Demo User",
        email: "demo@example.com",
        password: "password123",
      },
    ]
    this.currentUser = null
    this.cart = []
  }

  // User management
  saveUsers() {
    console.log("Users saved:", this.users)
  }

  saveCurrentUser() {
    console.log("Current user saved:", this.currentUser)
  }

  loadCurrentUser() {
    console.log("Current user loaded:", this.currentUser)
  }

  // Cart management
  saveCart() {
    console.log("Cart saved:", this.cart)
  }

  loadCart() {
    console.log("Cart loaded:", this.cart)
  }

  // User operations
  addUser(user) {
    user.id = this.users.length + 1
    this.users.push(user)
    this.saveUsers()
    return user
  }

  findUserByEmail(email) {
    return this.users.find((user) => user.email === email.toLowerCase())
  }

  authenticateUser(email, password) {
    return this.users.find((user) => user.email === email.toLowerCase() && user.password === password)
  }

  setCurrentUser(user) {
    this.currentUser = user
    this.saveCurrentUser()
  }

  getCurrentUser() {
    return this.currentUser
  }

  clearCurrentUser() {
    this.currentUser = null
    this.cart = []
    this.saveCurrentUser()
    this.saveCart()
  }

  // Cart operations
  addToCart(item) {
    this.cart.push(item)
    this.saveCart()
  }

  removeFromCart(itemId) {
    this.cart = this.cart.filter((item) => item.id !== itemId)
    this.saveCart()
  }

  getCart() {
    return this.cart
  }

  clearCart() {
    this.cart = []
    this.saveCart()
  }

  getCartCount() {
    return this.cart.length
  }
}

// Create global storage instance
const storage = new Storage()

// Make the storage instance available globally
window.storage = storage
