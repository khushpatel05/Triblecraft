import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';

const categories = ["All", "Paintings", "Sculptures", "Jewelry", "Textiles", "Pottery"];
const priceRanges = ["All", "Under $50", "$50-$100", "$100-$500", "Over $500"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Latest"];

const products = [
  {
    id: 1,
    name: "Traditional Warli Painting",
    artist: "Rajesh Kumar",
    price: 299,
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1974&auto=format&fit=crop",
    category: "Paintings"
  },
  {
    id: 2,
    name: "Tribal Bronze Sculpture",
    artist: "Maya Devi",
    price: 599,
    image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=387&auto=format&fit=crop",
    category: "Sculptures"
  },
  {
    id: 3,
    name: "Handcrafted Silver Necklace",
    artist: "Priya Singh",
    price: 149,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=390&auto=format&fit=crop",
    category: "Jewelry"
  },
  {
    id: 4,
    name: "Traditional Weave Textile",
    artist: "Amrita Shah",
    price: 199,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=387&auto=format&fit=crop",
    category: "Textiles"
  },
  // Add more products as needed
];

function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search artworks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button>View Details</Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">by {product.artist}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                  <Button variant="outline" size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketplacePage;