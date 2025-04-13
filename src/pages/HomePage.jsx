import React from 'react';
import { Slider } from '../components/ui/slider';
import { Button } from '../components/ui/button';

function HomePage() {
  return (
    <div>
      <Slider />

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Paintings",
                image: "https://indiachalk.com/wp-content/uploads/2021/11/Untitled-design-85.jpg",
                description: "Traditional tribal art paintings"
              },
              {
                title: "Sculptures",
                image: "https://www.shutterstock.com/image-vector/mask-totem-poles-hawaii-tiki-600nw-2187391557.jpg",
                description: "Handcrafted tribal sculptures"
              },
              {
                title: "Jewelry",
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=390&auto=format&fit=crop",
                description: "Authentic tribal jewelry"
              },
              {
                title: "Textiles",
                image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=387&auto=format&fit=crop",
                description: "Traditional textile crafts"
              }
            ].map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-200 mt-2">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                specialty: "Traditional Paintings",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=387&auto=format&fit=crop"
              },
              {
                name: "Amrita Devi",
                specialty: "Pottery & Sculptures",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=387&auto=format&fit=crop"
              },
              {
                name: "Mohammad Hussain",
                specialty: "Textile Arts",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=387&auto=format&fit=crop"
              }
            ].map((artist, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{artist.name}</h3>
                  <p className="text-gray-600 mt-2">{artist.specialty}</p>
                  <Button className="mt-4" variant="outline">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Preserving Cultural Heritage</h2>
              <p className="text-gray-600 mb-8">
                We're dedicated to preserving and promoting traditional tribal arts and crafts. Each piece tells a unique story of cultural heritage, passed down through generations of skilled artisans.
              </p>
              <ul className="space-y-4">
                {[
                  "Supporting local artisan communities",
                  "Documenting traditional techniques",
                  "Promoting sustainable practices",
                  "Ensuring fair trade principles"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-8">Learn More</Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=387&auto=format&fit=crop"
                alt="Cultural Heritage"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-indigo-600">500+</p>
                <p className="text-gray-600">Artisans Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;