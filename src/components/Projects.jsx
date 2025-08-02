// src/components/Projects.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Audience_Rating_Prediction',
      desc: 'MLPRegressor with 85% accuracy for Audience_Rating_Prediction',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/ROOSSOp2452/Audience_Rating_Prediction'
    },
    {
      title: 'FACE_RECOGNITION-_USING_KFOLD',
      desc: 'facial detection to verify faces of people',
      tech: ['Python', 'Scikit-learn', 'Pandas','CNN'],
      github: 'https://github.com/ROOSSOp2452/FACE_RECOGNITION-_USING_KFOLD'
    },
    {
      title: 'Stock Market LSTM',
      desc: 'LSTM networks for stock prediction with 30% accuracy improvement',
      tech: ['Python', 'TensorFlow', 'Keras'],
      github: 'https://github.com/ROOSSOp2452/Stock_Market_anlaysis_using_LSTM'
    },
    {
      title: 'PowerBi_Dashboards',
      desc: 'Created varoius dashbords usong Powerbi to visulize',
      tech: ['PowerBI'],
      github: 'https://github.com/ROOSSOp2452/PowerBi_Dashboards'
    },
    {
      title: 'Fraud Detection',
      desc: 'Decision Tree Classifier with 99% accuracy for fraud detection',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/ROOSSOp2452/FRAUD_DETECTION'
    },
    {
      title: 'Task Management API',
      desc: 'Secure REST API with JWT authentication and CRUD operations',
      tech: ['Django', 'REST Framework', 'JWT'],
      github: 'https://github.com/ROOSSOp2452/Taskmanagement_api'
    },
    {
      title: 'Diabetes Prediction',
      desc: 'ML model for diabetes detection with 76.62% KNN accuracy',
      tech: ['Python', 'Scikit-learn', 'KNN'],
      github: 'https://github.com/ROOSSOp2452/Diabetes_Prediction_using_KNN'
    },
  ];

  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      <div className="cyber-border cyber-border-purple">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-8 cyber-glow">PROJECTS</h3>
          <div className="space-y-6 max-h-[500px] overflow-y-auto custom-scrollbar">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all group/project cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-cyan-300 font-bold text-base group-hover/project:text-cyan-200">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover/project:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-purple-900/30 text-purple-300 text-sm rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;