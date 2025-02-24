import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('contact.links')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">{t('nav.home')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">{t('nav.gallery')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">{t('nav.contact')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Japanese Language Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;