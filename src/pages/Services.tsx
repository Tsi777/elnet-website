import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Services page - redirects to home page #services section since all content is there
export const Services: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page's services section
    navigate('/#services');
    // Scroll to services section after navigation
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [navigate]);

  return null;
};
