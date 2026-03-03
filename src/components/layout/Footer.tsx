import { motion } from 'framer-motion';
import { 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineArrowUp,
  HiOutlineSun,
  HiOutlineUserGroup,
  HiOutlineCamera,
  HiOutlineCalendar,
  HiOutlineCube,
  HiOutlineBeaker,
  HiOutlineGift,
  HiOutlineStar
} from 'react-icons/hi';
import { GiPalmTree, GiWaves, GiFishing, GiSoccerBall, GiBeachBall, GiCampfire } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTripadvisor } from 'react-icons/fa';
import { BsFillAwardFill, BsFillCalendarEventFill } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#accueil', icon: <GiWaves className="w-4 h-4" /> },
    { name: 'Activités', href: '#activites', icon: <BsFillAwardFill className="w-4 h-4" /> },
    { name: 'Tarifs', href: '#tarifs', icon: <HiOutlineSun className="w-4 h-4" /> },
    { name: 'Événements', href: '#evenements', icon: <BsFillCalendarEventFill className="w-4 h-4" /> },
    { name: 'Galerie', href: '#galerie', icon: <HiOutlineCamera className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <HiOutlinePhone className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <HiOutlinePhone className="w-5 h-5" />, text: '034 64 419 00 / 034 06 348 48', href: 'tel:0346441900' },
    { icon: <HiOutlineMail className="w-5 h-5" />, text: 'contact@andakary-beach.mg', href: 'mailto:contact@andakary-beach.mg' },
    { icon: <HiOutlineLocationMarker className="w-5 h-5" />, text: '17 km au Sud-est de Vohipeno', href: 'https://maps.google.com/?q=Vohipeno+Madagascar' },
    { icon: <HiOutlineClock className="w-5 h-5" />, text: 'Ouvert 7j/7 - 8h à 18h', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: '#', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: 'https://wa.me/261346441900', label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
    { icon: <FaTripadvisor className="w-5 h-5" />, href: '#', label: 'Tripadvisor', color: 'hover:bg-[#00AF87]' },
  ];

  const activités = [
    { name: 'Beach soccer', icon: <GiSoccerBall className="w-4 h-4" /> },
    { name: 'Pêche', icon: <GiFishing className="w-4 h-4" /> },
    { name: 'Afon-dasy', icon: <GiCampfire className="w-4 h-4" /> },
    { name: 'Pique-nique', icon: <HiOutlineGift className="w-4 h-4" /> },
    { name: 'Bal de plage', icon: <HiOutlineUserGroup className="w-4 h-4" /> },
    { name: 'Plage', icon: <GiBeachBall className="w-4 h-4" /> },
  ];

  const services = [
    { name: 'Chalet VIP', price: '10 000 Ar', icon: <HiOutlineCube className="w-4 h-4" /> },
    { name: 'Nuitée', price: '40 000 Ar', icon: <HiOutlineCalendar className="w-4 h-4" /> },
    { name: 'Passage', price: '20 000 Ar', icon: <HiOutlineSun className="w-4 h-4" /> },
    { name: 'Droit visite', price: '3 000 Ar', icon: <HiOutlineBeaker className="w-4 h-4" /> },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="relative bg-linear-to-b from-[#0A2A4A] to-[#1A3A2A] text-white">
      
      {/* Lignes décoratives subtiles */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#7EC8E3] to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section principale */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 py-12 md:py-16"
        >
          
          {/* Colonne 1 - Logo et description - Centré sur mobile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl md:text-5xl"
                >
                  <GiPalmTree className="text-[#F5E6D3]" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -right-2 text-xl md:text-2xl"
                >
                  <GiWaves className="text-[#7EC8E3]" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl lg:text-3xl font-black text-[#F5E6D3]">
                  Andakary
                </span>
                <span className="text-[8px] md:text-xs tracking-[0.3em] text-[#7EC8E3]">
                  CITY BEACH
                </span>
              </div>
            </div>

            <p className="text-[#F5E6D3]/70 text-xs md:text-sm leading-relaxed max-w-xs md:max-w-none">
              Découvrez un paradis tropical entre plage, mer et forêt. 
              Un lieu d'exception pour des moments inoubliables à Madagascar.
            </p>

            {/* Badges premium - Centrés sur mobile */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              <span className="px-2 md:px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs text-[#F5E6D3] border border-white/10 flex items-center space-x-1">
                <BsFillAwardFill className="w-3 h-3 text-[#7EC8E3]" />
                <span>Lieu certifié</span>
              </span>
              <span className="px-2 md:px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs text-[#F5E6D3] border border-white/10 flex items-center space-x-1">
                <HiOutlineStar className="w-3 h-3 text-[#90B77D]" />
                <span>Service premium</span>
              </span>
            </div>
          </motion.div>

          {/* Colonne 2 - Liens rapides - Caché sur mobile */}
          <motion.div variants={itemVariants} className="hidden md:flex md:flex-col space-y-4 md:space-y-6">
            <h3 className="text-base md:text-lg font-bold text-[#F5E6D3] relative inline-block">
              Liens rapides
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#7EC8E3] to-[#90B77D] rounded-full"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-[#F5E6D3]/70 hover:text-[#7EC8E3] transition-all duration-300 flex items-center space-x-2 group text-xs md:text-sm"
                  >
                    <span className="text-[#7EC8E3] group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Contact - Centré sur mobile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
            <h3 className="text-base md:text-lg font-bold text-[#F5E6D3] relative inline-block">
              Contact
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#7EC8E3] to-[#90B77D] rounded-full width-[100%] "
              />
            </h3>

            <ul className="space-y-3 md:space-y-4 w-full">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center md:justify-start space-x-3 text-[#F5E6D3]/70 hover:text-[#7EC8E3] transition-all duration-300 group"
                  >
                    <span className="text-[#7EC8E3] group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs md:text-sm">{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4 - Activités et services - Centré sur mobile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
            <h3 className="text-base md:text-lg font-bold text-[#F5E6D3] relative inline-block">
              Activités
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#7EC8E3] to-[#90B77D] rounded-full"
              />
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-2 gap-2 w-full max-w-xs md:max-w-none mx-auto md:mx-0">
              {activités.map((activite, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2 py-1.5 md:px-3 md:py-2 bg-white/5 rounded-lg text-[10px] md:text-xs text-[#F5E6D3] border border-white/10 hover:bg-[#7EC8E3]/20 hover:border-[#7EC8E3]/30 transition-all duration-300 cursor-default flex items-center justify-center space-x-1.5"
                >
                  <span className="text-[#7EC8E3]">{activite.icon}</span>
                  <span className="truncate">{activite.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Services rapides */}
            <div className="pt-2 md:pt-4 w-full">
              <h4 className="text-xs md:text-sm font-semibold text-[#F5E6D3] mb-2 md:mb-3">Nos tarifs</h4>
              <div className="space-y-1.5 md:space-y-2">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-[10px] md:text-xs text-[#F5E6D3]/60 flex items-center justify-between md:justify-start md:space-x-2"
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-[#90B77D]">{service.icon}</span>
                      <span>{service.name}</span>
                    </div>
                    <span className="text-[#7EC8E3] font-medium ml-2">{service.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Séparateur élégant */}
        <motion.div 
          className="w-full h-px bg-linear-to-r from-transparent via-[#7EC8E3] to-transparent opacity-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Footer bottom - Centré sur mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-8 space-y-6 md:space-y-0">
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-sm text-[#F5E6D3]/50 text-center order-2 md:order-1"
          >
            © {new Date().getFullYear()} Andakary City Beach. Tous droits réservés.
            <div className="inline-flex items-center justify-center space-x-1 mt-1 md:mt-0 md:ml-2">
              <span>Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <HiOutlineHeart className="w-3 h-3 md:w-4 md:h-4 text-[#FF9AA2]" />
              </motion.div>
              <span>à Madagascar</span>
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-3 order-1 md:order-2"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-9 h-9 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center text-[#F5E6D3] transition-all duration-300 ${social.color} hover:text-white border border-white/10`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Bouton retour en haut */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 md:w-10 md:h-10 bg-linear-to-r from-[#7EC8E3] to-[#90B77D] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 order-3"
            aria-label="Retour en haut"
          >
            <HiOutlineArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </div>

        {/* Mentions légales - Centrées */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 pb-4 md:pb-6 text-[8px] md:text-xs text-[#F5E6D3]/30"
        >
          <a href="#" className="hover:text-[#7EC8E3] transition-colors px-2">Mentions légales</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-[#7EC8E3] transition-colors px-2">Politique de confidentialité</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-[#7EC8E3] transition-colors px-2">CGV</a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;