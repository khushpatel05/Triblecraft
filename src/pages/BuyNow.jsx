import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

function BuyNow() {
  const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate();

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

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 p-6">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <p className="text-lg text-indigo-600 mb-4">By {product.artist}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-indigo-600">₹{product.price}</span>
                    {!product.inStock && (
                      <span className="ml-2 text-sm text-red-500">(Out of Stock)</span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Description</h2>
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Category</h2>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Button className="w-full" size="lg" disabled={!product.inStock}>
                    {product.inStock ? 'Proceed to Checkout' : 'Out of Stock'}
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" onClick={() => navigate('/products')}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Free shipping on all orders over ₹5000</li>
                <li>• Estimated delivery: 3-5 business days</li>
                <li>• Ships from: New Delhi, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Return Policy</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 30-day return policy</li>
                <li>• Items must be in original condition</li>
                <li>• Contact us for return authorization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;