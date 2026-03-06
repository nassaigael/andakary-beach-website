import { motion } from 'framer-motion';
import { 
    HiOutlineUserGroup,
    HiOutlineGift,
    HiOutlineArrowNarrowRight,
    HiOutlineClock,
    HiOutlineUsers
} from 'react-icons/hi';
import { GiFishing, GiSoccerBall, GiBeachBall, GiCampfire, GiWaves } from 'react-icons/gi';
import {  BsFillSuitHeartFill } from 'react-icons/bs';
import { FaRegStar, FaRegGem } from 'react-icons/fa';
import beachSoccerImg from "../../assets/images/activities/beach-soccer.jpg";
import pecheImg from "../../assets/images/activities/peche.avif";
import afonDasyImg from "../../assets/images/activities/afon-dasy.jpg";
import piqueNiqueImg from "../../assets/images/activities/pique-nique.png";
import balPlageImg from "../../assets/images/activities/bal-plage.avif";
import detenteImg from "../../assets/images/activities/detente.png";

const Activities = () => {
    const activities = [
        {
            id: 1,
            name: "Beach Soccer",
            description: "Tournois et matchs spontanés sur notre terrain de sable fin face à l'océan.",
            icon: <GiSoccerBall className="w-8 h-8 md:w-10 md:h-10" />,
            image: beachSoccerImg,
            color: "from-[#7EC8E3] to-[#3A8FE0]",
            lightColor: "#7EC8E3",
            darkColor: "#3A8FE0",
            highlights: ["Terrain professionnel", "Équipement fourni", "Arbitre disponible"],
            popular: true,
            duration: "2h",
            level: "Tous niveaux",
            price: "25 000 Ar",
            rating: 4.9,
            reviews: 128
        },
        {
            id: 2,
            name: "Pêche",
            description: "Partez en mer pour une expérience de pêche traditionnelle malgache inoubliable.",
            icon: <GiFishing className="w-8 h-8 md:w-10 md:h-10" />,
            image: pecheImg,
            color: "from-[#3A8FE0] to-[#1B4B8C]",
            lightColor: "#3A8FE0",
            darkColor: "#1B4B8C",
            highlights: ["Matériel inclus", "Guide expert", "Poisson grillé"],
            popular: false,
            duration: "4h",
            level: "Débutant",
            price: "45 000 Ar",
            rating: 4.8,
            reviews: 92
        },
        {
            id: 3,
            name: "Afon-dasy",
            description: "Activité traditionnelle unique mêlant jeux de plage et découverte culturelle.",
            icon: <GiCampfire className="w-8 h-8 md:w-10 md:h-10" />,
            image: afonDasyImg,
            color: "from-[#FFB347] to-[#FF9AA2]",
            lightColor: "#FFB347",
            darkColor: "#FF9AA2",
            highlights: ["Tradition locale", "Ambiance conviviale", "Tous âges"],
            popular: false,
            duration: "3h",
            level: "Famille",
            price: "35 000 Ar",
            rating: 4.7,
            reviews: 76
        },
        {
            id: 4,
            name: "Pique-nique",
            description: "Profitez d'un déjeuner champêtre dans un cadre idyllique entre mer et forêt.",
            icon: <HiOutlineGift className="w-8 h-8 md:w-10 md:h-10" />,
            image: piqueNiqueImg,
            color: "from-[#90B77D] to-[#4A7043]",
            lightColor: "#90B77D",
            darkColor: "#4A7043",
            highlights: ["Panier garni", "Espace ombragé", "Boissons fraîches"],
            popular: false,
            duration: "2h30",
            level: "Tous",
            price: "30 000 Ar",
            rating: 4.6,
            reviews: 64
        },
        {
            id: 5,
            name: "Bal de plage",
            description: "Soirées dansantes les pieds dans le sable au coucher du soleil.",
            icon: <HiOutlineUserGroup className="w-8 h-8 md:w-10 md:h-10" />,
            image: balPlageImg,
            color: "from-[#FF9AA2] to-[#B39EB5]",
            lightColor: "#FF9AA2",
            darkColor: "#B39EB5",
            highlights: ["DJ set", "Cocktails", "Ambiance féérique"],
            popular: false,
            duration: "Soirée",
            level: "Adulte",
            price: "20 000 Ar",
            rating: 4.9,
            reviews: 156
        },
        {
            id: 6,
            name: "Détente plage",
            description: "Transats, parasols et services pour une journée de relaxation absolue.",
            icon: <GiBeachBall className="w-8 h-8 md:w-10 md:h-10" />,
            image: detenteImg,
            color: "from-[#7EC8E3] to-[#90B77D]",
            lightColor: "#7EC8E3",
            darkColor: "#90B77D",
            highlights: ["Transats premium", "Service à la plage", "Douches"],
            popular: false,
            duration: "Journée",
            level: "Tous",
            price: "15 000 Ar",
            rating: 4.8,
            reviews: 203
        }
    ];

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="activites" className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-linear-to-b from-[#0A2A4A] to-[#1A3A2A]">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjkyZjNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzODQxNTMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
                
                {/* Vagues animées - opacité réduite */}
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 10, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute bottom-0 left-0 text-[#7EC8E3]/5 text-9xl"
                >
                    <GiWaves />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
                    transition={{ duration: 18, repeat: Infinity }}
                    className="absolute top-20 right-0 text-[#90B77D]/5 text-9xl rotate-180"
                >
                    <GiWaves />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* En-tête de section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 md:mb-20 lg:mb-24"
                >

                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                        Vivez l'art de
                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#7EC8E3] via-[#F5E6D3] to-[#90B77D] mt-2">
                            l'évasion parfaite
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-light">
                        Des moments uniques conçus pour éveiller vos sens et créer des souvenirs inoubliables
                        dans l'écrin de nature préservée d'Andakary.
                    </motion.p>
                </motion.div>

                {/* Grille d'activités */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {activities.map((activity) => (
                        <motion.div
                            key={activity.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {/* Carte principale */}
                            <div className="relative bg-linear-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-700">
                                
                                {/* Effet de lumière subtil au hover - OPACITÉ RÉDUITE */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700" // Opacité réduite de 100% à 30%
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${activity.lightColor}20, transparent 70%)` // Opacité réduite de 40 à 20
                                    }}
                                />

                                {/* Conteneur image */}
                                <div className="relative h-72 overflow-hidden">
                                    {/* Image */}
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" // Scale réduit de 110% à 105%
                                        style={{ backgroundImage: `url(${activity.image})` }}
                                    />
                                    
                                    {/* Overlay dégradé */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0A2A4A] via-[#0A2A4A]/40 to-transparent"></div>
                                    
                                    {/* Effet de vif argent - OPACITÉ RÉDUITE */}
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div> {/* Opacité réduite de 10% à 5% */}

                                    {/* Badge premium */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[#FFD700] blur-md opacity-30"></div> {/* Opacité réduite de 50% à 30% */}
                                            <div className="relative px-4 py-2 bg-black/60 backdrop-blur-xl border border-[#FFD700]/30 rounded-full">
                                                <div className="flex items-center gap-2">
                                                    <FaRegGem className="w-3.5 h-3.5 text-[#FFD700]" />
                                                    <span className="text-xs font-medium text-[#FFD700]">COLLECTION PRESTIGE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge "Coup de cœur" */}
                                    {activity.popular && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <motion.div
                                                animate={{ scale: [1, 1.05, 1] }} // Scale réduit de 1.1 à 1.05
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="relative"
                                            >
                                                <div className="absolute inset-0 bg-[#FF69B4] blur-lg opacity-30"></div> {/* Opacité réduite de 50% à 30% */}
                                                <div className="relative px-4 py-2 bg-linear-to-r from-[#FF69B4] to-[#FF1493] rounded-full shadow-2xl">
                                                    <div className="flex items-center gap-2">
                                                        <BsFillSuitHeartFill className="w-3.5 h-3.5 text-white" />
                                                        <span className="text-xs font-bold text-white">COUP DE CŒUR</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}

                                    {/* Informations superposées */}
                                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20">
                                        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-1.5">
                                            <HiOutlineClock className="w-3.5 h-3.5 text-white/70" />
                                            <span className="text-xs text-white">{activity.duration}</span>
                                        </div>
                                        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-1.5">
                                            <HiOutlineUsers className="w-3.5 h-3.5 text-white/70" />
                                            <span className="text-xs text-white">{activity.level}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contenu de la carte */}
                                <div className="relative p-8">
                                    {/* En-tête avec icône et titre */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-linear-to-br rounded-xl blur-md opacity-30" // Opacité réduite de 50% à 30%
                                                    style={{ background: `linear-gradient(135deg, ${activity.lightColor}, ${activity.darkColor})` }}
                                                />
                                                <div className="relative w-14 h-14 bg-[#0A2A4A] rounded-xl flex items-center justify-center border border-white/10">
                                                    <div style={{ color: activity.lightColor }}>
                                                        {activity.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#F5E6D3] group-hover:to-white transition-all duration-300">
                                                    {activity.name}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <FaRegStar
                                                                key={i}
                                                                className={`w-3.5 h-3.5 ${
                                                                    i < Math.floor(activity.rating)
                                                                        ? 'text-[#FFD700] fill-current'
                                                                        : 'text-white/20'
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-white/50">
                                                        ({activity.reviews} avis)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-white/60 mb-6 leading-relaxed font-light">
                                        {activity.description}
                                    </p>

                                    {/* Points forts */}
                                    <div className="space-y-3 mb-8">
                                        {activity.highlights.map((highlight, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-linear-to-r rounded-full blur-sm opacity-30"
                                                        style={{ background: `linear-gradient(135deg, ${activity.lightColor}, ${activity.darkColor})` }}
                                                    />
                                                    <div className="relative w-1.5 h-1.5 bg-white rounded-full"></div>
                                                </div>
                                                <span className="text-sm text-white/80">{highlight}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Prix et bouton */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <div>
                                            <span className="text-xs text-white/50 uppercase tracking-wider">À partir de</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F5E6D3] to-white">
                                                    {activity.price}
                                                </span>
                                                <span className="text-xs text-white/50">/pers</span>
                                            </div>
                                        </div>
                                        
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative group/btn"
                                        >
                                            <div className="absolute inset-0 bg-linear-to-r rounded-full blur-md opacity-30" // Opacité réduite de 50% à 30%
                                                style={{ background: `linear-gradient(135deg, ${activity.lightColor}, ${activity.darkColor})` }}
                                            />
                                            <div className="relative px-6 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                                                <span className="text-sm font-medium text-white">Réserver</span>
                                                <HiOutlineArrowNarrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                                            </div>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            {/* Éléments décoratifs de la carte - OPACITÉ RÉDUITE */}
                            <div className="absolute -inset-0.5 bg-linear-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 -z-10" // Opacité réduite de 100% à 20%
                                style={{ background: `linear-gradient(135deg, ${activity.lightColor}, ${activity.darkColor})` }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Vague de séparation */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                <svg viewBox="0 0 1440 120" className="w-full h-auto">
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7EC8E3" stopOpacity="0.2" /> {/* Opacité réduite de 0.3 à 0.2 */}
                            <stop offset="50%" stopColor="#90B77D" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#F5E6D3" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#wave-gradient)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
};

export default Activities;