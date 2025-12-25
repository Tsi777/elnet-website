import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Subsidiaries page - redirects to home page #subsidiaries section since all content is there
export const Subsidiaries: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page's subsidiaries section
    navigate('/#subsidiaries');
    // Scroll to subsidiaries section after navigation
    setTimeout(() => {
      const subsidiariesSection = document.getElementById('subsidiaries');
      if (subsidiariesSection) {
        subsidiariesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [navigate]);

  return null;
};
