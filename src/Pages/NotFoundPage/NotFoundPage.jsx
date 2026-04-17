import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FcHome } from 'react-icons/fc';

const NotFoundPage = () => {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center px-4 text-center"
            style={{ backgroundColor: '#224D3F' }}
        >  
            
            <div className="text-yellow-300 text-5xl sm:text-6xl md:text-7xl mb-4 animate-bounce">
                <FaExclamationTriangle />
            </div>

            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-wider">
                404
            </h1>

            
            <p className="text-sm sm:text-base md:text-lg text-white/80 mt-2 max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            
            <Link
                to="/"
                className="mt-6 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#224D3F] font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
                <FcHome /> Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;