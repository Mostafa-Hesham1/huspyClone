import { MapPin, Building2, CheckCircle2 } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-3xl p-12 hover:shadow-lg transition-shadow">
            <div className="mb-8">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-gray-600">
                <path
                  d="M30 60 L40 50 L50 60 L60 50 L70 60 L80 70 L90 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="40" cy="45" r="4" fill="currentColor" />
                <circle cx="50" cy="55" r="4" fill="currentColor" />
                <circle cx="60" cy="45" r="4" fill="currentColor" />
                <circle cx="70" cy="55" r="4" fill="currentColor" />
                <circle cx="80" cy="65" r="4" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Trusted by 8000+ UAE home buyers</h3>
            <p className="text-gray-600 leading-relaxed">
              Our experts have over 20 years of experience working for leading global and UAE banks.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 hover:shadow-lg transition-shadow">
            <div className="mb-8 flex gap-4">
              <div className="relative">
                <Building2 className="w-16 h-16 text-gray-700" strokeWidth={1.5} />
                <CheckCircle2 className="w-6 h-6 text-gray-700 absolute -top-2 -right-2" />
              </div>
              <div className="relative">
                <Building2 className="w-16 h-16 text-gray-700" strokeWidth={1.5} />
                <CheckCircle2 className="w-6 h-6 text-gray-700 absolute -top-2 -right-2" />
              </div>
              <div className="relative">
                <Building2 className="w-16 h-16 text-gray-700" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Tailor-made mortgage options</h3>
            <p className="text-gray-600 leading-relaxed">
              Our commitment: Your terms, your dream home financing option. Let us help you find your perfect match.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 hover:shadow-lg transition-shadow">
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-0.5 h-12 bg-gray-700 my-1"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-0.5 h-12 bg-gray-300 my-1"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-500"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-14 pt-2">
                  <span className="text-gray-900 font-medium">Get pre-approved</span>
                  <span className="text-gray-400">Sign the Final Offer Letter</span>
                  <span className="text-gray-400">Disbursal</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Hassle-free from start to finish</h3>
            <p className="text-gray-600 leading-relaxed">
              We guide you throughout the entire mortgage process - from pre-approval to disbursal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
