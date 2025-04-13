import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Star, Award, Clock, MapPin, Mail, ChevronLeft, X } from 'lucide-react';

function ArtistProfile() {
  const { id } = useParams();
  const [selectedWork, setSelectedWork] = useState(null);

  // Artist data with static reviews
  const artist = {
    id: 1,
    name: 'Rajesh Kumar',
    specialty: 'Traditional Paintings',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=387&auto=format&fit=crop',
    description: 'Master artisan specializing in traditional Madhubani and Warli paintings with over 15 years of experience. Each piece is handcrafted using traditional techniques passed down through generations.',
    rating: 4.8,
    reviewsCount: 124,
    location: 'Bihar, India',
    experience: '15+ years',
    specializations: ['Madhubani', 'Warli', 'Folk Art', 'Traditional Paintings'],
    portfolio: [
      {
        id: 1,
        title: 'Traditional Warli Art',
        image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1974&auto=format&fit=crop',
        price: 2499,
        description: 'This Warli painting depicts traditional village life with intricate patterns and earthy tones.'
      },
      {
        id: 2,
        title: 'Madhubani Painting',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=445&auto=format&fit=crop',
        price: 3499,
        description: 'Vibrant Madhubani artwork featuring mythological themes and nature motifs.'
      },
      {
        id: 3,
        title: 'Folk Art Piece',
        image: 'https://images.unsplash.com/photo-1582738410212-d6f06c1f8d64?q=80&w=387&auto=format&fit=crop',
        price: 2999,
        description: 'Contemporary folk art blending traditional techniques with modern themes.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Priya Sharma',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Absolutely stunning artwork! The attention to detail is incredible. Rajesh was wonderful to work with and delivered my custom piece exactly as promised.',
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop'
      },
      {
        id: 2,
        user: 'Amit Patel',
        rating: 4,
        date: '1 month ago',
        comment: 'Beautiful traditional painting that perfectly captures the essence of our culture. The colors are vibrant and the quality is excellent.',
        userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop'
      }
    ]
  };

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Artists
        </Button>
      </div>

      {/* Artist Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={artist.image}
                alt={artist.name}
                className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">{artist.name}</h1>
                <p className="text-xl text-gray-600 mt-1">{artist.specialty}</p>
                <div className="mt-3 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-medium">{artist.rating}</span>
                    <span className="mx-2 text-gray-400">·</span>
                    <span className="text-gray-600">{artist.reviewsCount} reviews</span>
                  </div>
                  <span className="mx-2 text-gray-400 hidden sm:inline">·</span>
                  <div className="hidden sm:flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                    <span className="text-gray-600">{artist.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Artist</h2>
            <p className="text-gray-600 mb-6">{artist.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Specialization</p>
                  <p className="font-medium">{artist.specialty}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium">{artist.experience}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{artist.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">Send Message</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {artist.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
              <Button variant="ghost" className="text-indigo-600">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artist.portfolio.map((work) => (
                <div 
                  key={work.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="object-cover w-full h-full group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900">{work.title}</h3>
                    <p className="text-indigo-600 font-semibold">₹{work.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Reviews Section */}
        <div className="space-y-6">
          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 font-medium">{artist.rating}</span>
                <span className="mx-1 text-gray-400">·</span>
                <span className="text-gray-600">{artist.reviewsCount} reviews</span>
              </div>
            </div>

            <div className="space-y-6">
              {artist.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <img
                      src={review.userImage}
                      alt={review.user}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{review.user}</h3>
                          <div className="flex items-center mt-1">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6">
              View All Reviews
            </Button>
          </div>
        </div>
      </div>

      {/* Work Detail Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedWork.title}</h2>
                  <p className="text-indigo-600 text-xl font-semibold mt-1">₹{selectedWork.price}</p>
                </div>
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 mb-6">{selectedWork.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Artist</h3>
                      <div className="flex items-center">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="h-10 w-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium">{artist.name}</p>
                          <p className="text-sm text-gray-500">{artist.specialty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtistProfile;