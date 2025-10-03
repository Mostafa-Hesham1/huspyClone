import { useLanguage } from '../contexts/LanguageContext';

export default function ValueProposition() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-light leading-tight max-w-3xl">
          {t('value.title').split('\n').map((line, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                <span className="text-gray-500">{line}</span>
              ) : (
                <>{line}<br /></>
              )}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
