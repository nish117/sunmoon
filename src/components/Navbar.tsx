import React, { useState } from 'react';
import { Menu, X, Globe2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">日本語コンサルティング</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">{t('nav.home')}</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">{t('nav.services')}</a>
            <a href="#gallery" className="text-gray-700 hover:text-indigo-600">{t('nav.gallery')}</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">{t('nav.contact')}</a>
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">{t('nav.home')}</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">{t('nav.services')}</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">{t('nav.gallery')}</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">{t('nav.contact')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;