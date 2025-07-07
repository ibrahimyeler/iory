import { Heart, ShoppingBag, Star } from 'lucide-react';

const relatedProducts = [
  {
    id: 1,
    name: "Çiçekli Midi Elbise",
    price: "₺749",
    originalPrice: "₺999",
    image: "👗",
    rating: 4.7,
    reviews: 89,
    discount: 25
  },
  {
    id: 2,
    name: "Modern Mini Elbise",
    price: "₺599",
    originalPrice: "₺799",
    image: "👗",
    rating: 4.5,
    reviews: 156,
    discount: 25
  },
  {
    id: 3,
    name: "Şık Abiye Elbise",
    price: "₺1299",
    originalPrice: "₺1699",
    image: "👗",
    rating: 4.9,
    reviews: 203,
    discount: 23
  },
  {
    id: 4,
    name: "Günlük Düz Elbise",
    price: "₺449",
    originalPrice: "₺649",
    image: "👗",
    rating: 4.6,
    reviews: 134,
    discount: 30
  }
];

export default function UrunDetayRelated() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Benzer Ürünler</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
            {/* Product Image */}
            <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-50 to-purple-50 rounded-t-lg flex items-center justify-center overflow-hidden">
              <div className="text-4xl">{product.image}</div>
              
              {/* Badges */}
              {product.discount > 0 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  %{product.discount} İndirim
                </span>
              )}

              {/* Action Buttons */}
              <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                  <Heart className="h-3 w-3 text-gray-600" />
                </button>
                <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors">
                  <ShoppingBag className="h-3 w-3 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3">
              <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                {product.name}
              </h4>
              
              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-2 w-2 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-sm">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 