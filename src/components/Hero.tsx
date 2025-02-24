import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Tokyo cityscape"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex space-x-4">
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              {t('hero.getStarted')}
            </a>
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;