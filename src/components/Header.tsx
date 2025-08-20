import SocialIcons from './SocialIcons';

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-4 sticky top-0 bg-white/80 backdrop-blur-sm z-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl md:text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Asher Kilner
          </a>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              {['about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="capitalize text-gray-700 hover:text-indigo-600 transition-colors text-sm md:text-base"
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="hidden md:block h-6 w-px bg-gray-200 mx-2"></div>
            <SocialIcons className="hidden md:flex" />
          </div>
        </div>
      </div>
    </header>
  );
}
