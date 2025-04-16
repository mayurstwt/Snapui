import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const FooterComponent: React.FC = () => {
    return (
        <footer className="w-full bottom-0 left-0 pt-20 right-0 bg-gradient-to-b from-black to-purple-900 py-12">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                {/* Company Name */}
                <div className="text-center mb-10">
                    <h1 className="text-6xl md:text-[10rem] lg:text-[12rem] font-extrabold text-white tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] mb-24">
                        SNAP UI
                    </h1>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <p className="mt-2 text-lg text-white">
                            Creating beautiful experiences that blend form and function.
                        </p>
                        <div className="mt-6 flex space-x-6">
                            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                                <Twitter size={24} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                                <Github size={24} />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                                <Linkedin size={24} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                                <Mail size={24} />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {['Features', 'Pricing', 'Use Cases', 'Integrations'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-base text-gray-200 hover:text-yellow-300 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-base text-gray-200 hover:text-yellow-300 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {['Documentation', 'Help Center', 'Privacy', 'Terms'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-base text-gray-200 hover:text-yellow-300 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
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