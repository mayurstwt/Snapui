import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const FooterComponent: React.FC = () => {
    return (
        <footer className="w-full bottom-0 left-0 pt-20 right-0 bg-gradient-to-b from-black to-purple-900 py-12">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                {/* Company Name */}
                <div className="text-center mb-10">
                    <h1 className="text-[5rem] md:text-[10rem] lg:text-[16rem] font-extrabold text-white tracking-wide mb-10 flex flex-wrap justify-center">
                        {['S', 'N', 'A', 'P', ' ', 'U', 'I'].map((char, index) => (
                            <span
                                key={index}
                                className="relative transition-all duration-300 hover:text-purple-500 hover:translate-y-[-4px] hover:scale-105"
                                style={{
                                    textShadow: `
          1px 1px 0 #444,
          2px 2px 0 #444,
          3px 3px 0 #333,
          4px 4px 0 #333,
          5px 5px 0 #222,
          6px 6px 0 #111,
          7px 7px 0 rgba(0,0,0,0.9)
        `,
                                    transform: "perspective(800px) rotateX(10deg) rotateY(-10deg) scale(1.05)",
                                    display: 'inline-block',
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>



                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-6 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-300">
                            © {new Date().getFullYear()} COMPANY, Inc. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex flex-wrap gap-6">
                            <a href="#" className="text-sm text-gray-300 hover:text-yellow-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-yellow-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-gray-300 hover:text-yellow-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;