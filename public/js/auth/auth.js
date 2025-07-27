// Authentication functions
const showMessage = (modalId, type, message) => {
  const modal = document.getElementById(modalId)
  const messageElement = document.createElement("div")
  messageElement.className = `message ${type}`
  messageElement.textContent = message
  modal.appendChild(messageElement)

  setTimeout(() => {
    modal.removeChild(messageElement)
  }, 3000)
}

const storage = window.storage

const switchToLogin = () => {
  document.getElementById("registerModal").style.display = "none"
  document.getElementById("loginModal").style.display = "block"
}

const closeModal = (modalId) => {
  document.getElementById(modalId).style.display = "none"
}

const updateCartCount = () => {
  const cartCountElement = document.getElementById("cartCount")
  const currentUser = storage.getCurrentUser()
  if (currentUser) {
    cartCountElement.textContent = currentUser.cart.length
  } else {
    cartCountElement.textContent = 0
  }
}

const updateCartDisplay = () => {
  const cartDisplayElement = document.getElementById("cartDisplay")
  const currentUser = storage.getCurrentUser()
  if (currentUser) {
    cartDisplayElement.innerHTML = currentUser.cart.map((item) => `<li>${item.name}</li>`).join("")
  } else {
    cartDisplayElement.innerHTML = "<li>Your cart is empty.</li>"
  }
}


function handleRegister(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name").trim()
  const email = formData.get("email").trim().toLowerCase()
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    showMessage("registerModal", "error", "All fields are required.")
    return
  }

  if (password.length < 6) {
    showMessage("registerModal", "error", "Password must be at least 6 characters long.")
    return
  }

  if (password !== confirmPassword) {
    showMessage("registerModal", "error", "Passwords do not match.")
    return
  }

  // Check if user already exists
  const existingUser = storage.findUserByEmail(email)
  if (existingUser) {
    showMessage("registerModal", "error", "An account with this email already exists.")
    return
  }

  // Create new user
  const newUser = storage.addUser({
    name: name,
    email: email,
    password: password,
    cart: [],
  })

  showMessage("registerModal", "success", "Account created successfully! You can now sign in.")

  // Clear form
  event.target.reset()

  // Auto-switch to login after 2 seconds
  setTimeout(() => {
    switchToLogin()
  }, 2000)
}

function handleLogin(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const email = formData.get("email").trim().toLowerCase()
  const password = formData.get("password")

  // Validation
  if (!email || !password) {
    showMessage("loginModal", "error", "Email and password are required.")
    return
  }

  // Authenticate user
  const user = storage.authenticateUser(email, password)
  if (!user) {
    showMessage("loginModal", "error", "Invalid email or password.")
    return
  }

  // Login successful
  storage.setCurrentUser(user)
  updateUserInterface()

  showMessage("loginModal", "success", `Welcome back, ${user.name}!`)

  // Close modal after 1 second
  setTimeout(() => {
    closeModal("loginModal")
  }, 1000)
}

function handleLogout() {
  const confirmed = confirm("Are you sure you want to logout?")
  if (confirmed) {
    storage.clearCurrentUser()
    updateUserInterface()
    updateCartCount()
    updateCartDisplay()

    // Show home section
    window.showSection("home")

    alert("You have been logged out successfully.")
  }
}

function updateUserInterface() {
  const guestMenu = document.getElementById("guestMenu")
  const userMenu = document.getElementById("userMenu")
  const userName = document.getElementById("userName")
  const userAvatar = document.getElementById("userAvatar")

  const currentUser = storage.getCurrentUser()

  if (currentUser) {
    // User is logged in
    guestMenu.style.display = "none"
    userMenu.style.display = "flex"
    userName.textContent = currentUser.name
    userAvatar.textContent = currentUser.name.charAt(0).toUpperCase()
  } else {
    // User is not logged in
    guestMenu.style.display = "flex"
    userMenu.style.display = "none"
  }
}

// Expose auth functions globally for inline event handlers
window.handleRegister = handleRegister
window.handleLogin = handleLogin
window.handleLogout = handleLogout
window.updateUserInterface = updateUserInterface
