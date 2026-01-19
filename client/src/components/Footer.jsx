import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = 2026;

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'My Resumes', path: '/my-resumes' },
        { name: 'Templates', path: '/templates' }
    ];

    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/logo.png" alt="itsmyresume" className="h-6 w-auto" />
                            <span className="text-lg font-bold text-white">itsmyresume</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            The professional resume builder helping you land your dream job with ease. Fast, free, and secure.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact/Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                        <p className="text-slate-400 text-sm mb-4">
                            Have questions or feedback?
                        </p>
                        <a href="mailto:support@itsmyresume.com" className="text-blue-400 hover:text-blue-300 text-sm">
                            support@itsmyresume.com
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs text-center sm:text-left">
                        © {currentYear} itsmyresume. All rights reserved.
                    </p>
                    <div className="flex items-center text-slate-500 text-xs">
                        <span>Made with</span>
                        <Heart className="w-3 h-3 text-red-500 mx-1 fill-current" />
                        <span>in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
