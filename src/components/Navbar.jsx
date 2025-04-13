import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <Link to="/" className="flex items-center">
            <Palette className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">TribleCraft</span>
          </Link>

          {/* Center - Navigation Links */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex space-x-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/products">
                <Button variant="ghost">Products</Button>
              </Link>
              <Link to="/artists">
                <Button variant="ghost">Artists</Button>
              </Link>
              <Link to="/learn">
                <Button variant="ghost">Learn</Button>
              </Link>
              <Link to="/addyourart">
                <Button variant="ghost">AddYourArt</Button>
              </Link>
              <Link to="/own-art">
                <Button variant="ghost">OwnArt</Button>
              </Link>
            </div>
          </div>

          {/* Right side - Auth + Cart */}
          <div className="flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline">Register</Button>
          </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;