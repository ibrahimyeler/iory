'use client';

import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

const categories = [
  "Günlük Elbiseler",
  "Abiye Elbiseler", 
  "Mini Elbiseler",
  "Midi Elbiseler",
  "Maksi Elbiseler"
];

const colors = [
  "Siyah", "Beyaz", "Kırmızı", "Mavi", "Yeşil", "Sarı", "Pembe", "Mor"
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ElbiselerFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
            >
              <span>Filtreler</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Active Filters */}
            <div className="flex items-center space-x-2">
              {selectedCategories.map(category => (
                <span key={category} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-sm flex items-center">
                  {category}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="ml-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button className="text-pink-600 hover:text-pink-700 text-sm">
            Filtreleri Temizle
          </button>
        </div>

        {/* Filter Panel */}
        {isOpen && (
          <div className="border-t border-gray-100 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Kategoriler</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Renkler</h3>
                <div className="grid grid-cols-2 gap-2">
                  {colors.map(color => (
                    <label key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleColor(color)}
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Bedenler</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 rounded border text-sm ${
                        selectedSizes.includes(size)
                          ? 'bg-pink-600 text-white border-pink-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Fiyat Aralığı</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">₺{priceRange[0]}</span>
                    <span className="text-sm text-gray-600">-</span>
                    <span className="text-sm text-gray-600">₺{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 