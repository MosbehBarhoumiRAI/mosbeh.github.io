import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated particles or grid (decorative) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="block text-blue-500 mt-2">Mosbeh Barhoumi</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            MLOps Engineer & AI Specialist
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Experienced in developing and deploying scalable AI solutions, 
            automating ML pipelines, and optimizing system performance. 
            Bridging the gap between data science and operations.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/experience" 
              className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-600 rounded-md transition-colors"
            >
              View Experience
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
