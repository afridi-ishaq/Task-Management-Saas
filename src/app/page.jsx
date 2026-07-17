import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}