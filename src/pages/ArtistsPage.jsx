import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Palette, Brush, Scissors, Gem } from 'lucide-react';

const artistCategories = [
  {
    id: 'painters',
    title: 'Painters',
    icon: Brush,
    artists: [
      {
        id: 1,
        name: 'Rajesh Kumar',
        specialty: 'Traditional Paintings',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=387&auto=format&fit=crop',
        description: 'Specializing in traditional Madhubani and Warli paintings',
        experience: '15+ years',
        location: 'Bihar, India'
      },
      {
        id: 2,
        name: 'Amrita Devi',
        specialty: 'Folk Art',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=387&auto=format&fit=crop',
        description: 'Expert in Gond and Pattachitra art forms',
        experience: '12+ years',
        location: 'Odisha, India'
      },
      {
        id: 6,
        name: 'Sanjay Patel',
        specialty: 'Miniature Paintings',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Specializing in Rajasthani miniature art',
        experience: '8+ years',
        location: 'Rajasthan, India'
      }
    ]
  },
  {
    id: 'sculptors',
    title: 'Sculptors',
    icon: Palette,
    artists: [
      {
        id: 3,
        name: 'Mohammad Hussain',
        specialty: 'Bronze Sculptures',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=387&auto=format&fit=crop',
        description: 'Master craftsman in Dhokra art',
        experience: '20+ years',
        location: 'West Bengal, India'
      },
      {
        id: 7,
        name: 'Arun Sharma',
        specialty: 'Stone Carving',
        image: 'https://images.unsplash.com/photo-1629033319717-357446bf7db3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Expert in traditional stone sculptures',
        experience: '14+ years',
        location: 'Tamil Nadu, India'
      },
      {
        id: 8,
        name: 'Meena Kumari',
        specialty: 'Wood Carving',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Specializing in intricate wood carvings',
        experience: '9+ years',
        location: 'Karnataka, India'
      }
    ]
  },
  {
    id: 'textile',
    title: 'Textile Artists',
    icon: Scissors,
    artists: [
      {
        id: 4,
        name: 'Lakshmi Rao',
        specialty: 'Handloom Weaving',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=387&auto=format&fit=crop',
        description: 'Expert in traditional Ikat weaving',
        experience: '18+ years',
        location: 'Telangana, India'
      },
      {
        id: 9,
        name: 'Radha Iyer',
        specialty: 'Block Printing',
        image: 'https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Master of traditional block printing techniques',
        experience: '11+ years',
        location: 'Gujarat, India'
      },
      {
        id: 10,
        name: 'Sunita Choudhary',
        specialty: 'Embroidery',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Specializing in Phulkari and Chikankari work',
        experience: '7+ years',
        location: 'Punjab, India'
      }
    ]
  },
  {
    id: 'jewelry',
    title: 'Jewelry Makers',
    icon: Gem,
    artists: [
      {
        id: 5,
        name: 'Priya Singh',
        specialty: 'Tribal Jewelry',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=387&auto=format&fit=crop',
        description: 'Specializing in traditional tribal silver jewelry',
        experience: '10+ years',
        location: 'Rajasthan, India'
      },
      {
        id: 11,
        name: 'Vikram Joshi',
        specialty: 'Gemstone Jewelry',
        image: 'https://images.unsplash.com/photo-1653856942271-32c442c5022c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Expert in traditional gemstone settings',
        experience: '16+ years',
        location: 'Jaipur, India'
      },
      {
        id: 12,
        name: 'Anjali Mehta',
        specialty: 'Beadwork',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Master of traditional bead weaving techniques',
        experience: '5+ years',
        location: 'Delhi, India'
      }
    ]
  }
];

function ArtistsPage() {
  const navigate = useNavigate();

  const handleCustomizeArt = (artist) => {
    navigate(`/customize-art/${artist.id}`, { state: { artistData: artist } });
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Artisan Community</h1>
        
        {artistCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <div className="flex items-center mb-6">
              <category.icon className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.artists.map((artist) => (
                <div key={artist.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                      <p className="text-gray-200">{artist.specialty}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">{artist.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{artist.experience}</span>
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Link to={`/artists/${artist.id}`} className="flex-1">
                        <Button className="w-full">View Profile</Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full flex-1"
                        onClick={() => handleCustomizeArt(artist)}
                      >
                        Customize Art
                      </Button>
                    </div>
                  </div>
                </div>
              ))}   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistsPage;