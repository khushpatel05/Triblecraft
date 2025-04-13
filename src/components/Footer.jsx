import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Palette } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-2xl font-bold">CraftCanvas</span>
            </div>
            <p className="text-gray-400">Connecting artisans with art lovers worldwide</p>
            <div className="flex space-x-4 mt-6">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Marketplace", "Artists", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Paintings", "Sculptures", "Jewelry", "Textiles", "Pottery"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">support@craftcanvas.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">123 Craft Street, Artisan City, AC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">© 2025 CraftCanvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;