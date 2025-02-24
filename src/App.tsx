import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/download" element={<DownloadSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>;
}