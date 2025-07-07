'use client';

import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ElbiselerHeader() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Back Button and Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="p-2 text-gray-700 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Elbiseler</h1>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              <List className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 