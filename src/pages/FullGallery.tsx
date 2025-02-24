import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const FullGallery = () => {
  const { t } = useLanguage();
  
  const videos = [
    {
      id: "1",
      title: "Basic Japanese Greetings",
      embedId: "n7rQSe2ejsA"
    },
    {
      id: "2",
      title: "JLPT N5 Study Tips",
      embedId: "5oxdPY9eH48"
    },
    {
      id: "3",
      title: "Life in Tokyo",
      embedId: "6EdWg6F5bxE"
    },
    {
      id: "4",
      title: "Japanese Particles Explained",
      embedId: "pSvH9vH60Ig"
    },
    {
      id: "5",
      title: "Kanji Learning Techniques",
      embedId: "mPppuDZYBzw"
    },
    {
      id: "6",
      title: "Japanese Business Etiquette",
      embedId: "A8jdyTbz3O4"
    },
    {
      id: "7",
      title: "Japanese Pronunciation Guide",
      embedId: "QuDgr6ot1g4"
    },
    {
      id: "8",
      title: "JLPT N4 Preparation",
      embedId: "3qPxV7PK7Cg"
    },
    {
      id: "9",
      title: "Working in Japan Tips",
      embedId: "YMyofREc4Zw"
    },
    {
      id: "10",
      title: "Japanese Culture Insights",
      embedId: "gVyIaRz2L4c"
    },
    {
      id: "11",
      title: "Japanese Reading Practice",
      embedId: "yExI-Q_kQNg"
    },
    {
      id: "12",
      title: "Living in Japan Experience",
      embedId: "NJ3JOqiXhUE"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-8">
          <LanguageToggle />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {t('gallery.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video .id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullGallery;