// Utility function to create an animal card HTML string
// This function is now globally accessible via `window.`

window.createAnimalCard = (animal) => `
    <div class="animal-card">
        <img src="${animal.image}" alt="${animal.name}" onerror="this.src='/placeholder.svg?height=250&width=300'">
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
