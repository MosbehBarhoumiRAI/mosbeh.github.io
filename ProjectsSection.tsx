'use client';

import { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'nlp', name: 'NLP' },
    { id: 'mlops', name: 'MLOps' }
  ];
  
  // Sample projects based on CV experience
  const projects = [
    {
      id: 1,
      title: 'Automotive Damage Assessment System',
      description: 'Deep learning system for car part detection and damage assessment, achieving 95% accuracy.',
      category: ['ml', 'cv', 'mlops'],
      image: '/images/projects/car-damage.jpg',
      tags: ['TensorFlow', 'Computer Vision', 'Jenkins', 'Docker']
    },
    {
      id: 2,
      title: 'OCR Integration Platform',
      description: 'Fine-tuned and deployed multiple OCR web services integrating PaddleOCR, Tesseract, and SURYA OCR engines.',
      category: ['ml', 'cv', 'mlops'],
      image: '/images/projects/ocr.jpg',
      tags: ['OCR', 'Flask', 'API Integration', 'Docker']
    },
    {
      id: 3,
      title: 'Fraud Detection System',
      description: 'Analyzed and detected fraud in car accident datasets using clustering algorithms and LLM provider APIs.',
      category: ['ml', 'mlops'],
      image: '/images/projects/fraud.jpg',
      tags: ['Clustering', 'LLM', 'Data Engineering']
    },
    {
      id: 4,
      title: 'VITON Pre-processing Pipeline',
      description: 'Efficient pre-processing pipeline for the VITON dataset, integrating human parsing, pose estimation, and cloth mask generation.',
      category: ['ml', 'cv'],
      image: '/images/projects/viton.jpg',
      tags: ['PyTorch', 'Detectron2', 'Computer Vision']
    },
    {
      id: 5,
      title: 'Multilingual Chatbot',
      description: 'Developed a multilingual chatbot using TensorFlow and NLP techniques, improving user query response accuracy by 35%.',
      category: ['ml', 'nlp'],
      image: '/images/projects/chatbot.jpg',
      tags: ['TensorFlow', 'NLP', 'Chatbot']
    },
    {
      id: 6,
      title: 'MLOps Pipeline with ELK Monitoring',
      description: 'Developed monitoring systems using ELK stack, reducing mean time to resolution for production issues.',
      category: ['mlops'],
      image: '/images/projects/elk.jpg',
      tags: ['ELK Stack', 'Monitoring', 'CI/CD', 'Jenkins']
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in MLOps, Machine Learning, Computer Vision, and NLP.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                <span className="text-xl font-bold text-white">{project.title}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-blue-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
