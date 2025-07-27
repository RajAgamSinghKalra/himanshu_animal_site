// Animals page functionality
// Use the global animals data provided by data/animals.js
const animalsData = window.animals

function createAnimalCard(animal) {
  return `
    <div class="animal-card" onclick="viewAnimalDetail(${animal.id})">
      <h2>${animal.name}</h2>
      <p>Breed: ${animal.breed}</p>
      <p>Type: ${animal.type}</p>
      <p>Age: ${animal.age}</p>
      <p>Size: ${animal.size}</p>
      <p>Gender: ${animal.gender}</p>
      <p>Price: $${animal.price}</p>
    </div>
  `
}

function getAnimalsContent() {
  return `
        <section id="animals" class="section active">
            <div class="page-header">
                <div class="container">
                    <h1>Find Your Perfect Companion</h1>
                    <p>Browse our available animals and find your new best friend</p>
                </div>
            </div>

            <div class="filters">
                <div class="container">
                    <div class="filter-controls">
                        <select id="type-filter" onchange="applyFilters()">
                            <option value="">All Animals</option>
                            <option value="dog">Dogs</option>
                            <option value="cat">Cats</option>
                            <option value="rabbit">Rabbits</option>
                            <option value="bird">Birds</option>
                        </select>
                        <select id="age-filter" onchange="applyFilters()">
                            <option value="">All Ages</option>
                            <option value="young">Young (0-2 years)</option>
                            <option value="adult">Adult (2-7 years)</option>
                            <option value="senior">Senior (7+ years)</option>
                        </select>
                        <select id="size-filter" onchange="applyFilters()">
                            <option value="">All Sizes</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="animals-listing" style="padding: 80px 0; background: #f8f9fa;">
                <div class="container">
                    <div class="animals-grid" id="animals-grid">
                        <!-- Animals will be loaded here by JavaScript -->
                    </div>
                </div>
            </div>
        </section>
    `
}

function initializeAnimals() {
  loadAllAnimals()
  setupFilters()
}

function loadAllAnimals() {
  const animalsContainer = document.getElementById("animals-grid")
  if (!animalsContainer) return

  displayAnimals(animalsData)
}

function displayAnimals(animalsToShow) {
  const animalsContainer = document.getElementById("animals-grid")
  if (!animalsContainer) return

  if (animalsToShow.length === 0) {
    animalsContainer.innerHTML =
      '<div style="text-align: center; padding: 40px; color: #7f8c8d;">No animals found matching your criteria.</div>'
    return
  }

  animalsContainer.innerHTML = animalsToShow.map((animal) => createAnimalCard(animal)).join("")
}

function setupFilters() {
  const typeFilter = document.getElementById("type-filter")
  const ageFilter = document.getElementById("age-filter")
  const sizeFilter = document.getElementById("size-filter")

  if (typeFilter) typeFilter.addEventListener("change", applyFilters)
  if (ageFilter) ageFilter.addEventListener("change", applyFilters)
  if (sizeFilter) sizeFilter.addEventListener("change", applyFilters)
}

function applyFilters() {
  const typeFilter = document.getElementById("type-filter")
  const ageFilter = document.getElementById("age-filter")
  const sizeFilter = document.getElementById("size-filter")

  if (!typeFilter || !ageFilter || !sizeFilter) return

  const typeValue = typeFilter.value
  const ageValue = ageFilter.value
  const sizeValue = sizeFilter.value

  const filteredAnimals = animalsData.filter((animal) => {
    return (
      (!typeValue || animal.type === typeValue) &&
      (!ageValue || animal.age === ageValue) &&
      (!sizeValue || animal.size === sizeValue)
    )
  })

  displayAnimals(filteredAnimals)
}

function viewAnimalDetail(animalId) {
  const animal = animalsData.find((a) => a.id === animalId)
  if (!animal) return

  const detailText = `${animal.name} - ${animal.breed}

Age: ${animal.age}
Size: ${animal.size}
Gender: ${animal.gender}
Price: $${animal.price}

${animal.description}

Vaccinated: ${animal.vaccinated ? "Yes" : "No"}
Spayed/Neutered: ${animal.spayed ? "Yes" : "No"}
Location: ${animal.location}`

  alert(detailText)
}

// Expose animals page helpers globally
window.getAnimalsContent = getAnimalsContent
window.initializeAnimals = initializeAnimals
