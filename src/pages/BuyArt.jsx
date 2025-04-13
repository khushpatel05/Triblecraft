import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const BuyArt = () => {
  const { artId } = useParams();
  const navigate = useNavigate();
  const [art, setArt] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  useEffect(() => {
    const savedArts = JSON.parse(localStorage.getItem('userArts')) || [];
    const selectedArt = savedArts.find(art => art.id === parseInt(artId));
    
    if (selectedArt) {
      setArt(selectedArt);
      setCurrentLanguage(selectedArt.language || 'English');
    } else {
      navigate('/own-art');
    }
  }, [artId, navigate]);

  if (!art) {
    return <div className="max-w-7xl mx-auto p-6">Loading...</div>;
  }

  const handleImageClick = (index) => {
    setMainImage(index);
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button 
        onClick={() => navigate('/own-art')}
        className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Back to Your Art Collection
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Images */}
        <div className="md:w-1/2">
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={art.images[mainImage]} 
              alt={art.artName[currentLanguage] || 'Artwork'} 
              className="w-full h-auto max-h-[500px] object-contain"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/500?text=Image+Not+Available';
              }}
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {art.images.map((image, index) => (
              <div 
                key={index}
                onClick={() => handleImageClick(index)}
                className={`cursor-pointer border-2 rounded-lg overflow-hidden ${
                  mainImage === index ? 'border-indigo-500' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-24 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/100?text=Image+Not+Available';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Details */}
        <div className="md:w-1/2">
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              {['English', 'Hindi', 'Tibetan', 'Gujarati'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    currentLanguage === lang 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {art.artName[currentLanguage] || 'Untitled Art'}
            </h1>
            <p className="text-2xl font-bold text-indigo-600 mb-6">₹{art.price || '0'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {art.descriptions[currentLanguage] || 'No description available'}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Details</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {art.productDetails[currentLanguage] || 'No product details available'}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Purchase Options</h2>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyArt;