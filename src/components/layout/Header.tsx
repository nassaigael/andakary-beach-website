import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineMenu, 
  HiOutlineX,
  HiOutlineSun,
  HiOutlinePhone,
  HiOutlineCalendar,
} from 'react-icons/hi';
import { BsFillTreeFill, BsFillAwardFill } from 'react-icons/bs';
import { GiPalmTree, GiWaves } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['accueil', 'activites', 'tarifs', 'evenements', 'galerie', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', name: 'Accueil', href: '#accueil', icon: <GiWaves className="w-5 h-5" />, description: 'Notre paradis tropical' },
    { id: 'activites', name: 'Activités', href: '#activites', icon: <BsFillAwardFill className="w-5 h-5" />, description: 'Sports et loisirs' },
    { id: 'tarifs', name: 'Tarifs', href: '#tarifs', icon: <HiOutlineSun className="w-5 h-5" />, description: 'Nos offres exclusives' },
    { id: 'evenements', name: 'Événements', href: '#evenements', icon: <BsFillTreeFill className="w-5 h-5" />, description: 'Mariages & soirées' },
    { id: 'galerie', name: 'Galerie', href: '#galerie', icon: <GiPalmTree className="w-5 h-5" />, description: 'Photos & vidéos' },
    { id: 'contact', name: 'Contact', href: '#contact', icon: <HiOutlinePhone className="w-5 h-5" />, description: 'Nous trouver' },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: '#', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: 'https://wa.me/261346441900', label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
  ];

  return (
    <>
      {/* Header principal */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-2 bg-linear-to-r from-[#0A2A4A]/98 to-[#1A3A2A]/98 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'py-4 bg-linear-to-r from-[#0A2A4A]/80 to-[#1A3A2A]/80 backdrop-blur-sm'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(126, 200, 227, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Ligne décorative supérieure */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-[#7EC8E3] via-[#F5E6D3] to-[#90B77D] opacity-50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo avec animation premium */}
            <motion.a
              href="#accueil"
              className="flex items-center space-x-3 group relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Effet de glow autour du logo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-2 bg-linear-to-r from-[#7EC8E3]/30 to-[#F5E6D3]/30 rounded-full blur-xl"
              />
              
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 8, -8, 0],
                    y: [0, -3, 3, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-4xl sm:text-5xl relative z-10"
                >
                  <GiPalmTree className="text-[#F5E6D3] drop-shadow-2xl" />
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-2 -right-2 text-xl sm:text-2xl"
                >
                  <GiWaves className="text-[#7EC8E3]" />
                </motion.div>
              </div>
              
              <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight transition-all duration-300 ${
                  scrolled ? 'text-[#F5E6D3]' : 'text-white'
                }`}>
                  Andakary
                </span>
                <span className={`text-[10px] sm:text-xs tracking-[0.3em] transition-all duration-300 ${
                  scrolled ? 'text-[#7EC8E3]' : 'text-[#F5E6D3]'
                }`}>
                  CITY BEACH
                </span>
              </div>
            </motion.a>

            {/* Navigation Desktop - Centrée */}
            <nav className="hidden xl:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-2xl px-2 py-1 border border-white/10">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -1 }}
                    className={`relative group px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      activeLink === item.id
                        ? 'text-white bg-linear-to-r from-[#7EC8E3]/30 to-[#90B77D]/30'
                        : scrolled 
                          ? 'text-[#F5E6D3]/80 hover:text-white hover:bg-white/10' 
                          : 'text-white/80 hover:text-[#F5E6D3] hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                    </span>
                    
                    {activeLink === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-linear-to-r from-[#7EC8E3] to-[#90B77D] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </nav>

            {/* Actions - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.a
                href="#reservation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                
                <div className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  scrolled
                    ? 'bg-linear-to-r from-[#7EC8E3] to-[#3A8FE0] text-white shadow-lg shadow-[#7EC8E3]/30'
                    : 'bg-linear-to-r from-[#F5E6D3] to-[#D4B08C] text-[#0A2A4A] shadow-lg shadow-black/20'
                }`}>
                  <HiOutlineCalendar className="w-5 h-5" />
                  <span className="font-semibold">Réserver</span>
                </div>
              </motion.a>
            </div>

            {/* Bouton Menu Mobile - Amélioré */}
            <div className="flex items-center space-x-2 lg:hidden">
              <motion.a
                href="tel:0346441900"
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-xl ${
                  scrolled 
                    ? 'bg-[#7EC8E3]/20 text-[#7EC8E3]' 
                    : 'bg-white/20 text-white'
                }`}
              >
                <HiOutlinePhone className="w-5 h-5" />
              </motion.a>

              {/* Menu burger premium avec animation */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2.5 rounded-xl transition-all duration-300 overflow-hidden ${
                  scrolled 
                    ? 'bg-linear-to-r from-[#7EC8E3] to-[#3A8FE0] text-white shadow-lg' 
                    : 'bg-linear-to-r from-[#F5E6D3] to-[#D4B08C] text-[#0A2A4A] shadow-lg'
                }`}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiOutlineMenu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Barre de progression du scroll */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#7EC8E3] via-[#F5E6D3] to-[#90B77D]"
          style={{ 
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
          }}
        />
      </motion.header>

      {/* Menu Mobile Ultra Premium */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay avec blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Panneau latéral gauche (comme dans les apps premium) */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-sm z-50 lg:hidden"
            >
              <div className="relative h-full bg-linear-to-b from-[#0A2A4A] to-[#1A3A2A] shadow-2xl overflow-y-auto">
                
                {/* Décoration supérieure */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#7EC8E3]/20 to-transparent" />
                
                {/* Vagues décoratives */}
                <div className="absolute bottom-0 left-0 right-0 opacity-10">
                  <svg viewBox="0 0 1440 320" className="w-full">
                    <path fill="#7EC8E3" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                  </svg>
                </div>

                {/* Contenu du menu */}
                <div className="relative z-10 p-6">
                  
                  {/* En-tête avec logo */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-4 mb-8"
                  >
                    <div className="w-16 h-16 bg-linear-to-r from-[#7EC8E3] to-[#90B77D] rounded-2xl flex items-center justify-center shadow-xl">
                      <GiPalmTree className="text-3xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white">Andakary</h2>
                      <p className="text-[#7EC8E3] text-sm tracking-widest">CITY BEACH</p>
                    </div>
                  </motion.div>

                  {/* Navigation items avec animations */}
                  <div className="space-y-2 mb-8">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.3 }}
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 5 }}
                        className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                          activeLink === item.id
                            ? 'bg-linear-to-r from-[#7EC8E3] to-[#90B77D] text-white shadow-lg'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <span className={`text-xl mr-4 ${
                          activeLink === item.id ? 'text-white' : 'text-[#7EC8E3]'
                        }`}>
                          {item.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold">{item.name}</div>
                          <div className={`text-xs ${
                            activeLink === item.id ? 'text-white/80' : 'text-[#F5E6D3]/60'
                          }`}>
                            {item.description}
                          </div>
                        </div>
                        {activeLink === item.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.a>
                    ))}
                  </div>

                  {/* Actions principales */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <motion.a
                      href="tel:0346441900"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-center space-x-2 p-4 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
                    >
                      <HiOutlinePhone className="w-5 h-5 text-[#7EC8E3]" />
                      <span className="font-medium">034 64 419 00</span>
                    </motion.a>

                    <motion.a
                      href="#reservation"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-2 p-4 bg-linear-to-r from-[#7EC8E3] to-[#3A8FE0] rounded-xl text-white font-bold shadow-lg relative overflow-hidden group"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                      <HiOutlineCalendar className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Réserver maintenant</span>
                    </motion.a>
                  </motion.div>

                  {/* Réseaux sociaux */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8"
                  >
                    <p className="text-center text-[#F5E6D3]/60 text-sm mb-4">Suivez-nous</p>
                    <div className="flex justify-center space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:text-white border border-white/10`}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;