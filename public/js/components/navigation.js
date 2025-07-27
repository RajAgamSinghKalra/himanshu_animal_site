// Navigation functions
// These functions are now globally accessible via `window.`
// They rely on `window.getHomeContent`, `window.initializeHome`, etc.

window.showSection = (sectionName) => {
  // Hide all sections
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => section.classList.remove("active"))

  // Load and show the selected section
  window.loadSection(sectionName)

  // Update navigation - find the clicked link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => link.classList.remove("active"))

  // Add active class to the correct nav link
  const activeLink = document.querySelector(`[onclick="showSection('${sectionName}')"]`)
  if (activeLink) {
    activeLink.classList.add("active")
  }

  // Close mobile menu if open
  const navMenu = document.querySelector(".nav-menu")
  if (navMenu) {
    navMenu.classList.remove("active")
  }
}

window.toggleMobileMenu = () => {
  const navMenu = document.querySelector(".nav-menu")
  if (navMenu) {
    navMenu.classList.toggle("active")
  }
}

window.loadSection = (sectionName) => {
  const mainContent = document.getElementById("main-content")
  if (!mainContent) return

  let content = ""

  switch (sectionName) {
    case "home":
      content = window.getHomeContent()
      break
    case "animals":
      content = window.getAnimalsContent()
      break
    case "cart":
      content = window.getCartContent()
      break
    case "about":
      content = window.getAboutContent()
      break
    case "contact":
      content = window.getContactContent()
      break
    default:
      content = window.getHomeContent() // Default to home
  }

  mainContent.innerHTML = content

  // After content is loaded, find the newly inserted section and add the 'active' class
  const loadedSection = document.getElementById(sectionName)
  if (loadedSection) {
    loadedSection.classList.add("active")
  }

  // Initialize page-specific functionality AFTER content is loaded into DOM
  window.initializeSection(sectionName)
}

window.initializeSection = (sectionName) => {
  switch (sectionName) {
    case "home":
      if (typeof window.initializeHome === "function") window.initializeHome()
      break
    case "animals":
      if (typeof window.initializeAnimals === "function") window.initializeAnimals()
      break
    case "cart":
      if (typeof window.initializeCart === "function") window.initializeCart()
      break
    case "contact":
      if (typeof window.initializeContact === "function") window.initializeContact()
      break
    case "about":
      if (typeof window.initializeAbout === "function") window.initializeAbout()
      break
  }
  // Update cart display and user interface after any section load
  window.updateCartCount()
  window.updateUserInterface()
}
