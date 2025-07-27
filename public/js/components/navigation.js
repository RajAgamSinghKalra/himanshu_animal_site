// Navigation functions
function showSection(sectionName) {
  // Hide all sections
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => section.classList.remove("active"))

  // Load and show the selected section
  loadSection(sectionName)

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

function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu")
  if (navMenu) {
    navMenu.classList.toggle("active")
  }
}

function loadSection(sectionName) {
  const mainContent = document.getElementById("main-content")
  if (!mainContent) return

  let content = ""

  switch (sectionName) {
    case "home":
      content = "Home Content" // Placeholder for getHomeContent()
      break
    case "animals":
      content = "Animals Content" // Placeholder for getAnimalsContent()
      break
    case "cart":
      content = "Cart Content" // Placeholder for getCartContent()
      break
    case "about":
      content = "About Content" // Placeholder for getAboutContent()
      break
    case "contact":
      content = "Contact Content" // Placeholder for getContactContent()
      break
    default:
      content = "Home Content" // Placeholder for getHomeContent()
  }

  mainContent.innerHTML = content

  // Initialize page-specific functionality
  initializeSection(sectionName)
}

function initializeSection(sectionName) {
  switch (sectionName) {
    case "home":
      console.log("Initializing Home Section") // Placeholder for initializeHome()
      break
    case "animals":
      console.log("Initializing Animals Section") // Placeholder for initializeAnimals()
      break
    case "cart":
      console.log("Initializing Cart Section") // Placeholder for initializeCart()
      break
    case "contact":
      console.log("Initializing Contact Section") // Placeholder for initializeContact()
      break
  }
}
