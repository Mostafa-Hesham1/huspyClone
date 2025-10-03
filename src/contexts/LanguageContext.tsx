import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.mortgages': 'Mortgages',
    'nav.buy': 'Buy',
    'nav.listProperty': 'List your Property',
    
    // Hero
    'hero.title': 'Home buying,\nmade simple',
    'hero.mortgages': 'Mortgages',
    'hero.mortgagesDesc': 'Find a mortgage rate that fits your needs.',
    'hero.properties': 'Properties',
    'hero.propertiesDesc': 'Find top properties, from off-plan to move-in ready.',
    'hero.testimonial1': 'Dealing with Huspy was truly a 5-star experience! From day one right until the end, the customer service and support was amazing..',
    'hero.testimonial2': 'I would like to thank Huspy for their professional expertise in guiding a new home buyer and getting the best financing for myself..',
    
    // Value Proposition
    'value.title': 'From finding a home to financing it, we\nare the one-stop solution to making\nyour dream a reality.',
    
    // Features
    'feature1.title': 'Trusted by 8000+ UAE home buyers',
    'feature1.desc': 'Our experts have over 20 years of experience working for leading global and UAE banks.',
    'feature2.title': 'Tailor-made mortgage options',
    'feature2.desc': 'Our commitment: Your terms, your dream home financing option. Let us help you find your perfect match.',
    'feature3.title': 'Hassle-free from start to finish',
    'feature3.desc': 'We guide you throughout the entire mortgage process - from pre-approval to disbursal.',
    'feature3.step1': 'Get pre-approved',
    'feature3.step2': 'Sign the Final Offer Letter',
    'feature3.step3': 'Disbursal',
    
    // Partners
    'partners.badge': 'Mortgages',
    'partners.title': 'We\'re the leading mortgage provider in the UAE',
    
    // CTA
    'cta.title': 'Why wait 2 months?\nGet a mortgage in 2 weeks',
    'cta.desc': 'With Huspy, you don\'t need to wait 2 months to get a mortgage. Skip the line with a Huspy mortgage fast pass for selected leading banks.',
    'cta.button': 'Learn more',
    
    // Properties
    'properties.badge': 'Properties',
    'properties.title': 'The best properties at your fingertips.',
    'properties.subtitle': 'Be the first to learn about the latest project launches and\nbook through Huspy.',
    'properties.viewMore': 'View more',
    
    // List Property
    'listProperty.title': 'List your property',
    'listProperty.desc': 'Every Huspy listing gets a professional photo and video shoot along with with top placements on property portals so you can reach more people globally.',
    'listProperty.button': 'List your property',
    
    // Blog
    'blog.badge': 'Learn how we do it',
    'blog.title': 'Home buying from A to Z',
    'blog.viewBlog': 'View our blog',
    'blog.keepReading': 'Keep reading',
    
    // Testimonials
    'testimonials.title': 'Cheers from Those We\'ve Served',
    
    // Contact
    'contact.title': 'Speak with our property\nconsultants',
    'contact.desc': 'With years of real estate experience, our team will guide you through every step of the home buying process.',
    'contact.button': 'Contact us',
    
    // Footer
    'footer.tagline': 'Home buying made simple',
    'footer.mortgages': 'Mortgages',
    'footer.howItWorks': 'How it works',
    'footer.calculators': 'Mortgage calculators',
    'footer.affordability': 'Affordability calculators',
    'footer.commercial': 'Commercial Mortgages',
    'footer.properties': 'Properties',
    'footer.buy': 'Buy',
    'footer.partners': 'Partners',
    'footer.brokers': 'Brokers',
    'footer.agents': 'Agents',
    'footer.more': 'More',
    'footer.about': 'About us',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.legal': 'Legal',
  },
  ar: {
    // Navigation
    'nav.mortgages': 'الرهون العقارية',
    'nav.buy': 'شراء',
    'nav.listProperty': 'قائمة الممتلكات الخاصة بك',
    
    // Hero
    'hero.title': 'شراء المنزل،\nأصبح بسيطاً',
    'hero.mortgages': 'الرهون العقارية',
    'hero.mortgagesDesc': 'ابحث عن سعر رهن عقاري يناسب احتياجاتك.',
    'hero.properties': 'العقارات',
    'hero.propertiesDesc': 'اعثر على أفضل العقارات، من المخططة إلى الجاهزة للسكن.',
    'hero.testimonial1': 'كان التعامل مع Huspy تجربة 5 نجوم حقاً! من اليوم الأول وحتى النهاية، كانت خدمة العملاء والدعم مذهلة..',
    'hero.testimonial2': 'أود أن أشكر Huspy على خبرتهم المهنية في توجيه مشتري المنازل الجدد والحصول على أفضل تمويل لنفسي..',
    
    // Value Proposition
    'value.title': 'من العثور على منزل إلى تمويله، نحن\nالحل الشامل لتحقيق\nحلمك حقيقة.',
    
    // Features
    'feature1.title': 'موثوق به من قبل أكثر من 8000 مشتري منازل في الإمارات',
    'feature1.desc': 'يتمتع خبراؤنا بخبرة تزيد عن 20 عاماً في العمل مع البنوك العالمية والإماراتية الرائدة.',
    'feature2.title': 'خيارات رهن عقاري مصممة خصيصاً',
    'feature2.desc': 'التزامنا: شروطك، خيار تمويل منزل أحلامك. دعنا نساعدك في العثور على التطابق المثالي.',
    'feature3.title': 'خالٍ من المتاعب من البداية إلى النهاية',
    'feature3.desc': 'نرشدك طوال عملية الرهن العقاري بالكامل - من الموافقة المسبقة إلى الصرف.',
    'feature3.step1': 'الحصول على الموافقة المسبقة',
    'feature3.step2': 'التوقيع على خطاب العرض النهائي',
    'feature3.step3': 'الصرف',
    
    // Partners
    'partners.badge': 'الرهون العقارية',
    'partners.title': 'نحن مزود الرهن العقاري الرائد في الإمارات',
    
    // CTA
    'cta.title': 'لماذا الانتظار شهرين؟\nاحصل على رهن عقاري في أسبوعين',
    'cta.desc': 'مع Huspy، لا تحتاج إلى الانتظار شهرين للحصول على رهن عقاري. تخطى الصف مع تصريح مرور سريع للرهن العقاري من Huspy للبنوك الرائدة المختارة.',
    'cta.button': 'اعرف المزيد',
    
    // Properties
    'properties.badge': 'العقارات',
    'properties.title': 'أفضل العقارات في متناول يدك.',
    'properties.subtitle': 'كن أول من يتعرف على أحدث إطلاقات المشاريع و\nاحجز من خلال Huspy.',
    'properties.viewMore': 'عرض المزيد',
    
    // List Property
    'listProperty.title': 'قائمة الممتلكات الخاصة بك',
    'listProperty.desc': 'تحصل كل قائمة Huspy على تصوير احترافي للصور والفيديو مع أفضل المواضع في بوابات العقارات حتى تتمكن من الوصول إلى المزيد من الأشخاص عالمياً.',
    'listProperty.button': 'قائمة الممتلكات الخاصة بك',
    
    // Blog
    'blog.badge': 'تعلم كيف نفعل ذلك',
    'blog.title': 'شراء المنزل من الألف إلى الياء',
    'blog.viewBlog': 'عرض مدونتنا',
    'blog.keepReading': 'تابع القراءة',
    
    // Testimonials
    'testimonials.title': 'تحيات من أولئك الذين خدمناهم',
    
    // Contact
    'contact.title': 'تحدث مع مستشاري\nالممتلكات لدينا',
    'contact.desc': 'مع سنوات من الخبرة في مجال العقارات، سيرشدك فريقنا خلال كل خطوة من خطوات عملية شراء المنزل.',
    'contact.button': 'اتصل بنا',
    
    // Footer
    'footer.tagline': 'شراء المنزل أصبح بسيطاً',
    'footer.mortgages': 'الرهون العقارية',
    'footer.howItWorks': 'كيف يعمل',
    'footer.calculators': 'حاسبات الرهن العقاري',
    'footer.affordability': 'حاسبات القدرة على تحمل التكاليف',
    'footer.commercial': 'الرهون العقارية التجارية',
    'footer.properties': 'العقارات',
    'footer.buy': 'شراء',
    'footer.partners': 'الشركاء',
    'footer.brokers': 'الوسطاء',
    'footer.agents': 'الوكلاء',
    'footer.more': 'المزيد',
    'footer.about': 'عنا',
    'footer.careers': 'الوظائف',
    'footer.blog': 'المدونة',
    'footer.legal': 'قانوني',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
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
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
