import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { PerformanceOptimizer } from "./components/PerformanceOptimizer";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Company } from "./pages/Company";
import { Careers } from "./pages/Careers";
import { Blog } from "./pages/Blog";
import { CaseStudies } from "./pages/CaseStudies";
import { Support } from "./pages/Support";
import { TermsOfService } from "./pages/TermsOfService";

function HomePage() {
  return (
    <>
      <SEO />
      <PerformanceOptimizer />
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
} 