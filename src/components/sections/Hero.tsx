import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiOutlinePhone,
    HiOutlineCalendar,
    HiOutlineLocationMarker,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineStar
} from 'react-icons/hi';
import { GiPalmTree, GiBeachBall, GiCoconuts } from 'react-icons/gi';
import slideOne from "../../assets/images/slides/slideOne.jpg";
import slideTwo from "../../assets/images/slides/slideTwo.jpg";
import slideThree from "../../assets/images/slides/slideThree.jpg";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Images du carrousel avec descriptions personnalisées
    const slides = [
        {
            id: 1,
            url: slideOne,
            title: "Plage de sable fin",
            subtitle: "Eaux turquoise",
            description: "Profitez d'une plage paradisiaque au sable fin bordée d'eaux turquoise cristallines. Idéal pour la baignade et la détente au soleil."
        },
        {
            id: 2,
            url: slideTwo,
            title: "Couchers de soleil",
            subtitle: "Moments magiques",
            description: "Admirez des couchers de soleil spectaculaires aux couleurs flamboyantes. Un spectacle naturel inoubliable chaque soir."
        },
        {
            id: 3,
            url: slideThree,
            title: "Forêt luxuriante",
            subtitle: "Nature préservée",
            description: "Explorez une forêt tropicale luxuriante riche en biodiversité. Des sentiers aménagés pour découvrir la faune et la flore locales."
        },
        {
            id: 4,
            url: slideOne,
            title: "Activités nautiques",
            subtitle: "Sports et loisirs",
            description: "Pratiquez de nombreuses activités nautiques : beach soccer, pêche traditionnelle, baignade et bien plus encore."
        }
    ];

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Animations variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            id="accueil"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A2A4A]"
        >
            {/* Carrousel d'images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${slides[currentSlide].url}')`,
                        }}
                    >
                        {/* Overlay premium avec dégradé plus riche */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A2A4A]/90 via-[#0A2A4A]/50 to-transparent"></div>
                        
                        {/* Effet de lumière subtil */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Éléments décoratifs flottants - Uniquement sur desktop */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden lg:block">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [-1, 1, -1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[5%]"
                >
                    <GiPalmTree className="text-8xl text-[#F5E6D3]/30" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -25, 0], rotate: [1, -1, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[5%]"
                >
                    <div className="relative">
                        <GiPalmTree className="text-9xl text-[#90B77D]/30" />
                        <motion.div
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-4 -right-4"
                        >
                            <GiCoconuts className="text-5xl text-[#D4B08C]/40" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ rotate: 360, y: [0, -15, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[30%] right-[15%]"
                >
                    <GiBeachBall className="text-6xl text-[#F5E6D3]/30" />
                </motion.div>
            </div>

            {/* Boutons de navigation - Optimisés pour mobile */}
            <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-2xl"
                aria-label="Image précédente"
            >
                <HiOutlineChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>

            <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-2xl"
                aria-label="Image suivante"
            >
                <HiOutlineChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Avis clients - À GAUCHE - Optimisé mobile */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`avis-${currentSlide}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-20 sm:bottom-24 md:bottom-32 left-2 sm:left-4 md:left-16 z-20 max-w-35 sm:max-w-50 md:max-w-none"
                >
                    <div className="bg-black/40 backdrop-blur-xl border-l-4 border-[#FFB347] rounded-r-xl px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 shadow-2xl">
                        <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map((star) => (
                                    <HiOutlineStar key={star} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#FFB347] fill-current" />
                                ))}
                            </div>
                            <span className="text-[8px] sm:text-xs md:text-sm text-white/80">150+</span>
                        </div>
                        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">
                            4.8/5
                        </p>
                        <p className="text-[8px] sm:text-xs md:text-sm text-[#F5E6D3]/70 truncate">
                            Excellente expérience
                        </p>
                        <p className="hidden md:block text-xs text-[#F5E6D3]/70">
                            Note des voyageurs
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Type d'activité - À DROITE - Optimisé mobile */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`type-${currentSlide}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-20 sm:bottom-24 md:bottom-32 right-2 sm:right-4 md:right-16 z-20 max-w-35 sm:max-w-50 md:max-w-none"
                >
                    <div className="bg-black/40 backdrop-blur-xl border-r-4 border-[#7EC8E3] rounded-l-xl px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 shadow-2xl text-right">
                        <h2 className="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#F5E6D3] leading-tight">
                            {slides[currentSlide].title}
                        </h2>
                        <p className="text-[8px] sm:text-sm md:text-base lg:text-lg text-[#7EC8E3]">
                            {slides[currentSlide].subtitle}
                        </p>
                        <div className="hidden md:flex items-center justify-end gap-1 mt-1">
                            <span className="text-xs text-white/60">Activité</span>
                            <div className="w-1 h-1 bg-[#7EC8E3] rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Contenu principal */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-12 md:mt-0">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Titre principal */}
                    <motion.h1 variants={fadeInUp} className="mb-3 md:mb-4">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white drop-shadow-2xl block">
                            Andakary
                        </span>
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#F5E6D3] drop-shadow-2xl block mt-1 sm:mt-2">
                            City Beach
                        </span>
                    </motion.h1>

                    {/* Description DYNAMIQUE */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`desc-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2"
                        >
                            {slides[currentSlide].description}
                        </motion.p>
                    </AnimatePresence>

                    {/* Localisation */}
                    <motion.div variants={fadeInUp} className="flex justify-center mb-5 sm:mb-6 md:mb-8">
                        <div className="inline-flex items-center gap-1 sm:gap-2 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-xl">
                            <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 text-[#7EC8E3]" />
                            <span className="text-[10px] sm:text-xs md:text-sm text-white">17 km au Sud-est de Vohipeno</span>
                        </div>
                    </motion.div>

                    {/* Boutons d'action - Largeur fixe sur mobile */}
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
                        <motion.a
                            href="#activites"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group w-full sm:w-auto min-w-50 sm:min-w-55 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-linear-to-r from-[#7EC8E3] to-[#3A8FE0] text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-2xl overflow-hidden"
                        >
                            <span className="relative z-10">Découvrir le paradis</span>
                            <motion.div
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            />
                        </motion.a>

                        <motion.a
                            href="#reservation"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group w-full sm:w-auto min-w-35 sm:min-w-40 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
                        >
                            <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
                            <span>Réserver</span>
                        </motion.a>
                    </motion.div>

                    {/* Statistiques */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto px-2">
                        {[
                            { value: '10+', label: 'Activités', icon: <GiBeachBall className="w-3 h-3 sm:w-4 sm:h-4" /> },
                            { value: '7j/7', label: 'Ouvert', icon: <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4" /> },
                            { value: '100%', label: 'Nature', icon: <GiPalmTree className="w-3 h-3 sm:w-4 sm:h-4" /> },
                            { value: '24/7', label: 'Accueil', icon: <HiOutlinePhone className="w-3 h-3 sm:w-4 sm:h-4" /> },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -3 }}
                                className="bg-black/30 backdrop-blur-md rounded-xl p-2 sm:p-3 border border-white/20 shadow-xl"
                            >
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#F5E6D3]">{stat.value}</div>
                                <div className="text-[8px] sm:text-[10px] md:text-xs text-white/70 flex items-center justify-center gap-1 mt-0.5 sm:mt-1">
                                    <span className="text-[#7EC8E3]">{stat.icon}</span>
                                    <span className="hidden xs:inline">{stat.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Gradient de fin */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-linear-to-t from-[#0A2A4A] to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;