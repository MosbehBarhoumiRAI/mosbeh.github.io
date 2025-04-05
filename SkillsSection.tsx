'use client';

import { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'mlops', name: 'MLOps & DevOps' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'data', name: 'Data Engineering' },
    { id: 'software', name: 'Software Engineering' },
    { id: 'tools', name: 'Tools & Platforms' }
  ];
  
  const skills = [
    { name: 'CI/CD (Jenkins)', category: 'mlops', level: 90 },
    { name: 'Docker', category: 'mlops', level: 95 },
    { name: 'Kubernetes', category: 'mlops', level: 85 },
    { name: 'AWS', category: 'mlops', level: 80 },
    { name: 'Monitoring & Logging', category: 'mlops', level: 85 },
    
    { name: 'Deep Learning', category: 'ml', level: 90 },
    { name: 'Computer Vision', category: 'ml', level: 95 },
    { name: 'NLP', category: 'ml', level: 85 },
    { name: 'TensorFlow', category: 'ml', level: 90 },
    { name: 'PyTorch', category: 'ml', level: 85 },
    { name: 'Scikit-learn', category: 'ml', level: 90 },
    { name: 'YOLO', category: 'ml', level: 85 },
    { name: 'Detectron2', category: 'ml', level: 80 },
    
    { name: 'Data Processing', category: 'data', level: 85 },
    { name: 'ETL Pipelines', category: 'data', level: 80 },
    { name: 'Pandas', category: 'data', level: 90 },
    { name: 'SQL', category: 'data', level: 85 },
    
    { name: 'Python', category: 'software', level: 95 },
    { name: 'Flask', category: 'software', level: 90 },
    { name: 'RESTful APIs', category: 'software', level: 85 },
    { name: 'Linux', category: 'software', level: 90 },
    { name: 'Git', category: 'software', level: 85 },
    
    { name: 'Label Studio', category: 'tools', level: 80 },
    { name: 'Roboflow', category: 'tools', level: 85 },
    { name: 'Apache JMeter', category: 'tools', level: 75 },
    { name: 'Locust', category: 'tools', level: 75 },
    { name: 'k6', category: 'tools', level: 70 },
    { name: 'wrk', category: 'tools', level: 70 }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Certifications & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border-t-4 border-blue-500">
              <div className="text-blue-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Data Science Competitions</h4>
              <p className="text-gray-400">Achieved top rankings (top 3) in more than 10 of the 50 data science competitions participated in.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border-t-4 border-blue-500">
              <div className="text-blue-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Certified Kubernetes Application Developer (CKAD)</h4>
              <p className="text-gray-400">KodeKloud</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border-t-4 border-blue-500">
              <div className="text-blue-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">TensorFlow Developer Certification</h4>
              <p className="text-gray-400">Coursera</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border-t-4 border-blue-500">
              <div className="text-blue-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Professional Data Scientist and Data Analyst Certification</h4>
              <p className="text-gray-400">Datacamp</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border-t-4 border-blue-500">
              <div className="text-blue-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Machine Learning Scientist with Python Certification</h4>
              <p className="text-gray-400">Datacamp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
