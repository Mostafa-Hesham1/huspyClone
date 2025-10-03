import { Plus, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight">Huspy™</h1>
        </div>

        <div className="flex items-center gap-12">
          <a href="#mortgages" className="text-base font-medium hover:opacity-70 transition-opacity">
            {t('nav.mortgages')}
          </a>
          <a href="#buy" className="text-base font-medium hover:opacity-70 transition-opacity">
            {t('nav.buy')}
          </a>
          <a href="#list" className="text-base font-medium hover:opacity-70 transition-opacity">
            {t('nav.listProperty')}
          </a>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            <Languages className="w-5 h-5" />
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity">
            <Plus className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </nav>
  );
}
