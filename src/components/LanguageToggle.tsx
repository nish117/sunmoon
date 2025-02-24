import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
    >
      <span className="text-sm font-medium">
        {language === 'en' ? '日本語' : 'English'}
      </span>
    </button>
  );
}

export default LanguageToggle;