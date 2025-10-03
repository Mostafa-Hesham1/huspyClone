import { useLanguage } from '../contexts/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-block bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-12">
          {t('partners.badge')}
        </div>
        <h2 className="text-4xl font-light mb-16">{t('partners.title')}</h2>

        <div className="flex items-center justify-between gap-12 opacity-60">
          <div className="text-2xl font-bold">ADIB</div>
          <div className="text-xl font-semibold">ARAB BANK</div>
          <div className="text-xl font-semibold">Commercial Bank of Dubai</div>
          <div className="text-xl font-semibold">Dubai Islamic Bank</div>
        </div>
      </div>
    </section>
  );
}
