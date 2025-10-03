import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import buildingVideo from '../assets/videos/building.mp4';

export default function Hero() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section className="pt-20 pb-32 px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative">
          {/* Video Container with L-shaped cut on bottom-right (flipped for RTL) */}
          <div className="relative overflow-hidden" style={{ 
            borderRadius: '32px',
            height: '500px',
            clipPath: isRTL 
              ? 'polygon(0 0, 100% 0, 100% 100%, 35% 100%, 35% 75%, 0 75%)' // L-shape flipped for RTL (bottom-left cut)
              : 'polygon(0 0, 100% 0, 100% 75%, 65% 75%, 65% 100%, 0 100%)' // Original L-shape (bottom-right cut)
          }}>
            <video
              loop
              muted
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'scale(1.01)' }}
            >
              <source src={buildingVideo} type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/40 to-transparent`} />

            {/* Title - Left side for LTR, Right side for RTL */}
            <div className={`absolute ${isRTL ? 'right-16' : 'left-16'} top-[35%] -translate-y-1/2 z-10`}>
              <svg viewBox="0 0 23 23" className="absolute -top-6 -left-6 w-6 h-6 text-transparent" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              <svg viewBox="0 0 23 23" className="absolute -top-6 -right-6 w-6 h-6 text-transparent" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              <h1 className={`text-[68px] font-light text-white leading-[1.1] ${isRTL ? 'text-right' : 'text-left'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Georgia, serif' }}>
                {t('hero.title').split('\n')[0]}
              </h1>
              <h1 className={`text-[68px] font-light text-white leading-[1.1] ${isRTL ? 'text-right' : 'text-left'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Georgia, serif' }}>
                {t('hero.title').split('\n')[1]}
              </h1>
            </div>

            {/* Logos - Bottom Left for LTR, Bottom Right for RTL */}
            <div className={`absolute bottom-10 ${isRTL ? 'right-16' : 'left-16'} z-20`}>
              <svg viewBox="0 0 23 23" className="absolute top-0 left-0 w-6 h-6 text-transparent" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              <svg viewBox="0 0 23 23" className="absolute top-0 right-0 w-6 h-6 text-transparent" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              <img 
                src="https://a.storyblok.com/f/165304/388x24/682aeb62b9/featured_logos.png" 
                alt="Featured in Forbes, Fast Company, Entrepreneur" 
                className="h-6"
                style={{ maxWidth: '400px' }}
              />
            </div>
          </div>

          {/* CTA Cards - Positioned in the L-shaped cut (right for LTR, left for RTL) */}
          <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} flex gap-3`} style={{ width: '35%' }}>
            {/* Mortgages Card */}
            <a href="#mortgages" className="relative bg-white overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all flex-1" style={{ borderRadius: '20px', padding: '28px 32px', height: '125px' }}>
              {/* Curved corner - Top Left */}
              <svg viewBox="0 0 23 23" className="absolute top-0 left-0 w-6 h-6 text-[#f5f5f5]" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              {/* Curved corner - Top Right */}
              <svg viewBox="0 0 23 23" className="absolute top-0 right-0 w-6 h-6 text-[#f5f5f5]" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-normal text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>{t('hero.mortgages')}</h3>
                  <div className="flex-shrink-0 transform rotate-45">
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{t('hero.mortgagesDesc')}</p>
              </div>
            </a>

            {/* Properties Card */}
            <a href="#properties" className="relative bg-white overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all flex-1" style={{ borderRadius: '20px', padding: '28px 32px', height: '125px' }}>
              {/* Curved corner - Top Left */}
              <svg viewBox="0 0 23 23" className="absolute top-0 left-0 w-6 h-6 text-[#f5f5f5]" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              {/* Curved corner - Top Right */}
              <svg viewBox="0 0 23 23" className="absolute top-0 right-0 w-6 h-6 text-[#f5f5f5]" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 23H23C10.2975 23 0 12.7025 0 0V23Z" fill="currentColor" />
              </svg>
              
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-normal text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>{t('hero.properties')}</h3>
                  <div className="flex-shrink-0 transform rotate-45">
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{t('hero.propertiesDesc')}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
