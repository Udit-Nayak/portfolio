import React from 'react';
import { Link } from 'react-router-dom';

const MoreMenuSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-xs transition-all duration-300 ease-in-out animate-fade-scale-in">
      {/* Right: Links, Uses, Attribution */}
      <div className="flex flex-col gap-2 w-full max-w-xs items-center justify-center transition-all duration-300 ease-in-out">
        {/* Links Card */}
        <Link to="/links" className="rounded-xl bg-[#232323] p-2 flex items-center gap-4 w-full cursor-pointer hover:bg-[#2d2d2d] transition-colors no-underline">
          <span className="inline-block w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-white">🔗</span>
          <div>
            <div className="text-white font-bold">Links</div>
            <div className="text-gray-300 text-sm">All my links are here</div>
          </div>
        </Link>
        {/* Uses Card */}
        <Link to="/uses" className="rounded-xl bg-[#232323] p-2 flex items-center gap-4 w-full cursor-pointer hover:bg-[#2d2d2d] transition-colors no-underline">
          <span className="inline-block w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-white">📱</span>
          <div>
            <div className="text-white font-bold">Uses</div>
            <div className="text-gray-300 text-sm">A peek into my technologies</div>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default MoreMenuSection; 