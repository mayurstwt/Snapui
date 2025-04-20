const FooterComponent: React.FC = () => {
    return (
        <footer className="w-full bottom-0 left-0 right-0 bg-gradient-to-b from-black to-purple-900">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="text-center">
                   <h1 className="text-[6rem] md:text-[10rem] lg:text-[20rem] bg-gradient-to-b from-purple-500 to-purple-100 opacity-20 tracking-tight bg-clip-text font-extrabold text-transparent">Snap UI</h1>
                </div>

                {/* Bottom Section */}
                <div className="py-6 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <p className="text-sm text-gray-300">
                            © {new Date().getFullYear()} Snap UI, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;