export default function Contact() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto">
        <div className="bg-slate-700 rounded-3xl p-16 grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex -space-x-4 mb-6">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Consultant"
                className="w-20 h-20 rounded-full border-4 border-slate-700 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Consultant"
                className="w-20 h-20 rounded-full border-4 border-slate-700 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Consultant"
                className="w-20 h-20 rounded-full border-4 border-slate-700 object-cover"
              />
            </div>
            <h2 className="text-4xl font-light text-white mb-6">
              Speak with our property<br />consultants
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              With years of real estate experience, our team will guide you through every step of the home buying process.
            </p>
          </div>

          <div>
            <button className="w-full bg-white text-black px-8 py-5 rounded-xl font-medium hover:bg-gray-100 transition-colors text-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
