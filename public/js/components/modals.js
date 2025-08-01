// Modal functions
// These functions are now globally accessible via `window.`

window.openModal = (modalId) => {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add("active")
    // Clear any previous messages
    window.clearMessages(modalId)
  }
}

window.closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.remove("active")
    // Clear form data
    const form = modal.querySelector("form")
    if (form) {
      form.reset()
    }
    window.clearMessages(modalId)
  }
}

window.switchToLogin = () => {
  window.closeModal("registerModal")
  window.openModal("loginModal")
}

window.switchToRegister = () => {
  window.closeModal("loginModal")
  window.openModal("registerModal")
}

window.clearMessages = (modalId) => {
  const modal = document.getElementById(modalId)
  if (modal) {
    const errorMsg = modal.querySelector(".error-message")
    const successMsg = modal.querySelector(".success-message")
    if (errorMsg) {
      errorMsg.style.display = "none"
      errorMsg.textContent = ""
    }
    if (successMsg) {
      successMsg.style.display = "none"
      successMsg.textContent = ""
    }
  }
}

window.showMessage = (modalId, type, message) => {
  const modal = document.getElementById(modalId)
  if (modal) {
    const messageElement = modal.querySelector(`.${type}-message`)
    if (messageElement) {
      messageElement.textContent = message
      messageElement.style.display = "block"

      // Hide the other message type
      const otherType = type === "error" ? "success" : "error"
      const otherElement = modal.querySelector(`.${otherType}-message`)
      if (otherElement) {
        otherElement.style.display = "none"
      }
    }
  }
}
