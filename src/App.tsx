import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import './index.css';
import Footer from './components/layout/Footer';

function App() {
  // Sections de test avec des IDs pour la navigation
  const sections = [
    { id: 'accueil', title: 'Accueil', color: 'from-ocean-light to-ocean-medium' },
    { id: 'activites', title: 'Activités', color: 'from-ocean-medium to-ocean-deep' },
    { id: 'tarifs', title: 'Tarifs', color: 'from-ocean-deep to-forest-light' },
    { id: 'evenements', title: 'Événements', color: 'from-forest-light to-forest-medium' },
    { id: 'galerie', title: 'Galerie', color: 'from-forest-medium to-forest-deep' },
    { id: 'contact', title: 'Contact', color: 'from-forest-deep to-ocean-deep' },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {/* Contenu de test avec sections */}
      <main>
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${section.color} relative overflow-hidden`}
          >
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Vagues animées */}
              <motion.div
                animate={{ 
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
              />
              
              <motion.div
                animate={{ 
                  x: [0, -100, 0],
                  y: [0, 50, 0],
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-20 -right-20 w-96 h-96 bg-ocean-light/10 rounded-full blur-3xl"
              />

              {/* Palmiers décoratifs (simulés) */}
              <div className="absolute bottom-0 left-10 text-8xl opacity-10 rotate-12">
                🌴
              </div>
              <div className="absolute top-20 right-10 text-8xl opacity-10 -rotate-12">
                🌴
              </div>
            </div>

            {/* Contenu de la section */}
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto"
              >
                {/* Icône animée */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-7xl mb-6"
                >
                  {index === 0 && '🏖️'}
                  {index === 1 && '⚽'}
                  {index === 2 && '💰'}
                  {index === 3 && '🎉'}
                  {index === 4 && '📸'}
                  {index === 5 && '📞'}
                </motion.div>

                {/* Titre */}
                <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-4 text-shadow-premium">
                  {section.title}
                </h2>

                {/* Ligne décorative */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-beach-sand to-beach-light mx-auto mb-6 rounded-full"
                />

                {/* Description */}
                <p className="text-xl text-white/80 mb-8">
                  Bienvenue dans la section {section.title.toLowerCase()} d'Andakary City Beach.
                  {index === 0 && ' Découvrez notre paradis tropical entre plage, mer et forêt.'}
                  {index === 1 && ' Beach soccer, pêche, afon-dasy et bien plus encore !'}
                  {index === 2 && ' Consultez nos tarifs pour les visites, chalets et hébergements.'}
                  {index === 3 && ' Mariages, pique-niques, sorties et bals de plage.'}
                  {index === 4 && ' Explorez notre galerie photos et vidéos.'}
                  {index === 5 && ' Contactez-nous pour vos réservations et demandes spéciales.'}
                </p>

                {/* Bouton de test */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-beach-sand to-beach-dark text-ocean-deep font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explorer {section.title}
                </motion.button>

                {/* Indicateur de section */}
                <div className="mt-8 text-white/40 text-sm">
                  Section {index + 1} / {sections.length}
                </div>
              </motion.div>
            </div>

            {/* Indicateur de scroll (sauf pour la dernière section) */}
            {index < sections.length - 1 && (
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-2xl"
              >
                ↓
              </motion.div>
            )}
          </motion.section>
        ))}
      </main>

    < Footer />
    </div>
  );
}

export default App;