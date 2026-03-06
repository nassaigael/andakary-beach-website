import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    HiOutlineCalendar,
    HiOutlineUser,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineChatAlt,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineUsers,
    HiOutlineGift,
    HiOutlineSparkles
} from 'react-icons/hi';
import { GiPalmTree, GiWaves } from 'react-icons/gi';
import { BsFillAwardFill } from 'react-icons/bs';
import { FaRegGem } from 'react-icons/fa';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        activity: '',
        message: ''
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const activities = [
        { value: '', label: 'Sélectionnez une activité' },
        { value: 'beach-soccer', label: 'Beach Soccer' },
        { value: 'peche', label: 'Pêche' },
        { value: 'afon-dasy', label: 'Afon-dasy' },
        { value: 'pique-nique', label: 'Pique-nique' },
        { value: 'bal-plage', label: 'Bal de plage' },
        { value: 'detente', label: 'Détente plage' },
        { value: 'experience-ultime', label: '⭐ L\'expérience ultime' }
    ];

    const timeSlots = [
        '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simuler l'envoi du formulaire
        setIsSubmitted(true);
        console.log('Réservation soumise:', formData);
        
        // Ne pas réinitialiser automatiquement, l'utilisateur verra l'écran de succès
    };

    const handleNewReservation = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: '2',
            activity: '',
            message: ''
        });
        setIsSubmitted(false);
    };

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

    // Couleurs du header
    const colors = {
        darkBlue: '#0A2A4A',
        mediumBlue: '#1A3A2A',
        oceanBlue: '#3A8FE0',
        lightBlue: '#7EC8E3',
        lightGreen: '#90B77D',
        sandBeige: '#F5E6D3',
    };

    return (
        <section id="reservation" className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ background: `linear-gradient(to bottom, ${colors.mediumBlue}, ${colors.darkBlue})` }}>
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0">
                {/* Motif de vagues */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,50 Q25,30 50,50 T100,50" stroke={colors.lightBlue} fill="none" strokeWidth="0.5" />
                            <path d="M0,60 Q25,40 50,60 T100,60" stroke={colors.lightGreen} fill="none" strokeWidth="0.5" />
                            <path d="M0,70 Q25,50 50,70 T100,70" stroke={colors.sandBeige} fill="none" strokeWidth="0.5" />
                        </svg>
                    </div>
                </div>

                {/* Éléments décoratifs animés */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 30, repeat: Infinity }}
                    className="absolute -top-20 -right-20 opacity-5 text-8xl md:text-9xl"
                    style={{ color: colors.lightBlue }}
                >
                    <GiWaves />
                </motion.div>
                
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-10 left-10 opacity-5 text-7xl md:text-8xl"
                    style={{ color: colors.lightGreen }}
                >
                    <GiPalmTree />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* En-tête de section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-8 md:mb-12"
                >
                    <motion.div variants={itemVariants} className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7EC8E3] to-[#90B77D] blur-xl opacity-20"></div>
                        <div className="relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6">
                            <BsFillAwardFill className="w-3 h-3 md:w-4 md:h-4 text-[#7EC8E3]" />
                            <span className="text-xs md:text-sm text-[#F5E6D3] font-medium tracking-widest">
                                RÉSERVATION
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 px-2">
                        Prêt pour
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7EC8E3] via-[#F5E6D3] to-[#90B77D] mt-1 md:mt-2">
                            l'aventure ?
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light px-4">
                        Réservez dès maintenant votre expérience sur mesure et laissez-vous guider
                        vers des moments d'exception au cœur de la nature malgache.
                    </motion.p>
                </motion.div>

                {/* Formulaire de réservation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Carte du formulaire */}
                    <motion.div variants={itemVariants} className="relative">
                        {/* Effet de glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#7EC8E3] to-[#90B77D] rounded-2xl md:rounded-3xl blur-xl opacity-20"></div>

                        <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 overflow-hidden">
                            {/* Barre décorative supérieure */}
                            <div className="h-1 bg-gradient-to-r from-[#7EC8E3] via-[#F5E6D3] to-[#90B77D]"></div>

                            {/* Contenu */}
                            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        // Écran de succès - REMPLACE LE FORMULAIRE
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="py-8 md:py-12 flex flex-col items-center text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 md:mb-6"
                                            >
                                                <HiOutlineCheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
                                            </motion.div>
                                            
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                                Réservation confirmée !
                                            </h3>
                                            
                                            <p className="text-sm md:text-base text-white/70 max-w-md mx-auto mb-6 md:mb-8">
                                                Votre demande a bien été enregistrée. Notre équipe vous contactera dans les plus brefs délais pour confirmer votre réservation.
                                            </p>
                                            
                                            <div className="bg-white/5 rounded-xl p-4 md:p-6 mb-6 md:mb-8 w-full max-w-sm">
                                                <p className="text-xs text-white/50 mb-2">Récapitulatif</p>
                                                <div className="space-y-2 text-sm text-white/80 text-left">
                                                    <p><span className="text-[#7EC8E3]">Activité:</span> {activities.find(a => a.value === formData.activity)?.label}</p>
                                                    <p><span className="text-[#7EC8E3]">Date:</span> {new Date(formData.date).toLocaleDateString('fr-FR')} à {formData.time}</p>
                                                    <p><span className="text-[#7EC8E3]">Personnes:</span> {formData.guests}</p>
                                                </div>
                                            </div>
                                            
                                            <motion.button
                                                onClick={handleNewReservation}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="px-6 py-3 bg-gradient-to-r from-[#7EC8E3] to-[#90B77D] text-white rounded-xl font-medium text-sm shadow-lg"
                                            >
                                                Nouvelle réservation
                                            </motion.button>
                                        </motion.div>
                                    ) : (
                                        // Formulaire de réservation
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                                {/* Grille des champs - plus compacte */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                                    {/* Nom complet */}
                                                    <div className="space-y-1">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlineUser className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Nom complet
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Jean Rakoto"
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        />
                                                    </div>

                                                    {/* Email */}
                                                    <div className="space-y-1">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlineMail className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="jean@exemple.com"
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        />
                                                    </div>

                                                    {/* Téléphone */}
                                                    <div className="space-y-1">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlinePhone className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Téléphone
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="034 64 419 00"
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        />
                                                    </div>

                                                    {/* Activité */}
                                                    <div className="space-y-1">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlineGift className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Activité
                                                        </label>
                                                        <select
                                                            name="activity"
                                                            value={formData.activity}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        >
                                                            {activities.map((activity) => (
                                                                <option key={activity.value} value={activity.value} className="bg-[#0A2A4A]">
                                                                    {activity.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    {/* Date */}
                                                    <div className="space-y-1">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlineCalendar className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Date
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="date"
                                                            value={formData.date}
                                                            onChange={handleChange}
                                                            required
                                                            min={new Date().toISOString().split('T')[0]}
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        />
                                                    </div>

                                                    {/* Heure */}
                                                    <div className="space-y-1">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlineClock className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Heure
                                                        </label>
                                                        <select
                                                            name="time"
                                                            value={formData.time}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        >
                                                            <option value="" className="bg-[#0A2A4A]">Sélectionnez</option>
                                                            {timeSlots.map((time) => (
                                                                <option key={time} value={time} className="bg-[#0A2A4A]">
                                                                    {time}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    {/* Nombre de personnes */}
                                                    <div className="space-y-1 md:col-span-2">
                                                        <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                            <HiOutlineUsers className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                            Nombre de personnes
                                                        </label>
                                                        <select
                                                            name="guests"
                                                            value={formData.guests}
                                                            onChange={handleChange}
                                                            className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300"
                                                        >
                                                            {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                                                                <option key={num} value={num} className="bg-[#0A2A4A]">
                                                                    {num} {num > 1 ? 'personnes' : 'personne'}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div className="space-y-1">
                                                    <label className="flex items-center gap-1.5 text-xs md:text-sm text-white/70">
                                                        <HiOutlineChatAlt className="w-3.5 h-3.5 text-[#7EC8E3]" />
                                                        Message (optionnel)
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows={3}
                                                        placeholder="Dites-nous en plus sur vos attentes..."
                                                        className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/20 rounded-lg md:rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#7EC8E3] transition-colors duration-300 resize-none"
                                                    />
                                                </div>

                                                {/* Bouton de soumission - plus compact sur mobile */}
                                                <motion.button
                                                    type="submit"
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.99 }}
                                                    className="relative w-full group overflow-hidden rounded-lg md:rounded-xl mt-2"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#7EC8E3] to-[#90B77D] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                    <div className="relative px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-center gap-1.5 md:gap-2">
                                                        <HiOutlineSparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                                        <span className="text-white font-semibold text-sm md:text-base">Confirmer la réservation</span>
                                                    </div>
                                                </motion.button>

                                                {/* Informations complémentaires */}
                                                <p className="text-center text-[10px] md:text-xs text-white/40">
                                                    En soumettant ce formulaire, vous acceptez d'être contacté par nos équipes.
                                                    Vos données sont confidentielles.
                                                </p>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cartes des avantages - plus compactes */}
                    <motion.div variants={itemVariants} className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
                        {[
                            { icon: <HiOutlineClock className="w-4 h-4 md:w-5 md:h-5" />, text: "Confirmation sous 24h" },
                            { icon: <HiOutlineUsers className="w-4 h-4 md:w-5 md:h-5" />, text: "Groupes acceptés" },
                            { icon: <FaRegGem className="w-4 h-4 md:w-5 md:h-5" />, text: "Service premium" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -2 }}
                                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10"
                            >
                                <div className="text-[#7EC8E3]">{item.icon}</div>
                                <span className="text-xs md:text-sm text-white/70">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Section contact direct - plus compacte */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7EC8E3] to-[#90B77D] blur-xl opacity-20"></div>
                        <div className="relative p-5 md:p-8 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10">
                            <p className="text-white/70 text-xs md:text-sm mb-2 md:mb-3">
                                Vous préférez réserver par téléphone ?
                            </p>
                            <a
                                href="tel:0346441900"
                                className="inline-flex items-center gap-2 text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7EC8E3] to-[#F5E6D3] hover:scale-105 transition-transform duration-300"
                            >
                                <HiOutlinePhone className="w-4 h-4 md:w-6 md:h-6 text-[#7EC8E3]" />
                                034 64 419 00
                            </a>
                            <p className="text-[10px] md:text-xs text-white/40 mt-1 md:mt-2">
                                Disponible 7j/7 de 8h à 18h
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reservation;