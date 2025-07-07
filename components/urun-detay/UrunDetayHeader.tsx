'use client';

import { ArrowLeft, Heart, Share2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function UrunDetayHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Back Button */}
          <Link href="/elbiseler" className="p-2 text-gray-700 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </Link>

          {/* Title */}
          <h1 className="text-lg font-semibold text-gray-900">Ürün Detayı</h1>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 