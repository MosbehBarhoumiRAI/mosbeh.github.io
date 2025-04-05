'use client';

import { useState } from 'react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const experiences = [
    {
      title: 'MLOps Engineer',
      company: 'AVIDEA',
      location: 'Tunis',
      period: 'Jul 2023 - Present',
      responsibilities: [
        'Implemented end-to-end MLOps pipelines for deploying automotive AI projects using Jenkins, with integrated unit testing for robust validation.',
        'Developed a deep learning system for car part detection and damage assessment, achieving 95% accuracy.',
        'Designed CI/CD pipeline with Jenkins, automating testing and deployment for faster release cycles.',
        'Orchestrated containerized ML solutions using Docker and Docker Swarm for improved scalability.',
        'Developed monitoring systems using ELK stack, reducing mean time to resolution for production issues.',
        'Deployed high-performance RESTful APIs with Flask for seamless AI solution integration.',
        'Fine-tuned and deployed 6+ OCR web services for diverse projects, integrating PaddleOCR, Tesseract, and SURYA OCR engines.',
        'Enhanced complex OCR and unstructured data analysis using Gemini API and LLaMA Vision models for improved accuracy and insights.',
        'Analyzed and detected fraud in car accident datasets using clustering algorithms and data engineering with LLM provider APIs.'
      ]
    },
    {
      title: 'AI Research Intern',
      company: 'IOVision',
      location: 'Tunis',
      period: 'Feb 2023 - May 2023',
      responsibilities: [
        'Developed an efficient pre-processing pipeline for the VITON dataset, integrating human parsing, pose estimation, and cloth mask generation.',
        'Implemented and optimized deep learning models using PyTorch and Detectron2, improving inference speed by 25%.',
        'Designed a modular system architecture allowing easy integration with various datasets and models.',
        'Created comprehensive documentation and managed version control, facilitating seamless knowledge transfer and collaboration.'
      ]
    },
    {
      title: 'AI Intern',
      company: 'Takiacademy',
      location: 'Tunis',
      period: 'Jul 2022 - Oct 2022',
      responsibilities: [
        'Developed a multilingual chatbot using TensorFlow and NLP techniques, improving user query response accuracy by 35%.',
        'Optimized model performance and implemented efficient algorithms, reducing inference time by 20%.',
        'Collaborated in integrating the chatbot into the company\'s platform, ensuring seamless functionality and user experience.'
      ]
    }
  ];
  
  const education = [
    {
      degree: 'Computer Science Engineering Degree (ENSI)',
      institution: 'National School for Computer Science, Tunisia',
      year: '2023'
    },
    {
      degree: 'Preparatory Institute for Engineering Studies',
      institution: 'Preparatory Institute for Engineering Nabeul, Tunisia',
      year: '2018 - 2020'
    }
  ];
  
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'work'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('work')}
            >
              Work Experience
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>
        
        {/* Work Experience */}
        {activeTab === 'work' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 top-1.5"></div>
                  
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400">{exp.company}, {exp.location}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 text-gray-300">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
              {education.map((edu, index) => (
                <div key={index} className="mb-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 top-1.5"></div>
                  
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-blue-400">{edu.institution}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
