import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PorteLaunchSection from './components/PorteLaunchSection';
import PorteSection from './components/PorteSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Presupuesto from './components/Presupuesto';
import LandingPage from './components/LandingPage';
import LegalPage from './components/LegalPage';

const PropuestaRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  React.useEffect(() => {
    if (slug) {
      window.location.replace(`/propuestas/${slug}.html`);
    }
  }, [slug]);
  return null;
};
// import Chatbot from './components/Chatbot';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PorteLaunchSection />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* <Chatbot /> */}
    </>
  );
};

const PortePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <PorteSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-950 font-sans text-white scroll-smooth selection:bg-brand-500 selection:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/porte" element={<PortePage />} />
            <Route path="/presentacion" element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/politicas-privacidad" element={<LegalPage type="privacy" />} />
            <Route path="/eliminacion-datos" element={<LegalPage type="data-deletion" />} />
            <Route path="/terminos-condiciones" element={<LegalPage type="terms" />} />
            <Route path="/terminos-servicio" element={<LegalPage type="terms" />} />
            <Route path="/presupuesto/login" element={<Login />} />
            <Route
              path="/presupuesto"
              element={
                <ProtectedRoute>
                  <Presupuesto />
                </ProtectedRoute>
              }
            />
            <Route path="/propuestas/:slug" element={<PropuestaRedirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
