import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import FeatureSplit from "@/components/landing/FeatureSplit";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Calculator from "@/components/landing/Calculator";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeatureSplit />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Calculator />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
