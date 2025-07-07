/* eslint-disable react/no-unescaped-entities */
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    location: "İstanbul",
    rating: 5,
    comment: "iory&apos;den aldığım elbise gerçekten harika! Kalitesi ve uyumu mükemmel. Kesinlikle tavsiye ederim.",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Fatma S.",
    location: "Ankara",
    rating: 5,
    comment: "Çok hızlı kargo ve ürünler tam beklediğim gibi. Özellikle blazer ceketim çok şık.",
    avatar: "👩‍🎨"
  },
  {
    id: 3,
    name: "Zeynep M.",
    location: "İzmir",
    rating: 4,
    comment: "Fiyat-kalite oranı çok iyi. Yeni koleksiyonları merakla bekliyorum.",
    avatar: "👩‍💻"
  },
  {
    id: 4,
    name: "Elif D.",
    location: "Bursa",
    rating: 5,
    comment: "Müşteri hizmetleri çok ilgili. Sorunumu hızlıca çözdüler. Teşekkürler iory!",
    avatar: "👩‍🏫"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gerçek müşteri deneyimlerini okuyun ve neden iory'yi tercih ettiklerini öğrenin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-6 w-6 text-pink-200 absolute -top-2 -left-1" />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">10K+</div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">50K+</div>
            <div className="text-gray-600">Satılan Ürün</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Müşteri Puanı</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-gray-600">Müşteri Desteği</div>
          </div>
        </div>
      </div>
    </section>
  );
} 