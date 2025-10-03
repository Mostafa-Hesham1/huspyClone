import { Star } from 'lucide-react';

interface TestimonialBubbleProps {
  text: string;
  author: string;
  rating: number;
  className?: string;
}

export default function TestimonialBubble({ text, author, rating, className = '' }: TestimonialBubbleProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl ${className}`}>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">{text}</p>
      <p className="text-gray-900 text-sm font-medium">{author}</p>
    </div>
  );
}
