import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

const OwnArt = () => {
  const [userArts, setUserArts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedArts = JSON.parse(localStorage.getItem('userArts')) || [];
    setUserArts(savedArts);
  }, []);

  const handleDeleteArt = (id) => {
    const updatedArts = userArts.filter(art => art.id !== id);
    setUserArts(updatedArts);
    localStorage.setItem('userArts', JSON.stringify(updatedArts));
  };

  const handleBuyNow = (artId) => {
    navigate(`/buy-art/${artId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">Your Art Collection</h1>
        <Link 
          to="/addyourart" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Add New Art
        </Link>
      </div>

      {userArts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 mb-4">You haven't added any art yet</h2>
          <Link 
            to="/add-your-art" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Add Your First Artwork
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userArts.map((art) => (
            <ArtCard 
              key={art.id} 
              art={art} 
              onDelete={() => handleDeleteArt(art.id)}
              onBuyNow={() => handleBuyNow(art.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ArtCard = ({ art, onDelete, onBuyNow }) => {
  const mainImage = art.images?.[0];
  const currentLanguage = art.language || 'English';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 z-10 transition-colors"
        aria-label="Delete artwork"
      >
        <FiX size={16} />
      </button>

      {mainImage && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={mainImage} 
            alt={art.artName?.[currentLanguage] || 'Artwork'} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
            }}
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {art.artName?.[currentLanguage] || 'Untitled Art'}
        </h3>
        <p className="text-gray-600 mb-2 line-clamp-2">
          {art.descriptions?.[currentLanguage] || 'No description available'}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-indigo-600">₹{art.price || '0'}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onBuyNow();
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnArt;