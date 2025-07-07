'use client';

import { useState } from 'react';
import { Star, Heart, Share2, Truck, RefreshCw, Shield } from 'lucide-react';

const urunBilgileri = {
  name: "Zarif Çiçekli Mini Elbise",
  price: "₺899",
  originalPrice: "₺1299",
  discount: 30,
  rating: 4.8,
  reviews: 124,
  description: "Modern ve şık tasarımıyla günlük kullanıma uygun çiçekli mini elbise. Rahat kesimi ve kaliteli kumaşı ile her ortamda şıklığınızı tamamlayacak.",
  colors: [
    { name: "Pembe", code: "#ec4899" },
    { name: "Mavi", code: "#3b82f6" },
    { name: "Beyaz", code: "#ffffff" }
  ],
  sizes: ["XS", "S", "M", "L"],
  features: [
    "Çiçekli desen",
    "Mini boy",
    "Rahat kesim",
    "Kaliteli kumaş",
    "Günlük kullanım"
  ]
};

export default function UrunDetayInfo() {
  const [selectedColor, setSelectedColor] = useState(urunBilgileri.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6">
      {/* Product Title and Rating */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {urunBilgileri.name}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(urunBilgileri.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {urunBilgileri.rating} ({urunBilgileri.reviews} değerlendirme)
            </span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-gray-900">
          {urunBilgileri.price}
        </span>
        <span className="text-lg text-gray-500 line-through">
          {urunBilgileri.originalPrice}
        </span>
        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
          %{urunBilgileri.discount} İndirim
        </span>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-700 leading-relaxed">
          {urunBilgileri.description}
        </p>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Renk: {selectedColor.name}</h3>
        <div className="flex space-x-3">
          {urunBilgileri.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-colors ${
                selectedColor.name === color.name ? 'border-pink-500' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.code }}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Beden</h3>
        <div className="flex space-x-2">
          {urunBilgileri.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                selectedSize === size
                  ? 'bg-pink-600 text-white border-pink-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Adet</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
          Sepete Ekle
        </button>
        <div className="flex space-x-3">
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Favorilere Ekle</span>
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <Share2 className="h-5 w-5" />
            <span>Paylaş</span>
          </button>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Özellikler</h3>
        <ul className="space-y-2">
          {urunBilgileri.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-700">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Shipping Info */}
      <div className="border-t border-gray-200 pt-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Truck className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-700">Ücretsiz kargo (₺150+ alışveriş)</span>
          </div>
          <div className="flex items-center space-x-3">
            <RefreshCw className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-700">30 gün iade garantisi</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-700">Güvenli ödeme</span>
          </div>
        </div>
      </div>
    </div>
  );
} 