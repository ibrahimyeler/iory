'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  "👗",
  "👗",
  "👗", 
  "👗"
];

export default function UrunDetayGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative aspect-[4/5] bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-8xl">{images[currentImage]}</div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Zoom Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <ZoomIn className="h-5 w-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
              index === currentImage ? 'border-pink-500' : 'border-gray-200'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
              <div className="text-2xl">{image}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 