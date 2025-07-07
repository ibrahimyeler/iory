'use client';

import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">iory</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#new" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Yeni Gelenler
            </a>
            <a href="/elbiseler" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Elbiseler
            </a>
            <a href="#tops" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Üst Giyim
            </a>
            <a href="#bottoms" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Alt Giyim
            </a>
            <a href="#accessories" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Aksesuar
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#new" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Yeni Gelenler
              </a>
              <a href="/elbiseler" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Elbiseler
              </a>
              <a href="#tops" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Üst Giyim
              </a>
              <a href="#bottoms" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Alt Giyim
              </a>
              <a href="#accessories" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Aksesuar
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 