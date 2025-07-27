// Main application initialization
document.addEventListener("DOMContentLoaded", () => {
  // Load current user and cart
  const storage = window.storage // Declare storage variable
  storage.loadCurrentUser()
  storage.loadCart()

  // Update UI
  const updateUserInterface = window.updateUserInterface // Declare updateUserInterface variable
  updateUserInterface()
  const updateCartCount = window.updateCartCount // Declare updateCartCount variable
  updateCartCount()

  // Load home page by default
  const showSection = window.showSection // Declare showSection variable
  showSection("home")

  // Setup event listeners
  setupEventListeners()

  console.log("Application initialized successfully")
})

function setupEventListeners() {
  // Close modals when clicking outside
  window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal")
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.classList.remove("active")
      }
    })
  })

  // Add focus styles to form elements
  document.addEventListener(
    "focus",
    (event) => {
      if (event.target.matches("input, select, textarea")) {
        event.target.style.borderColor = "#e67e22"
      }
    },
    true,
  )

  document.addEventListener(
    "blur",
    (event) => {
      if (event.target.matches("input, select, textarea")) {
        event.target.style.borderColor = "#ddd"
      }
    },
    true,
  )
}

// Debug functions
function debugCart() {
  console.log("Current cart:", window.storage.getCart())
  console.log("Cart length:", window.storage.getCartCount())
  return window.storage.getCart()
}

function debugUsers() {
  console.log("All users:", window.storage.users)
  console.log("Current user:", window.storage.getCurrentUser())
  return { users: window.storage.users, currentUser: window.storage.getCurrentUser() }
}

// Make debug functions available globally
window.debugCart = debugCart
window.debugUsers = debugUsers
