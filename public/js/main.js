// Main application initialization
document.addEventListener("DOMContentLoaded", () => {
  // Initialize storage (already done by storage.js loading)
  // window.storage is now available globally

  // Load current user and cart state from storage
  window.storage.loadCurrentUser()
  window.storage.loadCart()

  // Update UI based on initial state
  window.updateUserInterface()
  window.updateCartCount()

  // Load home page by default
  window.showSection("home")

  // Setup global event listeners
  setupGlobalEventListeners()

  console.log("Application initialized successfully")
})

function setupGlobalEventListeners() {
  // Close modals when clicking outside
  window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal.active") // Only target active modals
    modals.forEach((modal) => {
      if (event.target === modal) {
        window.closeModal(modal.id)
      }
    })
  })

  // Add focus styles to form elements
  document.addEventListener("focusin", (event) => {
    // Use focusin for capturing phase
    if (event.target.matches("input, select, textarea")) {
      event.target.style.borderColor = "#e67e22"
    }
  })

  document.addEventListener("focusout", (event) => {
    // Use focusout for capturing phase
    if (event.target.matches("input, select, textarea")) {
      event.target.style.borderColor = "#ddd"
    }
  })
}

// Debug functions (already globally exposed by previous iteration, just ensuring they are here)
// window.debugCart = debugCart;
// window.debugUsers = debugUsers;
