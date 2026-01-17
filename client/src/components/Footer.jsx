import { Link } from 'react-router-dom';
import { FileText, Heart } from 'lucide-react';

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">ResumeBuilder</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Create professional, job-winning resumes in minutes.
                            Free, easy-to-use, and no login required.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact/Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4">About</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            A final-year project built with React JS and Tailwind CSS.
                            Designed to help job seekers create stunning resumes quickly.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-10 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm text-center sm:text-left">
                            © {currentYear} Resume Builder. All rights reserved.
                        </p>
                        <p className="text-slate-400 text-sm flex items-center">
                            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
