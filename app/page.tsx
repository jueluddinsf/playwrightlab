import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStackTicker from "./components/TechStackTicker";
import MigrationProtocol from "./components/MigrationProtocol";
import ROICalculator from "./components/ROICalculator";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Audit from "./components/Audit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-playwright/30">
      <Navbar />
      <Hero />
      <TechStackTicker />
      <MigrationProtocol />
      <ROICalculator />
      <Services />
      <Testimonials />
      <FAQ />
      <Audit />
      <Contact />
      <Footer />
    </main>
  );
}
