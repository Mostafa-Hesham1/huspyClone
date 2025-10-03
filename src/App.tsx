import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Properties from './components/Properties';
import ListProperty from './components/ListProperty';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Features />
      <Partners />
      <CTASection />
      <Properties />
      <ListProperty />
      <Blog />
      <Testimonials />
      <Contact />
      <footer className="bg-gray-50 py-16 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-5 gap-12">
            <div className="col-span-1">
              <h2 className="text-2xl font-bold mb-6">{t('footer.tagline')}</h2>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('footer.mortgages')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">{t('footer.howItWorks')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.calculators')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.affordability')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.commercial')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('footer.properties')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">{t('footer.buy')}</a></li>
                <li><a href="#" className="hover:text-black">{t('nav.listProperty')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('footer.partners')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">{t('footer.brokers')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.agents')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('footer.more')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">{t('footer.about')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.careers')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.blog')}</a></li>
                <li><a href="#" className="hover:text-black">{t('footer.legal')}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4">Huspy™</h2>
                <p className="text-sm text-gray-600 max-w-md">
                  7th Floor, The Bay Gate,<br />
                  Business Bay, Dubai<br />
                  United Arab Emirates<br />
                  PO Box 6769, Dubai ******<br />
                  contact@huspy.io<br />
                  +971 44 9059 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
