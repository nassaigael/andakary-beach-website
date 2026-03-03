import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main style={{ paddingTop: `${headerHeight}px` }}>
        <Hero />
        
        <div className="h-screen bg-gradient-to-b from-[#0A2A4A] to-[#1A3A2A] flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mb-4">
              Contenu supplémentaire
            </h2>
            <p className="text-[#F5E6D3]/70">
              Scrolle vers le bas pour voir le footer
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;