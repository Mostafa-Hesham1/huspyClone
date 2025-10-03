import { MapPin, Home, Bed } from 'lucide-react';

interface PropertyCardProps {
  name: string;
  price: string;
  location: string;
  size: string;
  image: string;
}

export default function PropertyCard({ name, price, location, size, image }: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-xl font-semibold">{price}</span>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4" />
          <span>{size}</span>
        </div>
        <div className="flex items-center gap-2">
          <Bed className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
