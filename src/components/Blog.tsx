import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t, language } = useLanguage();
  
  const blogPosts = [
    {
      id: 1,
      tag: language === 'ar' ? 'الحياة في Huspy' : 'Life at Huspy',
      title: language === 'ar' ? 'الحياة في Huspy: تعرف على كريستوفر شيها' : 'Life at Huspy: Meet Christopher Chiha',
      excerpt: language === 'ar' ? 'هذا الأسبوع، نجلس مع كريستوفر شيها، قائد تكنولوجيا التسويق لدينا، الذي يقود استراتيجيات تكنولوجيا التسويق في Huspy، مما يضمن التواصل السلس...' : 'This week, we sit down with Christopher Chiha, our Martech Lead, who drives marketing tech strategies at Huspy, ensuring smooth communication and product...',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      tag: language === 'ar' ? 'الحياة في Huspy' : 'Life at Huspy',
      title: language === 'ar' ? 'الحياة في Huspy: تعرف على إيلينا أوريبي' : 'Life at Huspy: Meet Elena Uribe',
      excerpt: language === 'ar' ? 'هذا الأسبوع، نجلس مع إيلينا أوريبي، المديرة التنفيذية للحسابات المخصصة لدينا في Huspy. انضمت إلى Huspy لأنها تؤمن بعرض قيمة الشركة...' : 'This week, we sit down with Elena Uribe, our dedicated Account Executive at Huspy. She joined Huspy because she believes in the company\'s value proposition and its...',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      tag: language === 'ar' ? 'الحياة في Huspy' : 'Life at Huspy',
      title: language === 'ar' ? 'الحياة في Huspy: تعرف على مريم مالك' : 'Life at Huspy: Meet Mariam Malik',
      excerpt: language === 'ar' ? 'هذا الأسبوع، نجلس مع مريم مالك، مهندسة حلول CRM لدينا التي تزدهر في البيئات السريعة. انضمت إلى Huspy للمساهمة في فريق...' : 'This week, we sit down with Mariam Malik, our CRM Solutions Engineer who thrives in fast-paced environments. She joined Huspy to contribute to a team...',
      image: 'https://images.pexels.com/photos/3184358/pexels-photo-3184358.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      tag: language === 'ar' ? 'الإنتاجية' : 'Productivity',
      title: language === 'ar' ? 'وسيط مشغول؟ اغلب يومك بهذه الحيل الخمس لإدارة الوقت' : 'Busy Broker? Conquer Your Day with These 5 Time Management Hacks',
      excerpt: language === 'ar' ? 'هل يبدو يومك كزوبعة من فهم احتياجات العملاء، ومطاردة الأوراق، والمكالمات الهاتفية المستمرة بين كل مهمة؟ لست وحدك. الوقت...' : 'Does your day feel like a whirlwind of understanding client needs, chasing down paperwork, and constant phone calls in between each task? You\'re not alone. Time...',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      isDark: true
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-medium mb-12">
          {t('blog.badge')}
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="text-5xl font-light">{t('blog.title')}</h2>
          <a href="#" className="flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all">
            {t('blog.viewBlog')}
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  post.isDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  {post.tag}
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                
                <button className="w-full border border-gray-900 text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-colors mt-auto">
                  {t('blog.keepReading')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
