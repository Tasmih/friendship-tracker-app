import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#244d3f] text-white py-8">
            <div className="container w-[90%] mx-auto px-4 sm:px-6">

            
                <div className="text-center mb-6">
                    <p className="text-lg sm:text-xl font-bold">KeenKeeper</p>
                    <p className="text-xs sm:text-sm mt-2 max-w-xl mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                <h3 className="text-center text-white font-semibold py-3 text-sm sm:text-base">
                    Social Links
                </h3>

                <div className="flex justify-center gap-4 mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white text-xl sm:text-2xl hover:text-blue-500 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-xl sm:text-2xl hover:text-blue-400 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white text-xl sm:text-2xl hover:text-pink-500 transition" />
                    </a>
                </div>

              
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">

                
                    <div className="text-xs sm:text-sm">
                        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <a href="/privacy-policy" className="text-xs sm:text-sm hover:text-gray-300">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="text-xs sm:text-sm hover:text-gray-300">
                            Terms of Service
                        </a>
                        <a href="/cookies" className="text-xs sm:text-sm hover:text-gray-300">
                            Cookies
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;