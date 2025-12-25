import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WhyThisCompany } from './pages/WhyThisCompany';
import { Subsidiaries } from './pages/Subsidiaries';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { SEO } from './utils/seo';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  description="ELNET Technologies - A value-driven, technology-enabled company with 40+ years of legacy building inclusive prosperity through co-created value and socially impactful innovation."
                  keywords={['ELNET Technologies', 'Investment', 'Ethiopia', 'Corporate']}
                />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <SEO
                  title="About Us"
                  description="Learn about ELNET Group's 40+ year history, mission to enable inclusive prosperity, vision for co-creating value, and our core values of integrity, responsibility, excellence, and servant leadership."
                  keywords={['About ELNET', 'Company History', 'Mission', 'Vision', 'Values']}
                />
                <About />
              </>
            }
          />
          <Route
            path="/why-this-company"
            element={
              <>
                <SEO
                  title="Why This Company"
                  description="Discover why ELNET Group stands out: ethical foundation, consistent performance across industries, diverse portfolio, deep community commitment, and large-scale social-economic impact."
                  keywords={['Why ELNET', 'Company Values', 'Ethics', 'Impact']}
                />
                <WhyThisCompany />
              </>
            }
          />
          <Route
            path="/subsidiaries"
            element={
              <>
                <SEO
                  title="Subsidiaries"
                  description="Explore ELNET Group's 16+ subsidiaries operating across technology, finance, mining, manufacturing, education, healthcare, and more sectors."
                  keywords={['Subsidiaries', 'Portfolio Companies', 'ELNET Companies']}
                />
                <Subsidiaries />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <SEO
                  title="Contact Us"
                  description="Get in touch with ELNET Technologies. Located at 4 Kilo, Berges Clinic 5th Floor, Addis Ababa, Ethiopia. Phone: +251 930 033 302."
                  keywords={['Contact', 'Address', 'Phone', 'Email']}
                />
                <Contact />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <SEO
                  title="Services"
                  description="Discover ELNET Group's technology, infrastructure, and advisory services powering mobility, finance, industry, healthcare, and public sector innovation."
                  keywords={['Services', 'Technology', 'Digital Platforms', 'Consulting']}
                />
                <Services />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
