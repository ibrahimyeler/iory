import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9/5 müşteri memnuniyeti</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Zarafet ve
              <span className="text-pink-600"> Stil</span>
              <br />
              Bir Arada
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Modern kadının tarzını yansıtan, kaliteli ve şık giyim koleksiyonları. 
              Her anınızda kendinizi güzel hissetmenizi sağlıyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center group">
                Koleksiyonu Keşfet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-pink-600 hover:text-pink-600 transition-colors">
                Yeni Gelenler
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30 Gün İade</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Güvenli Ödeme</span>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👗</span>
                </div>
                <p className="text-gray-600 font-medium">Yeni Koleksiyon</p>
                <p className="text-sm text-gray-500">Yakında</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-xl">💎</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
    </section>
  );
} 