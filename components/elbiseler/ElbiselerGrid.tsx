import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';

const elbiseler = [
  {
    id: 1,
    name: "Zarif Çiçekli Mini Elbise",
    price: "₺899",
    originalPrice: "₺1299",
    image: "👗",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    discount: 30,
    category: "Mini Elbiseler",
    colors: ["Pembe", "Mavi", "Beyaz"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 2,
    name: "Şık Midi Elbise",
    price: "₺649",
    originalPrice: "₺899",
    image: "👗",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    discount: 25,
    category: "Midi Elbiseler",
    colors: ["Siyah", "Kırmızı"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Günlük Düz Elbise",
    price: "₺399",
    originalPrice: "₺599",
    image: "👗",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    discount: 33,
    category: "Düz Elbiseler",
    colors: ["Beyaz", "Siyah", "Mavi"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Abiye Maksimum Elbise",
    price: "₺1499",
    originalPrice: "₺1999",
    image: "👗",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    discount: 25,
    category: "Maksi Elbiseler",
    colors: ["Siyah", "Kırmızı", "Mavi"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 5,
    name: "Çiçekli Günlük Elbise",
    price: "₺549",
    originalPrice: "₺799",
    image: "👗",
    rating: 4.5,
    reviews: 98,
    isNew: true,
    discount: 31,
    category: "Çiçekli Elbiseler",
    colors: ["Pembe", "Mavi", "Yeşil"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 6,
    name: "Elegant Abiye Elbise",
    price: "₺899",
    originalPrice: "₺1299",
    image: "👗",
    rating: 4.9,
    reviews: 167,
    isNew: false,
    discount: 30,
    category: "Abiye Elbiseler",
    colors: ["Siyah", "Kırmızı"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Modern Mini Elbise",
    price: "₺449",
    originalPrice: "₺699",
    image: "👗",
    rating: 4.4,
    reviews: 134,
    isNew: true,
    discount: 35,
    category: "Mini Elbiseler",
    colors: ["Siyah", "Beyaz", "Kırmızı"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 8,
    name: "Klasik Midi Elbise",
    price: "₺699",
    originalPrice: "₺999",
    image: "👗",
    rating: 4.8,
    reviews: 145,
    isNew: false,
    discount: 30,
    category: "Midi Elbiseler",
    colors: ["Siyah", "Mavi", "Yeşil"],
    sizes: ["S", "M", "L", "XL"]
  }
];

export default function ElbiselerGrid() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            <span className="font-semibold">{elbiseler.length}</span> elbise bulundu
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sırala:</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>En Popüler</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
              <option>En Yeni</option>
              <option>En Çok Değerlendirilen</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {elbiseler.map((elbise) => (
            <div key={elbise.id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-50 to-purple-50 rounded-t-xl flex items-center justify-center overflow-hidden">
                <div className="text-6xl">{elbise.image}</div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {elbise.isNew && (
                    <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Yeni
                    </span>
                  )}
                  {elbise.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      %{elbise.discount} İndirim
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                    <ShoppingBag className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm">
                    Hızlı Görünüm
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-gray-500">{elbise.category}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {elbise.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(elbise.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({elbise.reviews})
                  </span>
                </div>

                {/* Colors */}
                <div className="flex items-center space-x-1 mb-2">
                  {elbise.colors.slice(0, 3).map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{
                        backgroundColor: color === 'Siyah' ? '#000' : 
                                       color === 'Beyaz' ? '#fff' :
                                       color === 'Kırmızı' ? '#ef4444' :
                                       color === 'Mavi' ? '#3b82f6' :
                                       color === 'Yeşil' ? '#10b981' :
                                       color === 'Sarı' ? '#f59e0b' :
                                       color === 'Pembe' ? '#ec4899' :
                                       color === 'Mor' ? '#8b5cf6' : '#ccc'
                      }}
                    />
                  ))}
                  {elbise.colors.length > 3 && (
                    <span className="text-xs text-gray-500">+{elbise.colors.length - 3}</span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {elbise.price}
                  </span>
                  {elbise.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {elbise.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
            Daha Fazla Göster
          </button>
        </div>
      </div>
    </div>
  );
} 