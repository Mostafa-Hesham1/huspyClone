import { ArrowUpRight, MapPin, Bed, Home } from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Properties from './components/Properties';
import ListProperty from './components/ListProperty';
import Contact from './components/Contact';
import Partners from './components/Partners';

function App() {
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
      <Contact />
    </div>
  );
}

export default App;
