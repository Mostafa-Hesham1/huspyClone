export default function ListProperty() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">List your property</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Every Huspy listing gets a professional photo and video shoot along with with top placements on property portals so you can reach more people globally.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              List your property
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
