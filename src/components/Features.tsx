import { useLanguage } from '../contexts/LanguageContext';
import mapGif from '../assets/images/map.gif';
import houseGif from '../assets/images/house.gif';
import keyGif from '../assets/images/key.gif';

export default function Features() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-3xl p-12 hover:shadow-lg transition-shadow">
            <div className="mb-8 flex items-center justify-center">
              <img src={mapGif} alt="Trusted buyers" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{t('feature1.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('feature1.desc')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 hover:shadow-lg transition-shadow">
            <div className="mb-8 flex items-center justify-center">
              <img src={houseGif} alt="Tailor-made options" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{t('feature2.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('feature2.desc')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 hover:shadow-lg transition-shadow">
            <div className="mb-8 flex items-center justify-center">
              <img src={keyGif} alt="Hassle-free process" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{t('feature3.title')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('feature3.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
