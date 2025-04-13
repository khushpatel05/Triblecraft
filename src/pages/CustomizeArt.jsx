import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

function CustomizeArt() {
  const location = useLocation();
  const navigate = useNavigate();
  const { artistData } = location.state || {};

  if (!artistData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Artist Not Found</h1>
        <Button onClick={() => navigate('/artists')}>Back to Artists</Button>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={artistData.image}
                  alt={artistData.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h2 className="text-xl font-bold mt-4">{artistData.name}</h2>
                <p className="text-indigo-600">{artistData.specialty}</p>
                <p className="text-gray-500 mt-2">{artistData.location}</p>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-2xl font-bold mb-6">Customize Your Artwork</h1>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Art Type</h3>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                      <option>Select art type</option>
                      <option>Painting</option>
                      <option>Sculpture</option>
                      <option>Textile</option>
                      <option>Jewelry</option>
                    </select>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Size/Dimensions</h3>
                    <input 
                      type="text" 
                      placeholder="Enter dimensions" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Materials</h3>
                    <input 
                      type="text" 
                      placeholder="Specify materials" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Special Requests</h3>
                    <textarea 
                      placeholder="Describe your customization needs"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 h-24"
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="flex-1">Submit Request</Button>
                    <Button variant="outline" className="flex-1" onClick={() => navigate(-1)}>
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeArt;