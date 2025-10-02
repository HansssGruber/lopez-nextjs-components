import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6 -mt-6 relative z-10 border border-gray-700">
      <div className="flex flex-col items-center">
        <img
          src="https://picsum.photos/200/200"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg mb-3"
        />
        <h2 className="text-xl font-bold text-white mb-1 tracking-tight">Elijah B. Lopez</h2>
        <p className="text-gray-400 text-sm mb-2 font-medium">Age: 25</p>
        <p className="text-gray-300 text-center text-sm max-w-md leading-relaxed">
          A passionate developer who loves building web applications with modern technologies. 
          Always eager to learn and explore new frameworks and tools.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;