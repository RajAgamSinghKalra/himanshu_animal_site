// Animal data
const animals = [
    {
        id: 1,
        name: "Buddy",
        type: "dog",
        breed: "Golden Retriever",
        age: "adult",
        size: "large",
        gender: "Male",
        price: 250,
        image: "/placeholder.svg?height=250&width=300",
        description: "Buddy is a friendly and energetic Golden Retriever who loves playing fetch and swimming. He's great with kids and other dogs.",
        vaccinated: true,
        spayed: true,
        location: "Main Shelter"
    },
    {
        id: 2,
        name: "Luna",
        type: "cat",
        breed: "Siamese",
        age: "young",
        size: "medium",
        gender: "Female",
        price: 150,
        image: "/placeholder.svg?height=250&width=300",
        description: "Luna is a beautiful Siamese cat with striking blue eyes. She's calm, affectionate, and loves to curl up in sunny spots.",
        vaccinated: true,
        spayed: true,
        location: "Foster Home"
    },
    {
        id: 3,
        name: "Max",
        type: "dog",
        breed: "German Shepherd",
        age: "adult",
        size: "large",
        gender: "Male",
        price: 300,
        image: "/placeholder.svg?height=250&width=300",
        description: "Max is a loyal and intelligent German Shepherd. He's well-trained and would make an excellent guard dog and family companion.",
        vaccinated: true,
        spayed: true,
        location: "Main Shelter"
    },
    {
        id: 4,
        name: "Whiskers",
        type: "cat",
        breed: "Maine Coon",
        age: "senior",
        size: "large",
        gender: "Male",
        price: 100,
        image: "/placeholder.svg?height=250&width=300",
        description: "Whiskers is a gentle giant Maine Coon who loves attention and quiet companionship. Perfect for a calm household.",
        vaccinated: true,
        spayed: true,
        location: "Main Shelter"
    },
    {
        id: 5,
        name: "Bella",
        type: "dog",
        breed: "Labrador Mix",
        age: "young",
        size: "medium",
        gender: "Female",
        price: 200,
        image: "/placeholder.svg?height=250&width=300",
        description: "Bella is a playful Labrador mix puppy who's full of energy and love. She's learning basic commands and loves treats!",
        vaccinated: true,
        spayed: false,
        location: "Foster Home"
    },
    {
        id: 6,
        name: "Oliver",
        type: "cat",
        breed: "Persian",
        age: "adult",
        size: "medium",
        gender: "Male",
        price: 175,
        image: "/placeholder.svg?height=250&width=300",
        description: "Oliver is a beautiful Persian cat with luxurious long fur. He's calm, dignified, and enjoys being pampered.",
        vaccinated: true,
        spayed: true,
        location: "Main Shelter"
    },
    {
        id: 7,
        name: "Rocky",
        type: "dog",
        breed: "Bulldog",
        age: "adult",
        size: "medium",
        gender: "Male",
        price: 275,
        image: "/placeholder.svg?height=250&width=300",
        description: "Rocky is a charming Bulldog with a gentle personality. He loves short walks and lots of belly rubs.",
        vaccinated: true,
        spayed: true,
        location: "Main Shelter"
    },
    {
        id: 8,
        name: "Mittens",
        type: "cat",
        breed: "Domestic Shorthair",
        age: "young",
        size: "small",
        gender: "Female",
        price: 125,
        image: "/placeholder.svg?height=250&width=300",
        description: "Mittens is an adorable black and white kitten who loves to play with toys and explore. She's very social and friendly.",
        vaccinated: true,
        spayed: false,
        location: "Foster Home"
    },
    {
        id: 9,
        name: "Charlie",
        type: "rabbit",
        breed: "Holland Lop",
        age: "young",
        size: "small",
        gender: "Male",
        price: 75,
        image: "/placeholder.svg?height=250&width=300",
        description: "Charlie is a sweet Holland Lop rabbit with adorable floppy ears. He's litter trained and loves fresh vegetables.",
        vaccinated: true,
        spayed: true,
        location: "Small Animal Room"
    },
    {
        id: 10,
        name: "Sunny",
        type: "bird",
        breed: "Cockatiel",
        age: "adult",
        size: "small",
        gender: "Female",
        price: 100,
        image: "/placeholder.svg?height=250&width=300",
        description: "Sunny is a vibrant Cockatiel who loves to whistle and can learn simple words. She's social and enjoys interaction.",
        vaccinated: true,
        spayed: false,
        location: "Aviary"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('adoptionCart')) || [];

// DOM elements
const cartCountElement = document.getElementById('cart-count');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initializePage();
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Initialize page based on current page
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadFeaturedAnimals();
            break;
        case 'animals.html':
            loadAllAnimals();
            setupFilters();
            break;
        case 'animal-detail.html':
            loadAnimalDetail();
            break;
        case 'cart.html':
            loadCart();
            break;
    }
}

// Load featured animals for home page
function loadFeaturedAnimals() {
    const featuredContainer = document.getElementById('featured-animals');
    if (!featuredContainer) return;
    
    const featuredAnimals = animals.slice(0, 3);
    featuredContainer.innerHTML = featuredAnimals.map(animal => createAnimalCard(animal)).join('');
}

// Load all animals for animals page
function loadAllAnimals() {
    const animalsContainer = document.getElementById('animals-grid');
    if (!animalsContainer) return;
    
    displayAnimals(animals);
}

// Display animals with optional filtering
function displayAnimals(animalsToShow) {
    const animalsContainer = document.getElementById('animals-grid');
    if (!animalsContainer) return;
    
    if (animalsToShow.length === 0) {
        animalsContainer.innerHTML = '<div class="loading">No animals found matching your criteria.</div>';
        return;
    }
    
    animalsContainer.innerHTML = animalsToShow.map(animal => createAnimalCard(animal)).join('');
}

// Create animal card HTML
function createAnimalCard(animal) {
    return `
        <div class="animal-card">
            <img src="${animal.image}" alt="${animal.name}">
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
                    <a href="animal-detail.html?id=${animal.id}" class="btn btn-secondary btn-small">View Details</a>
                    <button onclick="addToCart(${animal.id})" class="btn btn-primary btn-small">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Setup filters for animals page
function setupFilters() {
    const typeFilter = document.getElementById('type-filter');
    const ageFilter = document.getElementById('age-filter');
    const sizeFilter = document.getElementById('size-filter');
    
    if (typeFilter) typeFilter.addEventListener('change', applyFilters);
    if (ageFilter) ageFilter.addEventListener('change', applyFilters);
    if (sizeFilter) sizeFilter.addEventListener('change', applyFilters);
}

// Apply filters to animal list
function applyFilters() {
    const typeFilter = document.getElementById('type-filter').value;
    const ageFilter = document.getElementById('age-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    
    let filteredAnimals = animals.filter(animal => {
        return (!typeFilter || animal.type === typeFilter) &&
               (!ageFilter || animal.age === ageFilter) &&
               (!sizeFilter || animal.size === sizeFilter);
    });
    
    displayAnimals(filteredAnimals);
}

// Load animal detail page
function loadAnimalDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const animalId = parseInt(urlParams.get('id'));
    const animal = animals.find(a => a.id === animalId);
    
    const detailContainer = document.getElementById('animal-detail-content');
    if (!detailContainer || !animal) {
        if (detailContainer) {
            detailContainer.innerHTML = '<div class="loading">Animal not found.</div>';
        }
        return;
    }
    
    detailContainer.innerHTML = `
        <div class="detail-grid">
            <div class="detail-image">
                <img src="${animal.image}" alt="${animal.name}">
            </div>
            <div class="detail-info">
                <h1>${animal.name}</h1>
                <div class="detail-meta">
                    <div class="meta-item">
                        <span class="meta-label">Breed:</span>
                        <span class="meta-value">${animal.breed}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Age:</span>
                        <span class="meta-value">${animal.age}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Size:</span>
                        <span class="meta-value">${animal.size}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Gender:</span>
                        <span class="meta-value">${animal.gender}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Vaccinated:</span>
                        <span class="meta-value">${animal.vaccinated ? 'Yes' : 'No'}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Spayed/Neutered:</span>
                        <span class="meta-value">${animal.spayed ? 'Yes' : 'No'}</span>
                    </div>
                </div>
                <div class="detail-description">
                    <p>${animal.description}</p>
                </div>
                <div class="detail-price">$${animal.price}</div>
                <button onclick="addToCart(${animal.id})" class="btn btn-primary btn-full">Add to Adoption Cart</button>
            </div>
        </div>
    `;
}

// Add animal to cart
function addToCart(animalId) {
    const animal = animals.find(a => a.id === animalId);
    if (!animal) return;
    
    // Check if animal is already in cart
    const existingItem = cart.find(item => item.id === animalId);
    if (existingItem) {
        alert(`${animal.name} is already in your adoption cart!`);
        return;
    }
    
    cart.push({
        id: animal.id,
        name: animal.name,
        breed: animal.breed,
        price: animal.price,
        image: animal.image,
        quantity: 1
    });
    
    localStorage.setItem('adoptionCart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    alert(`${animal.name} has been added to your adoption cart!`);
}

// Remove animal from cart
function removeFromCart(animalId) {
    cart = cart.filter(item => item.id !== animalId);
    localStorage.setItem('adoptionCart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
}

// Update cart count in navigation
function updateCartCount() {
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Load cart page
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyContainer = document.getElementById('cart-empty');
    const cartSummaryContainer = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartEmptyContainer.style.display = 'block';
        cartSummaryContainer.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        return;
    }
    
    cartEmptyContainer.style.display = 'none';
    cartSummaryContainer.style.display = 'block';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.breed}</p>
            </div>
            <div class="cart-item-price">$${item.price}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
    
    // Update summary
    const totalAnimals = cart.length;
    const totalFees = cart.reduce((sum, item) => sum + item.price, 0);
    
    document.getElementById('total-animals').textContent = totalAnimals;
    document.getElementById('total-fees').textContent = `$${totalFees}`;
    document.getElementById('grand-total').textContent = `$${totalFees}`;
}

// Proceed to adoption
function proceedToAdoption() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const animalNames = cart.map(item => item.name).join(', ');
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
    
    const confirmed = confirm(`Are you ready to proceed with adopting ${animalNames} for a total of $${totalCost}?\n\nThis will redirect you to our adoption application process.`);
    
    if (confirmed) {
        alert('Thank you for your interest in adoption! In a real application, this would redirect to an adoption application form. For this demo, we\'ll clear your cart.');
        cart = [];
        localStorage.setItem('adoptionCart', JSON.stringify(cart));
        updateCartCount();
        loadCart();
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // In a real application, this would send the data to a server
    alert(`Thank you for your message, ${name}! We'll get back to you at ${email} as soon as possible.`);
    
    // Reset form
    e.target.reset();
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Close mobile menu when clicking on a link
document.addEventListener('click', function(e) {
    if (e.target.matches('.nav-link') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = '/placeholder.svg?height=250&width=300';
        });
    });
});
