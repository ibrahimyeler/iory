import UrunDetayHeader from "@/components/urun-detay/UrunDetayHeader";
import UrunDetayGallery from "@/components/urun-detay/UrunDetayGallery";
import UrunDetayInfo from "@/components/urun-detay/UrunDetayInfo";
import UrunDetayReviews from "@/components/urun-detay/UrunDetayReviews";
import UrunDetayRelated from "@/components/urun-detay/UrunDetayRelated";

interface UrunDetayPageProps {
  params: {
    id: string;
  };
}

export default function UrunDetayPage({ params }: UrunDetayPageProps) {
  // params.id kullanılabilir - şimdilik kullanmıyoruz ama gelecekte ürün verilerini bu ID ile çekebiliriz
  console.log("Ürün ID:", params.id);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <UrunDetayHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Gallery */}
          <div>
            <UrunDetayGallery />
          </div>
          
          {/* Product Info */}
          <div>
            <UrunDetayInfo />
          </div>
        </div>
        
        {/* Reviews and Related Products */}
        <div className="space-y-8">
          <UrunDetayReviews />
          <UrunDetayRelated />
        </div>
      </div>
    </div>
  );
} 