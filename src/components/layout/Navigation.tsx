import { useEffect, useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

// eslint-disable-next-line no-empty-pattern
const Navigation = ({ }: NavigationProps) => {
  const [, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'activites', 'tarifs', 'evenements', 'galerie', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // Ce composant est utilisé pour la logique, pas pour le rendu
};

export default Navigation;