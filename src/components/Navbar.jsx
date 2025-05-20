import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Bell, Mail, Flag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex flex-col flex-shrink-0">
            <Link to="/" className="text-white font-bold text-2xl hover:text-gray-300 transition">
              StyleHive
            </Link>
          </div>

          <div className="flex-grow mx-4 relative max-w-xl">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition placeholder-gray-500"
            />
          </div>

          <div className="flex items-center space-x-5 flex-shrink-0">
            <Link to="/inbox" className="text-gray-400 hover:text-white transition relative group">
              <Mail className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Link>
            <Link to="/notifications" className="text-gray-400 hover:text-white transition relative group">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </Link>
            <Link to="/cart" className="text-gray-400 hover:text-white transition relative group">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </Link>

            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition cursor-pointer">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-sm text-gray-200 font-medium hidden lg:inline">Hi, Rezvan</span>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-400 hover:text-white transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="text-white font-bold text-xl hover:text-gray-300 transition">
            StyleHive
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-400 hover:text-white transition relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 mt-4 rounded-lg p-4 animate-fadeIn">
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition placeholder-gray-500"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <Link 
                to="/inbox" 
                className="flex items-center text-gray-400 hover:text-white transition py-2 px-3 rounded hover:bg-gray-800"
              >
                <Mail className="w-5 h-5 mr-3" />
                Inbox
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
              </Link>
              
              <Link 
                to="/notifications" 
                className="flex items-center text-gray-400 hover:text-white transition py-2 px-3 rounded hover:bg-gray-800"
              >
                <Bell className="w-5 h-5 mr-3" />
                Notifikasi
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">5</span>
              </Link>
              
              <div className="flex items-center text-gray-200 py-2 px-3 rounded hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                Akun Saya
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;