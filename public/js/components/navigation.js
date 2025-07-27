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
      content = getHomeContent()
      break
    case "animals":
      content = getAnimalsContent()
      break
    case "cart":
      content = getCartContent()
      break
    case "about":
      content = getAboutContent()
      break
    case "contact":
      content = getContactContent()
      break
    default:
      content = getHomeContent()
  }

  mainContent.innerHTML = content

  // Initialize page-specific functionality
  initializeSection(sectionName)
}

function initializeSection(sectionName) {
  switch (sectionName) {
    case "home":
      initializeHome()
      break
    case "animals":
      initializeAnimals()
      break
    case "cart":
      initializeCart()
      break
    case "contact":
      initializeContact()
      break
  }
}

// Expose navigation functions globally
window.showSection = showSection
window.toggleMobileMenu = toggleMobileMenu
