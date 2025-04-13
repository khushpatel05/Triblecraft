import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Trash2 } from 'lucide-react';

function AddToCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = React.useState(location.state?.cart || []);

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-32 w-32 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-lg font-bold text-indigo-600">₹{item.price}</p>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">By {item.artist}</p>
                        <div className="flex items-center mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-4">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-5 w-5 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                    <span className="font-medium">₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">₹{(totalAmount * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">
                        ₹{(totalAmount * 1.18).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full mt-6">
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => navigate('/products')}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddToCart;