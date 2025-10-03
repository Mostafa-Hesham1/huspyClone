import { ArrowUpRight } from 'lucide-react';
import TestimonialBubble from './TestimonialBubble';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden" style={{ height: '600px' }}>
          <video
            loop
            muted
            autoPlay
            playsInline
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '0px',
              transform: 'scale(1.01)'
            }}
            src="https://images.pexels.com/videos/3129957/free-video-3129957.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            poster="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          <div className="absolute top-12 left-12 max-w-xl z-10">
            <h1 className="text-7xl font-light text-white leading-tight mb-8">
              Home buying,<br />
              made simple
            </h1>
          </div>

          <TestimonialBubble
            text="Dealing with Huspy was truly a 5-star experience! From day one right until the end, the customer service and support was amazing.."
            author="Claire D"
            rating={5}
            className="absolute top-[45%] right-32 max-w-md"
          />

          <TestimonialBubble
            text="I would like to thank Huspy for their professional expertise in guiding a new home buyer and getting the best financing for myself.."
            author="Rene M"
            rating={5}
            className="absolute bottom-24 left-32 max-w-md"
          />

          <div className="absolute bottom-8 left-12 flex items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Forbes_logo.svg/320px-Forbes_logo.svg.png" alt="Forbes" className="h-6 opacity-80" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fast_Company_logo.svg/320px-Fast_Company_logo.svg.png" alt="Fast Company" className="h-5 opacity-80" />
            <span className="text-white text-lg font-medium opacity-90">Entrepreneur</span>
          </div>

          <div className="absolute bottom-8 right-8 flex gap-4">
            <div className="bg-white rounded-2xl p-6 w-80 hover:shadow-2xl transition-shadow cursor-pointer group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">Mortgages</h3>
                <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-gray-600 text-sm">Find a mortgage rate that fits your needs.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 w-80 hover:shadow-2xl transition-shadow cursor-pointer group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">Properties</h3>
                <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-gray-600 text-sm">Find top properties, from off-plan to move-in ready.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
