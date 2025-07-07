import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Elbiseler",
    description: "Günlük ve özel günler için",
    image: "👗",
    count: "150+ Ürün",
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 2,
    name: "Üst Giyim",
    description: "Bluz, gömlek ve tişörtler",
    image: "👚",
    count: "200+ Ürün",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    name: "Alt Giyim",
    description: "Pantolon, etek ve şortlar",
    image: "👖",
    count: "120+ Ürün",
    color: "from-blue-400 to-purple-500"
  },
  {
    id: 4,
    name: "Dış Giyim",
    description: "Ceket, mont ve kabanlar",
    image: "🧥",
    count: "80+ Ürün",
    color: "from-green-400 to-blue-500"
  },
  {
    id: 5,
    name: "Aksesuar",
    description: "Çanta, kemer ve takılar",
    image: "👜",
    count: "100+ Ürün",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 6,
    name: "Ayakkabı",
    description: "Topuklu, düz ve spor ayakkabılar",
    image: "👠",
    count: "90+ Ürün",
    color: "from-red-400 to-pink-500"
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kategoriler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun kategoriyi seçin ve tarzınızı keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.image}</div>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {category.name}
                </h3>
                
                <p className="text-white/80 text-sm mb-3">
                  {category.description}
                </p>
                
                <span className="text-white/90 text-sm font-medium">
                  {category.count}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Yeni Üyelere Özel
          </h3>
          <p className="text-lg mb-6 opacity-90">
            İlk alışverişinizde %20 indirim fırsatını kaçırmayın!
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Hemen Üye Ol
          </button>
        </div>
      </div>
    </section>
  );
} 