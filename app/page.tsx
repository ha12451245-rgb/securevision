import BackToTop from "../components/BackToTop";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />
      <Hero />

<WhyChooseUs />

      <Stats />

      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <CTA />
      <FloatingWhatsApp />
      <BackToTop />
      <Footer />

      

    </main>
  );
}