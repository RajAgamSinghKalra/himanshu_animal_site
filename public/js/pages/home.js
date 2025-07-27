// Home page functionality
// These functions are now globally accessible via `window.`
// They rely on `window.animals`, `window.showSection`, `window.viewAnimalDetail`, `window.addToCart`, `window.createAnimalCard`

window.getHomeContent = () => `
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

            <div class="features">
                <div class="container">
                    <h2>Why Choose Paws & Hearts?</h2>
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

            <div class="featured-animals">
                <div class="container">
                    <h2>Featured Animals</h2>
                    <div class="animals-grid" id="featured-animals">
                        <!-- Featured animals will be loaded here by JavaScript -->
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="showSection('animals')">View All Animals</button>
                    </div>
                </div>
            </div>

            <div class="stats">
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

window.initializeHome = () => {
  window.loadFeaturedAnimals()
}

window.loadFeaturedAnimals = () => {
  const featuredContainer = document.getElementById("featured-animals")
  if (!featuredContainer) return

  const featuredAnimals = window.animals.slice(0, 3) // Use global animals
  featuredContainer.innerHTML = featuredAnimals.map((animal) => window.createAnimalCard(animal)).join("")
}
