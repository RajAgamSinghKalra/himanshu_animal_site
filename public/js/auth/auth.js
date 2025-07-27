// Authentication functions
// These functions are now globally accessible via `window.`
// They rely on `window.storage` and `window.openModal`, `window.closeModal`, `window.showMessage`, `window.updateUserInterface`, `window.updateCartCount`, `window.updateCartDisplay`, `window.showSection`

window.handleRegister = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get("name").trim()
  const email = formData.get("email").trim().toLowerCase()
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    window.showMessage("registerModal", "error", "All fields are required.")
    return
  }

  if (password.length < 6) {
    window.showMessage("registerModal", "error", "Password must be at least 6 characters long.")
    return
  }

  if (password !== confirmPassword) {
    window.showMessage("registerModal", "error", "Passwords do not match.")
    return
  }

  // Check if user already exists
  const existingUser = window.storage.findUserByEmail(email)
  if (existingUser) {
    window.showMessage("registerModal", "error", "An account with this email already exists.")
    return
  }

  // Create new user
  const newUser = window.storage.addUser({
    name: name,
    email: email,
    password: password, // In production, this should be hashed
  })

  window.showMessage("registerModal", "success", "Account created successfully! You can now sign in.")

  // Clear form
  event.target.reset()

  // Auto-switch to login after 2 seconds
  setTimeout(() => {
    window.switchToLogin()
  }, 2000)
}

window.handleLogin = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const email = formData.get("email").trim().toLowerCase()
  const password = formData.get("password")

  // Validation
  if (!email || !password) {
    window.showMessage("loginModal", "error", "Email and password are required.")
    return
  }

  // Authenticate user
  const user = window.storage.authenticateUser(email, password)
  if (!user) {
    window.showMessage("loginModal", "error", "Invalid email or password.")
    return
  }

  // Login successful
  // storage.setCurrentUser(user); // This is now handled by authenticateUser
  window.updateUserInterface()
  window.updateCartCount() // Update cart count on login

  window.showMessage("loginModal", "success", `Welcome back, ${user.name}!`)

  // Close modal after 1 second
  setTimeout(() => {
    window.closeModal("loginModal")
  }, 1000)
}

window.handleLogout = () => {
  const confirmed = confirm("Are you sure you want to logout?")
  if (confirmed) {
    window.storage.clearCurrentUser()
    window.updateUserInterface()
    window.updateCartCount()
    window.updateCartDisplay() // Update cart display on logout

    // Show home section
    window.showSection("home")

    alert("You have been logged out successfully.")
  }
}

window.updateUserInterface = () => {
  const guestMenu = document.getElementById("guestMenu")
  const userMenu = document.getElementById("userMenu")
  const userName = document.getElementById("userName")
  const userAvatar = document.getElementById("userAvatar")

  const currentUser = window.storage.getCurrentUser()

  if (currentUser) {
    // User is logged in
    if (guestMenu) guestMenu.style.display = "none"
    if (userMenu) userMenu.style.display = "flex"
    if (userName) userName.textContent = currentUser.name
    if (userAvatar) userAvatar.textContent = currentUser.name.charAt(0).toUpperCase()
  } else {
    // User is not logged in
    if (guestMenu) guestMenu.style.display = "flex"
    if (userMenu) userMenu.style.display = "none"
  }
}
