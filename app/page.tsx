import FloatingWA from "@/components/landing/FloatingWA";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import FeatureSplit from "@/components/landing/FeatureSplit";
import Calculator from "@/components/landing/Calculator";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <FloatingWA />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <FeatureSplit />
      <Calculator />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
