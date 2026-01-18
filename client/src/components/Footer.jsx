import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'My Resumes', path: '/my-resumes' },
        { name: 'Templates', path: '/templates' }
    ];

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-2">
                            <img
                                src="/logo.png"
                                alt="itsmyresume"
                                className="h-6 sm:h-7 w-auto"
                            />
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                            Create professional resumes in minutes. Free & easy-to-use.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 text-xs sm:text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact/Info */}
                    <div>
                        <h3 className="text-white font-semibold text-sm mb-2">About</h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                            A project built with React JS and Tailwind CSS for job seekers.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-4 sm:mt-6 pt-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-slate-400 text-xs text-center sm:text-left">
                            © {currentYear} Resume Builder. All rights reserved.
                        </p>
                        <p className="text-slate-400 text-xs flex items-center">
                            Made with <Heart className="w-3 h-3 text-red-500 mx-1" /> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
