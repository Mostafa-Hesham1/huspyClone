import { Star, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t, language } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      initials: 'DD',
      name: language === 'ar' ? 'داريها' : 'Dariha',
      rating: 5,
      text: language === 'ar' ? 'السوق لديه فجوة كبيرة في متجر شامل مع خدمة مخصصة. قدم الفريق خدمة شاملة من البداية إلى النهاية.' : 'The market has a huge gap on a one-stop shop with personalized service. The team delivered an end-to-end service.'
    },
    {
      id: 2,
      initials: 'MS',
      name: language === 'ar' ? 'ماكسيم س.' : 'Maxime S.',
      rating: 5,
      text: language === 'ar' ? 'شراء عقار في دبي يمكن أن يكون صعباً ومعقداً وله بعض العقبات. عملنا مع ليفنت تينسل، مستشار الرهن العقاري الأول في Huspy، لشرائنا. نوصي بشدة بليفنت لـ...' : 'Purchasing a property in Dubai can be challenging, complicated and have some obstacles. We worked with Levent Tensel, senior mortgage consultant at Huspy, for our purchase. We highly recommend Levent for his...'
    },
    {
      id: 3,
      initials: 'KK',
      name: language === 'ar' ? 'كاران' : 'Karan',
      rating: 5,
      text: language === 'ar' ? 'حصلوا على أفضل الأسعار من البنوك بأسعار تنافسية من بقية السوق.' : 'They got the best rates from the banks with the competitive rates from rest of the market.'
    },
    {
      id: 4,
      initials: 'AA',
      name: language === 'ar' ? 'ألكسندر' : 'Alexandar',
      rating: 5,
      text: language === 'ar' ? '[Huspy] أرشدنا خلال جميع العمليات بكل صبر واحترافية.' : '[Huspy] guided us through all the process with a lot of patience and professionalism.'
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl font-light mb-12">{t('testimonials.title')}</h2>

        <div className="relative">
          <div className="grid grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 text-gray-700 text-xl font-semibold mb-4 mx-auto">
                  {testimonial.initials}
                </div>
                
                <h3 className="text-center font-semibold mb-3">{testimonial.name}</h3>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
