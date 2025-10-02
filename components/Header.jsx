import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-6 text-center shadow-lg border-b-2 border-blue-500">
      <h1 className="text-3xl font-bold mb-1 tracking-tight">My Loadout</h1>
      <p className="text-sm text-gray-300 font-medium">Access Granted: Profile Unlocked</p>
    </header>
  );
};

export default Header;