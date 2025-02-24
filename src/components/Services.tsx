import React from 'react';
import { GraduationCap, Briefcase, Video, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      titleKey: 'services.study.title',
      descriptionKey: 'services.study.description'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      titleKey: 'services.work.title',
      descriptionKey: 'services.work.description'
    },
    {
      icon: <Video className="h-8 w-8 text-indigo-600" />,
      titleKey: 'services.online.title',
      descriptionKey: 'services.online.description'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      titleKey: 'services.physical.title',
      descriptionKey: 'services.physical.description'
    }
  ];

  return (
    <div id="services" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex p-3 bg-white rounded-lg shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-medium text-gray-900 text-center mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;