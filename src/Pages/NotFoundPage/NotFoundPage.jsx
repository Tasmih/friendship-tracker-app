import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center px-4"
            style={{ backgroundColor: '#224D3F' }}
        >  
            <div className="text-yellow-300 text-7xl mb-4 animate-bounce">
                <FaExclamationTriangle />
            </div>

            <h1 className="text-7xl font-extrabold text-white tracking-wider">
                404
            </h1>

            <p className="text-lg text-white/80 mt-2 text-center max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 px-7 py-3 rounded-full bg-white text-[#224D3F] font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
                🏠 Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;