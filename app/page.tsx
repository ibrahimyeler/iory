import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <footer className="py-8 text-center text-gray-400 text-sm border-t mt-8">
        © {new Date().getFullYear()} iory. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
