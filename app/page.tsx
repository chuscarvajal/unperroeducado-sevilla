import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeatureSplit from "@/components/landing/FeatureSplit";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureSplit />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
