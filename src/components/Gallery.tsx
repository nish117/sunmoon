import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
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
    }
  ];

  return (
    <div id="gallery" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('gallery.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
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

        <div className="mt-12 text-center">
          <a
            href="/full-gallery"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('gallery.viewMore')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;