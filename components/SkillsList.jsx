import React from 'react';

const SkillsList = () => {
  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'];
  
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6 mt-4 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">My Skills</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-300 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;