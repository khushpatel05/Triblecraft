import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '../components/ui/button';

const categories = [
  { name: "All Products", count: 28 },
  { name: "Traditional Paintings", count: 7 },
  { name: "Tribal Sculptures", count: 6 },
  { name: "Handcrafted Jewelry", count: 5 },
  { name: "Woven Textiles", count: 5 },
  { name: "Pottery", count: 5 }
];

const products = [
  {
        id: 1,
        name: "Madhubani Folk Painting",
        description: "Traditional hand-painted artwork depicting rural life scenes",
        price: 2499,
        image: "https://www.shutterstock.com/image-vector/traditional-madhubani-painting-radha-krishna-260nw-1694230435.jpg",
        category: "Traditional Paintings",
        rating: 4.8,
        reviews: 24,
        artist: "Rajesh Kumar",
        inStock: true
      },
      {
        id: 2,
        name: "Warli Art Painting",
        description: "Tribal art form using basic geometric shapes",
        price: 1899,
        image: "https://www.shutterstock.com/image-vector/warli-painting-hand-drawn-traditional-260nw-427133161.jpg",
        category: "Traditional Paintings",
        rating: 4.6,
        reviews: 18,
        artist: "Sunita Patil",
        inStock: true
      },
      {
        id: 3,
        name: "Tanjore Painting",
        description: "Classic South Indian art with gold foil work",
        price: 5999,
        image: "https://i.pinimg.com/736x/45/f1/e1/45f1e1a2db92c9c56a41f03fc307aeb9.jpg",
        category: "Traditional Paintings",
        rating: 4.9,
        reviews: 32,
        artist: "Karthik Srinivasan",
        inStock: true
      },
      {
        id: 4,
        name: "Pattachitra Painting",
        description: "Traditional cloth-based scroll painting from Odisha",
        price: 3499,
        image: "https://www.craftsodisha.com/wp-content/uploads/2020/01/p00838-105852Ap00838-105810-yagya-narayan-pattachitra-tasar-painting.jpg",
        category: "Traditional Paintings",
        rating: 4.7,
        reviews: 15,
        artist: "Priyanka Mohanty",
        inStock: true
      },
      {
        id: 5,
        name: "Kalamkari Painting",
        description: "Hand-painted cotton textile with natural dyes",
        price: 2799,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFFakV5azQqhnMLDJM87OPJhOgiRd2E5Qew&s",
        category: "Traditional Paintings",
        rating: 4.5,
        reviews: 21,
        artist: "Ramesh Reddy",
        inStock: false
      },
      {
        id: 6,
        name: "Miniature Painting",
        description: "Intricate Rajasthani miniature artwork",
        price: 4599,
        image: "https://i.pinimg.com/236x/15/16/b0/1516b014feafe479568924d821b284b5.jpg",
        category: "Traditional Paintings",
        rating: 4.8,
        reviews: 19,
        artist: "Meena Sharma",
        inStock: true
      },
      {
        id: 7,
        name: "Gond Painting",
        description: "Tribal art from Madhya Pradesh with vibrant colors",
        price: 1999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaGkYZj2ZbiZABbn4rf6JBYjgDE1jSrUpMQ&s",
        category: "Traditional Paintings",
        rating: 4.4,
        reviews: 12,
        artist: "Durga Bai",
        inStock: true
      },
    
      // Tribal Sculptures
      {
        id: 8,
        name: "Dhokra Bronze Sculpture",
        description: "Ancient lost-wax casting technique tribal artwork",
        price: 4999,
        image: "https://www.sowpeace.in/cdn/shop/articles/what-is-dokra-art-and-why-it-is-so-precious-742786.jpg?v=1736197967&width=360",
        category: "Tribal Sculptures",
        rating: 4.9,
        reviews: 18,
        artist: "Maya Devi",
        inStock: true
      },
      {
        id: 9,
        name: "Bastar Iron Sculpture",
        description: "Hand-forged tribal iron craft from Chhattisgarh",
        price: 3599,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAt6BWvMSV6VEHEzJ3aPBmZJS97pya3E4uKA&s",
        category: "Tribal Sculptures",
        rating: 4.7,
        reviews: 14,
        artist: "Raju Verma",
        inStock: true
      },
      {
        id: 10,
        name: "Wooden Tribal Mask",
        description: "Ritual mask carved from single piece of wood",
        price: 2899,
        image: "https://www.kazeemthetombraider.com/wp-content/uploads/2015/04/light-brown-african-artifact-mask.jpg",
        category: "Tribal Sculptures",
        rating: 4.5,
        reviews: 9,
        artist: "Arjun Nag",
        inStock: true
      },
      {
        id: 11,
        name: "Terracotta Horse",
        description: "Traditional Bankura horse from West Bengal",
        price: 1799,
        image: "https://i.etsystatic.com/31693859/r/il/30d3aa/3877643088/il_570xN.3877643088_qa6v.jpg",
        category: "Tribal Sculptures",
        rating: 4.6,
        reviews: 11,
        artist: "Purnima Das",
        inStock: false
      },
      {
        id: 12,
        name: "Stone Carving Sculpture",
        description: "Hand-carved sandstone tribal deity",
        price: 6999,
        image: "https://www.artisanscrest.in/cdn/shop/products/sculpture-redstone-statue-vishwakarma-06.jpeg?v=1487659316",
        category: "Tribal Sculptures",
        rating: 4.8,
        reviews: 7,
        artist: "Gopal Meher",
        inStock: true
      },
      {
        id: 13,
        name: "Bamboo Tribal Figure",
        description: "Eco-friendly bamboo craft from Northeast",
        price: 1499,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnIjxGVfdac5D91x1owj7tzZN5x8DnzVRVA&s",
        category: "Tribal Sculptures",
        rating: 4.3,
        reviews: 5,
        artist: "Ningthoujam Singh",
        inStock: true
      },
    
      // Handcrafted Jewelry
      {
        id: 14,
        name: "Tribal Silver Necklace",
        description: "Handcrafted silver jewelry with traditional motifs",
        price: 1249,
        image: "https://siddhisilver.in/cdn/shop/files/long-silver-tribal-paan-necklace_a05e4c2b-eabd-4b76-973b-6c45ee0abc92.jpg?v=1723724995&width=1780",
        category: "Handcrafted Jewelry",
        rating: 4.7,
        reviews: 32,
        artist: "Priya Singh",
        inStock: false
      },
      {
        id: 15,
        name: "Lacquer Bangles",
        description: "Colorful traditional bangles from Rajasthan",
        price: 599,
        image: "https://kritikala.org/cdn/shop/files/Ethnicblueandpinktonedstonestuddedkadamadewithlac-LH09MR.png?v=1699440592",
        category: "Handcrafted Jewelry",
        rating: 4.4,
        reviews: 28,
        artist: "Laxmi Devi",
        inStock: true
      },
      {
        id: 16,
        name: "Beaded Tribal Earrings",
        description: "Multicolored glass bead jewelry",
        price: 899,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BUBY4igAPsjkiGCQ0MBJ87r-fQ1J-WXa0A&s",
        category: "Handcrafted Jewelry",
        rating: 4.6,
        reviews: 19,
        artist: "Rani Bai",
        inStock: true
      },
      {
        id: 17,
        name: "Oxidized Silver Anklet",
        description: "Traditional tribal foot jewelry",
        price: 1699,
        image: "https://silverpalace.in/uploads/products/img-3232386676218c46cd9b5e9.79946080.jpg",
        category: "Handcrafted Jewelry",
        rating: 4.5,
        reviews: 14,
        artist: "Meenakshi Sharma",
        inStock: true
      },
      {
        id: 18,
        name: "Bone Carved Pendant",
        description: "Eco-friendly tribal necklace",
        price: 1099,
        image: "https://ae01.alicdn.com/kf/S9b24eb8def6b460795b4bba9415373e0v.jpg_640x640q90.jpg",
        category: "Handcrafted Jewelry",
        rating: 4.3,
        reviews: 8,
        artist: "Arunachal Tribes",
        inStock: true
      },
    
      // Woven Textiles
      {
        id: 19,
        name: "Ikat Weave Textile",
        description: "Traditional hand-woven fabric with intricate patterns",
        price: 1699,
        image: "https://static.vecteezy.com/system/resources/previews/015/603/065/non_2x/ikat-ethnic-ornate-golden-fabric-seamless-pattern-on-red-background-geometric-tribal-indian-navajo-aztec-vintage-retro-style-design-for-decorate-backdrop-endless-texture-fabric-textile-vector.jpg",
        category: "Woven Textiles",
        rating: 4.6,
        reviews: 15,
        artist: "Lakshmi Rao",
        inStock: true
      },
      {
        id: 20,
        name: "Kantha Embroidery Shawl",
        description: "Hand-stitched quilted textile from Bengal",
        price: 2299,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbdbdnDTIXaTgmnW7GNNzzydN5G1r4D2gNw&s",
        category: "Woven Textiles",
        rating: 4.7,
        reviews: 22,
        artist: "Rehana Khatun",
        inStock: true
      },
      {
        id: 21,
        name: "Pashmina Wool Stole",
        description: "Luxurious handwoven Kashmiri shawl",
        price: 4999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2LckhQWQYWkLqKGjBrdb2AXN51MUpH0D_g&s",
        category: "Woven Textiles",
        rating: 4.9,
        reviews: 35,
        artist: "Abdul Karim",
        inStock: false
      },
      {
        id: 22,
        name: "Tribal Cotton Rug",
        description: "Handwoven geometric pattern floor covering",
        price: 3499,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAt6TfqyoMk7fAQ8NunamId6HCqnzwNlgLow&s",
        category: "Woven Textiles",
        rating: 4.5,
        reviews: 12,
        artist: "Bhimsen Weavers",
        inStock: true
      },
      {
        id: 23,
        name: "Silk Ikkat Saree",
        description: "Traditional handloom silk with tribal patterns",
        price: 5999,
        image: "https://singhanias.in/cdn/shop/files/490819_4.jpg?v=1729091680&width=1000",
        category: "Woven Textiles",
        rating: 4.8,
        reviews: 27,
        artist: "Radhika Patwa",
        inStock: true
      },
    
      // Pottery
      {
        id: 24,
        name: "Blue Pottery Vase",
        description: "Traditional Jaipur blue pottery",
        price: 1899,
        image: "https://5.imimg.com/data5/JR/XA/YB/SELLER-97820987/10-inch-handicraft-blue-pottery-vase.jpg",
        category: "Pottery",
        rating: 4.6,
        reviews: 17,
        artist: "Kailash Sharma",
        inStock: true
      },
      {
        id: 25,
        name: "Terracotta Water Pot",
        description: "Traditional earthenware for water storage",
        price: 999,
        image: "https://mittify.com/wp-content/uploads/2024/04/Earthen-Clay-Water-Pot-Plain-Red-with-Metal-Tap-11-Liter-1.webp",
        category: "Pottery",
        rating: 4.4,
        reviews: 9,
        artist: "Ram Dayal",
        inStock: true
      },
      {
        id: 26,
        name: "Black Clay Tea Set",
        description: "Handcrafted tribal tea cups and pot",
        price: 2499,
        image: "https://png.pngtree.com/background/20231219/original/pngtree-outdoor-lupine-alongside-a-closeup-of-black-clay-tea-set-photo-picture-image_6886340.jpg",
        category: "Pottery",
        rating: 4.7,
        reviews: 14,
        artist: "Nirmala Devi",
        inStock: false
      },
      {
        id: 27,
        name: "Tribal Decorative Plates",
        description: "Hand-painted earthenware plates",
        price: 1299,
        image: "https://dessineart.com/cdn/shop/products/Image-1-Peacock-Gond-Art-Indian-Tribal-Art.jpg?v=1701636205",
        category: "Pottery",
        rating: 4.5,
        reviews: 11,
        artist: "Suresh Kumar",
        inStock: true
      },
      {
        id: 28,
        name: "Miniature Clay Animals",
        description: "Set of tribal-inspired animal figurines",
        price: 799,
        image: "https://visi.co.za/wp-content/uploads/2017/03/MadeWithClayAndLove.jpg",
        category: "Pottery",
        rating: 4.3,
        reviews: 7,
        artist: "Children's Collective",
        inStock: true
      }
];

function ProductsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filteredProducts = products
    .filter(product => {
      if (selectedCategory !== "All Products" && product.category !== selectedCategory) return false;
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      const price = product.price;
      if (priceRange === "under-100" && price >= 1000) return false;
      if (priceRange === "100-500" && (price < 1000 || price > 5000)) return false;
      if (priceRange === "500-1000" && (price < 5000 || price > 10000)) return false;
      if (priceRange === "over-1000" && price <= 10000) return false;
      
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-${i <= rating ? 'yellow' : 'gray'}-400`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const viewCart = () => {
    navigate('/cart', { state: { cart } });
  };

  const buyNow = (product) => {
    navigate('/buy-now', { state: { product } });
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      className={`w-full text-left px-2 py-1.5 rounded-md ${
                        selectedCategory === category.name
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <span>{category.name}</span>
                      <span className="float-right text-sm text-gray-400">
                        ({category.count})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Price Range</h2>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under-100', label: 'Under ₹1000' },
                    { value: '100-500', label: '₹1000 - ₹5000' },
                    { value: '500-1000', label: '₹5000 - ₹10000' },
                    { value: 'over-1000', label: 'Over ₹10000' }
                  ].map((range) => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-600">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Sort By</h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and View Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={viewCart}
                  className="relative"
                >
                  Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Button variant="outline" size="sm" className="bg-white">
                        ♥
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                    <p className="text-sm text-indigo-600 mt-1">By {product.artist}</p>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-indigo-600">₹{product.price}</span>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {renderStars(product.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        className="flex-1"
                        disabled={!product.inStock}
                        onClick={() => buyNow(product)}
                      >
                        {product.inStock ? 'Buy Now' : 'Out of Stock'}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;