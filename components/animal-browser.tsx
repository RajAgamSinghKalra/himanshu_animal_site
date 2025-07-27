"use client"

import { useState } from "react"

interface Animal {
  id: number
  name: string
  type: string
  breed: string
  age: string
  size: string
  gender: string
  price: number
  image: string
  description: string
  vaccinated: boolean
  spayed: boolean
  location: string
}

const animals: Animal[] = [
  {
    id: 1,
    name: "Buddy",
    type: "dog",
    breed: "Golden Retriever",
    age: "adult",
    size: "large",
    gender: "Male",
    price: 250,
    image: "/placeholder.svg?height=250&width=300&text=Golden+Retriever",
    description:
      "Buddy is a friendly and energetic Golden Retriever who loves playing fetch and swimming. He's great with kids and other dogs.",
    vaccinated: true,
    spayed: true,
    location: "Main Shelter",
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
    image: "/placeholder.svg?height=250&width=300&text=Siamese+Cat",
    description:
      "Luna is a beautiful Siamese cat with striking blue eyes. She's calm, affectionate, and loves to curl up in sunny spots.",
    vaccinated: true,
    spayed: true,
    location: "Foster Home",
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
    image: "/placeholder.svg?height=250&width=300&text=German+Shepherd",
    description:
      "Max is a loyal and intelligent German Shepherd. He's well-trained and would make an excellent guard dog and family companion.",
    vaccinated: true,
    spayed: true,
    location: "Main Shelter",
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
    image: "/placeholder.svg?height=250&width=300&text=Maine+Coon",
    description:
      "Whiskers is a gentle giant Maine Coon who loves attention and quiet companionship. Perfect for a calm household.",
    vaccinated: true,
    spayed: true,
    location: "Main Shelter",
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
    image: "/placeholder.svg?height=250&width=300&text=Labrador+Mix",
    description:
      "Bella is a playful Labrador mix puppy who's full of energy and love. She's learning basic commands and loves treats!",
    vaccinated: true,
    spayed: false,
    location: "Foster Home",
  },
  {
    id: 6,
    name: "Charlie",
    type: "rabbit",
    breed: "Holland Lop",
    age: "young",
    size: "small",
    gender: "Male",
    price: 75,
    image: "/placeholder.svg?height=250&width=300&text=Holland+Lop+Rabbit",
    description:
      "Charlie is a sweet Holland Lop rabbit with adorable floppy ears. He's litter trained and loves fresh vegetables.",
    vaccinated: true,
    spayed: true,
    location: "Small Animal Room",
  },
]

export default function AnimalBrowser() {
  const [cart, setCart] = useState<Animal[]>([])
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    size: "",
  })

  const filteredAnimals = animals.filter((animal) => {
    return (
      (!filters.type || animal.type === filters.type) &&
      (!filters.age || animal.age === filters.age) &&
      (!filters.size || animal.size === filters.size)
    )
  })

  const addToCart = (animal: Animal) => {
    if (!cart.find((item) => item.id === animal.id)) {
      setCart([...cart, animal])
      alert(`${animal.name} has been added to your adoption cart!`)
    } else {
      alert(`${animal.name} is already in your cart!`)
    }
  }

  const removeFromCart = (animalId: number) => {
    setCart(cart.filter((item) => item.id !== animalId))
  }

  const getTotalCost = () => {
    return cart.reduce((sum, animal) => sum + animal.price, 0)
  }

  if (selectedAnimal) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => setSelectedAnimal(null)}
            className="mb-6 text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Back to Animals
          </button>

          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-lg">
            <div>
              <img
                src={selectedAnimal.image || "/placeholder.svg"}
                alt={selectedAnimal.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">{selectedAnimal.name}</h1>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Breed:</span>
                  <span className="text-gray-800">{selectedAnimal.breed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Age:</span>
                  <span className="text-gray-800">{selectedAnimal.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Size:</span>
                  <span className="text-gray-800">{selectedAnimal.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Gender:</span>
                  <span className="text-gray-800">{selectedAnimal.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Vaccinated:</span>
                  <span className="text-gray-800">{selectedAnimal.vaccinated ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Spayed/Neutered:</span>
                  <span className="text-gray-800">{selectedAnimal.spayed ? "Yes" : "No"}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedAnimal.description}</p>

              <div className="text-3xl font-bold text-orange-500 mb-6">${selectedAnimal.price}</div>

              <button
                onClick={() => addToCart(selectedAnimal)}
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-xl hover:bg-orange-600 transition-colors font-medium text-lg"
              >
                Add to Adoption Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Companion</h1>
          <p className="text-xl opacity-90">Browse our available animals and find your new best friend</p>
        </div>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                Cart: {cart.length} animal{cart.length !== 1 ? "s" : ""} - Total: ${getTotalCost()}
              </span>
              <button className="text-orange-500 hover:text-orange-600 font-medium">View Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="px-4 py-2 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Animals</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
              <option value="rabbit">Rabbits</option>
              <option value="bird">Birds</option>
            </select>

            <select
              value={filters.age}
              onChange={(e) => setFilters({ ...filters, age: e.target.value })}
              className="px-4 py-2 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Ages</option>
              <option value="young">Young (0-2 years)</option>
              <option value="adult">Adult (2-7 years)</option>
              <option value="senior">Senior (7+ years)</option>
            </select>

            <select
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              className="px-4 py-2 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none"
            >
              <option value="">All Sizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>

      {/* Animals Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {filteredAnimals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No animals found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <div
                key={animal.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all"
              >
                <img src={animal.image || "/placeholder.svg"} alt={animal.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{animal.name}</h3>
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span>{animal.breed}</span>
                    <span>{animal.age}</span>
                    <span>{animal.gender}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{animal.description.substring(0, 100)}...</p>
                  <div className="text-2xl font-bold text-orange-500 mb-4">${animal.price}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedAnimal(animal)}
                      className="flex-1 border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => addToCart(animal)}
                      className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Modal/Section */}
      {cart.length > 0 && (
        <div className="bg-white border-t shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Adoption Cart</h3>
            <div className="space-y-4 mb-6">
              {cart.map((animal) => (
                <div key={animal.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <img
                    src={animal.image || "/placeholder.svg"}
                    alt={animal.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{animal.name}</h4>
                    <p className="text-gray-600">{animal.breed}</p>
                  </div>
                  <div className="text-xl font-bold text-orange-500">${animal.price}</div>
                  <button
                    onClick={() => removeFromCart(animal.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-800">Total: ${getTotalCost()}</div>
              <button
                onClick={() => {
                  const animalNames = cart.map((a) => a.name).join(", ")
                  const confirmed = confirm(`Ready to adopt ${animalNames} for $${getTotalCost()}?`)
                  if (confirmed) {
                    alert("Thank you for your adoption! We'll contact you soon.")
                    setCart([])
                  }
                }}
                className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors font-medium"
              >
                Proceed to Adoption
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
