import { useLanguage } from '../contexts/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-2 items-center">
            <div className="p-16">
              <h2 className="text-4xl font-light mb-4">
                {t('cta.title').split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t('cta.desc')}
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                {t('cta.button')}
              </button>
            </div>
            <div className="h-full">
              <img
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Family moving"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
