import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.title': 'Your Gateway to Japan',
    'hero.subtitle': 'Comprehensive Japanese language education and consultation services for students and professionals. Start your journey to study or work in Japan with us.',
    'hero.getStarted': 'Get Started',
    'hero.learnMore': 'Learn More',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions for your Japanese language and career goals',
    'services.study.title': 'Study in Japan',
    'services.study.description': 'Comprehensive support for students seeking to study at Japanese universities and language schools.',
    'services.work.title': 'Work Visa Support',
    'services.work.description': 'Expert assistance in securing work visas and finding employment opportunities in Japan.',
    'services.online.title': 'Online Classes',
    'services.online.description': 'Interactive online Japanese language classes with experienced native speakers.',
    'services.physical.title': 'Physical Classes',
    'services.physical.description': 'Traditional classroom-based Japanese language instruction in a conducive learning environment.',
    'gallery.title': 'Video Gallery',
    'gallery.subtitle': 'Learn from our educational content and success stories',
    'gallery.viewMore': 'View More Videos',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for any inquiries or support',
    'contact.hours': 'Office Hours',
    'contact.links': 'Quick Links',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',
    'contact.form.error': 'Failed to send message. Please try again later.',
    'contact.hours.weekday': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.hours.saturday': 'Saturday: 10:00 AM - 3:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.services': 'サービス',
    'nav.gallery': 'ギャラリー',
    'nav.contact': 'お問い合わせ',
    'hero.title': '日本への扉を開く',
    'hero.subtitle': '学生や専門家のための包括的な日本語教育とコンサルティングサービス。日本での留学や就職への第一歩を私たちと共に。',
    'hero.getStarted': 'はじめる',
    'hero.learnMore': '詳しく見る',
    'services.title': 'サービス内容',
    'services.subtitle': '日本語学習とキャリア目標のための総合的なソリューション',
    'services.study.title': '日本留学',
    'services.study.description': '日本の大学や語学学校への留学を目指す学生への総合的なサポート。',
    'services.work.title': '就労ビザサポート',
    'services.work.description': '就労ビザの取得と日本での就職機会の獲得をサポート。',
    'services.online.title': 'オンライン授業',
    'services.online.description': '経験豊富なネイティブ講師によるインタラクティブなオンライン日本語レッスン。',
    'services.physical.title': '対面授業',
    'services.physical.description': '充実した学習環境での従来型の教室ベース日本語指導。',
    'gallery.title': '動画ギャラリー',
    'gallery.subtitle': '教育コンテンツと成功事例から学ぶ',
    'gallery.viewMore': 'もっと見る',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'ご質問やサポートについて、お気軽にお問い合わせください',
    'contact.hours': '営業時間',
    'contact.links': 'クイックリンク',
    'contact.form.title': 'メッセージを送る',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.phone': '電話番号',
    'contact.form.message': 'メッセージ',
    'contact.form.send': '送信',
    'contact.form.sending': '送信中...',
    'contact.form.success': 'メッセージが送信されました。近日中にご連絡いたします。',
    'contact.form.error': 'メッセージの送信に失敗しました。後でもう一度お試しください。',
    'contact.hours.weekday': '月曜 - 金曜: 9:00 - 18:00',
    'contact.hours.saturday': '土曜: 10:00 - 15:00',
    'contact.hours.sunday': '日曜: 休業',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};