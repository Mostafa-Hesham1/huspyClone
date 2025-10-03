import { ArrowUpRight, MapPin, Home, Bed } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { useLanguage } from '../contexts/LanguageContext';

export default function Properties() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  
  const properties = [
    {
      id: 1,
      name: language === 'ar' ? 'أورايز بيوند' : 'Orise Beyond',
      price: language === 'ar' ? '١.٩ مليون درهم' : 'AED 1.9 M',
      location: language === 'ar' ? 'المدينة البحرية' : 'Maritime City',
      size: '1,2,3,4',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: language === 'ar' ? 'جاردينيا باي' : 'Gardenia Bay',
      price: language === 'ar' ? '٨٠٥ ألف درهم' : 'AED 805K',
      location: language === 'ar' ? 'جزيرة ياس' : 'Yas Island',
      size: '1,2,3,4',
      image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: language === 'ar' ? 'تيرا هايتس' : 'Terra Heights',
      price: language === 'ar' ? '١.٥ مليون درهم' : 'AED 1.5 M',
      location: language === 'ar' ? 'إكسبو دبي' : 'Expo Dubai',
      size: '1,2',
      image: 'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: language === 'ar' ? 'نوايف ويست هايتس' : 'Nawayef West Heights',
      price: language === 'ar' ? '١٠ مليون درهم' : 'AED 10 M',
      location: language === 'ar' ? 'جزيرة الحديريات' : 'Hudayriyat Island',
      size: '4,5',
      image: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="inline-block bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-12">
          {t('properties.badge')}
        </div>

        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-5xl font-light mb-4">{t('properties.title')}</h2>
            <p className="text-2xl text-gray-400 font-light">
              {t('properties.subtitle').split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all">
            {t('properties.viewMore')}
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}