import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ayşe K.",
    rating: 5,
    date: "2 gün önce",
    comment: "Harika bir elbise! Kalitesi ve uyumu mükemmel. Kesinlikle tavsiye ederim.",
    helpful: 12,
    replies: 2
  },
  {
    id: 2,
    name: "Fatma S.",
    rating: 4,
    date: "1 hafta önce",
    comment: "Çok güzel elbise, fiyatına göre kaliteli. Sadece biraz büyük geldi.",
    helpful: 8,
    replies: 1
  },
  {
    id: 3,
    name: "Zeynep M.",
    rating: 5,
    date: "2 hafta önce",
    comment: "Tam beklediğim gibi! Çiçekli deseni çok şık ve günlük kullanıma uygun.",
    helpful: 15,
    replies: 0
  }
];

export default function UrunDetayReviews() {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Müşteri Yorumları</h3>
        <button className="text-pink-600 hover:text-pink-700 font-medium">
          Yorum Yaz
        </button>
      </div>

      {/* Rating Summary */}
      <div className="flex items-center space-x-6 mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
          <div className="flex items-center justify-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <div className="text-sm text-gray-600 mt-1">{totalReviews} yorum</div>
        </div>
        
        <div className="flex-1">
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter(review => review.rating === star).length;
              const percentage = (count / totalReviews) * 100;
              return (
                <div key={star} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 w-4">{star}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3">{review.comment}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <ThumbsUp className="h-4 w-4" />
                <span>Faydalı ({review.helpful})</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-700">
                <MessageCircle className="h-4 w-4" />
                <span>Yanıtla</span>
              </button>
              {review.replies > 0 && (
                <span className="text-pink-600">{review.replies} yanıt</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center mt-6">
        <button className="text-pink-600 hover:text-pink-700 font-medium">
          Daha Fazla Yorum Göster
        </button>
      </div>
    </div>
  );
} 