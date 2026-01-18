import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FilePlus, User, Home, Menu, X, FileText } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'My Resumes', path: '/my-resumes', icon: <FileText size={20} /> },
        { name: 'Templates', path: '/templates', icon: <FilePlus size={20} /> },
    ];

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-white rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
            </button>

            {/* Sidebar Container */}
            <div className={`
                fixed top-0 left-0 h-full bg-slate-900 text-white w-64 transform transition-transform duration-300 ease-in-out z-40
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
            `}>
                <div className="flex flex-col h-full">
                    {/* Brand */}
                    <div className="p-4 border-b border-slate-800">
                        <Link to="/" className="block">
                            <img
                                src="/logo.png"
                                alt="itsmyresume"
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4 space-y-1">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive(link.path)
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                {link.icon}
                                <span className="font-medium">{link.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Profile Link at Bottom */}
                    <div className="p-4 border-t border-slate-800">
                        <Link
                            to="/profile"
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive('/profile')
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <User size={20} />
                            <span className="font-medium">Profile</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
