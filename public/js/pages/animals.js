// Animals page functionality
// These functions are now globally accessible via `window.`
// They rely on `window.animals`, `window.createAnimalCard`, `window.addToCart`, `window.viewAnimalDetail`

window.getAnimalsContent = () => `
        <section id="animals" class="section">
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

            <div class="animals-listing">
                <div class="container">
                    <div class="animals-grid" id="animals-grid">
                        <!-- Animals will be loaded here by JavaScript -->
                    </div>
                </div>
            </div>
        </section>
    `

window.initializeAnimals = () => {
  window.loadAllAnimals()
  window.setupFilters()
}

window.loadAllAnimals = () => {
  const animalsContainer = document.getElementById("animals-grid")
  if (!animalsContainer) return

  window.displayAnimals(window.animals) // Use global animals
}

window.displayAnimals = (animalsToShow) => {
  const animalsContainer = document.getElementById("animals-grid")
  if (!animalsContainer) return

  if (animalsToShow.length === 0) {
    animalsContainer.innerHTML = '<div class="loading">No animals found matching your criteria.</div>'
    return
  }

  animalsContainer.innerHTML = animalsToShow.map((animal) => window.createAnimalCard(animal)).join("")
}

window.setupFilters = () => {
  const typeFilter = document.getElementById("type-filter")
  const ageFilter = document.getElementById("age-filter")
  const sizeFilter = document.getElementById("size-filter")

  if (typeFilter) typeFilter.addEventListener("change", window.applyFilters)
  if (ageFilter) ageFilter.addEventListener("change", window.applyFilters)
  if (sizeFilter) sizeFilter.addEventListener("change", window.applyFilters)
}

window.applyFilters = () => {
  const typeFilter = document.getElementById("type-filter").value
  const ageFilter = document.getElementById("age-filter").value
  const sizeFilter = document.getElementById("size-filter").value

  const filteredAnimals = window.animals.filter((animal) => {
    // Use global animals
    return (
      (!typeFilter || animal.type === typeFilter) &&
      (!ageFilter || animal.age === ageFilter) &&
      (!sizeFilter || animal.size === sizeFilter)
    )
  })

  window.displayAnimals(filteredAnimals)
}

window.viewAnimalDetail = (animalId) => {
  const animal = window.animals.find((a) => a.id === animalId) // Use global animals
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
