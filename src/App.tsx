import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Activities from './components/sections/Activities';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main>
        {/* Section Accueil */}
        <Hero />
        
        {/* Section Activités */}
        <Activities />
        
        {/* Section Réservation */}
        {/* <Reservation /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;