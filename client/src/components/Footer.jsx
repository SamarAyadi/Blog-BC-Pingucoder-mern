import React from 'react';

const Footer = () => {
  return (
    <div className="text-sm text-center bg-gray-50 py-4">
      <p>
        © Copyright 2025 | Designed & Developed By :{' '}
        <a
          className="inline-block font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full px-4 py-2
                     transform transition-all duration-500 ease-in-out 
                     hover:scale-110 hover:shadow-2xl hover:from-pink-500 hover:to-blue-500 
                     active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-400"
          href="https://github.com/SamarAyadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samar AYADI
        </a>
      </p>
    </div>
  );
};

export default Footer;
