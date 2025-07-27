// Home page functionality
const animals = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    description: "Buddy is a friendly and energetic dog who loves to play fetch.",
    price: 500,
    image: "https://example.com/buddy.jpg",
  },
  {
    id: 2,
    name: "Lucy",
    breed: "Siamese",
    age: "1 year",
    gender: "Female",
    description: "Lucy is a curious and affectionate cat who enjoys cuddling.",
    price: 300,
    image: "https://example.com/lucy.jpg",
  },
  {
    id: 3,
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    gender: "Male",
    description: "Max is a loyal and protective dog who is great with kids.",
    price: 700,
    image: "https://example.com/max.jpg",
  },
  // Add more animals as needed
]

function getHomeContent() {
  return `
        <section id="home" class="section active">
            <div class="hero">
                <div class="hero-content">
                    <div>
                        <h1>Find Your Perfect Companion</h1>
                        <p>Give a loving home to animals in need. Every adoption saves a life and makes room for another rescue.</p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary" onclick="showSection('animals')">Adopt Now</button>
                            <button class="btn btn-secondary" onclick="showSection('about')">Learn More</button>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Happy pets">
                    </div>
                </div>
            </div>

            <div class="features" style="padding: 80px 0; background: white;">
                <div class="container">
                    <h2 style="text-align: center; font-size: 2.5rem; color: #2c3e50; margin-bottom: 60px;">Why Choose Paws & Hearts?</h2>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🏥</div>
                            <h3>Health Guaranteed</h3>
                            <p>All our animals are vaccinated, spayed/neutered, and health-checked by certified veterinarians.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">❤️</div>
                            <h3>Perfect Matches</h3>
                            <p>We help you find the perfect companion based on your lifestyle and preferences.</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🏠</div>
                            <h3>Lifetime Support</h3>
                            <p>Our support doesn't end at adoption. We're here to help throughout your pet's life.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="featured-animals" style="padding: 80px 0; background: #f8f9fa;">
                <div class="container">
                    <h2 style="text-align: center; font-size: 2.5rem; color: #2c3e50; margin-bottom: 60px;">Featured Animals</h2>
                    <div class="animals-grid" id="featured-animals">
                        <!-- Featured animals will be loaded here by JavaScript -->
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="showSection('animals')">View All Animals</button>
                    </div>
                </div>
            </div>

            <div class="stats" style="padding: 80px 0; background: #2c3e50; color: white;">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <h3>2,500+</h3>
                            <p>Animals Rescued</p>
                        </div>
                        <div class="stat-item">
                            <h3>1,800+</h3>
                            <p>Successful Adoptions</p>
                        </div>
                        <div class="stat-item">
                            <h3>15+</h3>
                            <p>Years of Service</p>
                        </div>
                        <div class="stat-item">
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

function initializeHome() {
  loadFeaturedAnimals()
}

function loadFeaturedAnimals() {
  const featuredContainer = document.getElementById("featured-animals")
  if (!featuredContainer) return

  const featuredAnimals = animals.slice(0, 3)
  featuredContainer.innerHTML = featuredAnimals.map((animal) => createAnimalCard(animal)).join("")
}

function createAnimalCard(animal) {
  return `
        <div class="animal-card">
            <img src="${animal.image}" alt="${animal.name}" onerror="this.src='https://via.placeholder.com/300x250/e67e22/ffffff?text=${animal.name}'">
            <div class="animal-info">
                <h3>${animal.name}</h3>
                <div class="animal-meta">
                    <span>${animal.breed}</span>
                    <span>${animal.age}</span>
                    <span>${animal.gender}</span>
                </div>
                <p>${animal.description.substring(0, 100)}...</p>
                <div class="animal-price">$${animal.price}</div>
                <div class="animal-actions">
                    <button class="btn btn-secondary btn-small" onclick="viewAnimalDetail(${animal.id})">View Details</button>
                    <button class="btn btn-primary btn-small" onclick="addToCart(${animal.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `
}

function viewAnimalDetail(id) {
  // Implement view animal detail functionality
}

function addToCart(id) {
  // Implement add to cart functionality
}

function showSection(sectionId) {
  // Implement show section functionality
}
