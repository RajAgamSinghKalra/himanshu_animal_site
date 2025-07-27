// Storage utility functions (dockerless)
class Storage {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("appUsers")) || [
      // Demo user for testing
      {
        id: 1,
        name: "Demo User",
        email: "demo@example.com",
        password: "password123",
        cart: [], // Each user has their own cart
      },
    ]
    this.currentUser = JSON.parse(localStorage.getItem("appCurrentUser")) || null
    this.cart = JSON.parse(localStorage.getItem("adoptionCart")) || [] // This will be user-specific
  }

  // User management
  saveUsers() {
    localStorage.setItem("appUsers", JSON.stringify(this.users))
    console.log("Users saved:", this.users)
  }

  saveCurrentUser() {
    localStorage.setItem("appCurrentUser", JSON.stringify(this.currentUser))
    console.log("Current user saved:", this.currentUser)
  }

  loadCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem("appCurrentUser")) || null
    console.log("Current user loaded:", this.currentUser)
  }

  // Cart management
  saveCart() {
    // Save the current user's cart
    if (this.currentUser) {
      const userIndex = this.users.findIndex((u) => u.id === this.currentUser.id)
      if (userIndex !== -1) {
        this.users[userIndex].cart = this.cart
        this.saveUsers() // Save updated users array
      }
    }
    // Also save to a general cart for non-logged in state if needed, or remove this line
    localStorage.setItem("adoptionCart", JSON.stringify(this.cart))
    console.log("Cart saved:", this.cart)
  }

  loadCart() {
    // Load the current user's cart
    if (this.currentUser) {
      const user = this.users.find((u) => u.id === this.currentUser.id)
      this.cart = user ? user.cart : []
    } else {
      this.cart = [] // Clear cart if no user is logged in
    }
    console.log("Cart loaded:", this.cart)
  }

  // User operations
  addUser(user) {
    user.id = this.users.length > 0 ? Math.max(...this.users.map((u) => u.id)) + 1 : 1
    user.cart = [] // Initialize empty cart for new user
    this.users.push(user)
    this.saveUsers()
    return user
  }

  findUserByEmail(email) {
    return this.users.find((user) => user.email === email.toLowerCase())
  }

  authenticateUser(email, password) {
    const user = this.users.find((u) => u.email === email.toLowerCase() && u.password === password)
    if (user) {
      this.setCurrentUser(user)
      this.loadCart() // Load user's specific cart on login
    }
    return user
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
    this.cart = [] // Clear cart on logout
    this.saveCurrentUser()
    this.saveCart() // Save empty cart for current user
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
window.storage = new Storage()
