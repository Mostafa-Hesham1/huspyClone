import { Plus } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight">Huspy™</h1>
        </div>

        <div className="flex items-center gap-12">
          <a href="#mortgages" className="text-base font-medium hover:opacity-70 transition-opacity">
            Mortgages
          </a>
          <a href="#buy" className="text-base font-medium hover:opacity-70 transition-opacity">
            Buy
          </a>
          <a href="#list" className="text-base font-medium hover:opacity-70 transition-opacity">
            List your Property
          </a>
          <button className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity">
            <Plus className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </nav>
  );
}
