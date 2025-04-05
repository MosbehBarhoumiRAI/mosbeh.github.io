import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image - Replace with actual image path when available */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              {/* Placeholder image - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white text-6xl font-bold">
                MB
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">MLOps Engineer & AI Specialist</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experienced MLOps Engineer with a strong background in Machine Learning, Deep Learning, and DevOps practices. 
              Skilled in developing and deploying scalable AI solutions, automating ML pipelines, and optimizing system performance. 
              Adept at bridging the gap between data science and operations to deliver robust, production-ready AI systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <span>Location: Tunis, Tunisia</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <span>Email: mosbeh.barhoumi.ai@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <span>Languages: Arabic, French, English</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                <span>Availability: Full-time</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/mosbeh-barhoumi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                LinkedIn
              </a>
              <a 
                href="#" 
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
