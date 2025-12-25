import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// WhyThisCompany page - redirects to home page #why-this-company section since all content is there
export const WhyThisCompany: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page's why section
    navigate('/#why-this-company');
    // Scroll to why section after navigation
    setTimeout(() => {
      const whySection = document.getElementById('why-this-company');
      if (whySection) {
        whySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [navigate]);

  return null;
};
