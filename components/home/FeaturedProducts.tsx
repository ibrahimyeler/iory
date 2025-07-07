import { Heart, ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Zarif Çiçekli Elbise",
    price: "₺899",
    originalPrice: "₺1299",
    image: "👗",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    discount: 30
  },
  {
    id: 2,
    name: "Modern Blazer Ceket",
    price: "₺649",
    originalPrice: "₺899",
    image: "👔",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    discount: 25
  },
  {
    id: 3,
    name: "Şık Gömlek Bluz",
    price: "₺399",
    originalPrice: "₺599",
    image: "👚",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    discount: 33
  },
  {
    id: 4,
    name: "Yüksek Bel Pantolon",
    price: "₺549",
    originalPrice: "₺799",
    image: "👖",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    discount: 31
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En popüler ve en çok tercih edilen ürünlerimizi keşfedin. 
            Kalite ve stil bir arada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-50 to-purple-50 rounded-t-xl flex items-center justify-center overflow-hidden">
                <div className="text-6xl">{product.image}</div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Yeni
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      %{product.discount} İndirim
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                    <ShoppingBag className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
            Tüm Ürünleri Gör
          </button>
        </div>
      </div>
    </section>
  );
} 