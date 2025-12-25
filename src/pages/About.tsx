import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// About page - redirects to home page #about section since all content is there
export const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page's about section
    navigate('/#about');
    // Scroll to about section after navigation
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [navigate]);

  return null;
};