import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getResumes } from '../utils/resumeStore';
import { Plus, FileText, Clock, ExternalLink, Sparkles } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load resumes from localStorage
        const loadedResumes = getResumes();
        setResumes(loadedResumes);
        setLoading(false);
    }, []);

    const recentResume = resumes.length > 0 ? resumes[resumes.length - 1] : null;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            {/* Welcome Header */}
            <header className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-slate-500">Welcome back</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
                    Hello, {user?.name?.split(' ')[0]}! 👋
                </h1>
                <p className="text-slate-500 mt-2 text-sm sm:text-base">Here's what's happening with your resumes.</p>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {/* Total Resumes Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl">
                            <FileText size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Total Resumes</p>
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">{resumes.length}</h3>
                        </div>
                    </div>
                </div>

                {/* Create New Resume Card */}
                <Link
                    to="/templates"
                    className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-5 sm:p-6 rounded-2xl shadow-lg text-white hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                    <div className="flex items-center justify-between h-full">
                        <div>
                            <p className="text-blue-100 font-medium mb-1 text-sm">Create New</p>
                            <h3 className="text-xl sm:text-2xl font-bold">Build Resume</h3>
                        </div>
                        <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                            <Plus size={24} />
                        </div>
                    </div>
                </Link>

                {/* Public Link Info */}
                {recentResume && recentResume.isPublic && (
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl">
                                <ExternalLink size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Public Resumes</p>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
                                    {resumes.filter(r => r.isPublic).length}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Recently Edited Section */}
            <div className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">Recently Edited</h2>
                {loading ? (
                    <div className="text-slate-500 p-8 text-center">
                        <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                        <p className="mt-4">Loading...</p>
                    </div>
                ) : recentResume ? (
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-all">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div className="flex items-center space-x-4">
                                <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-4 rounded-xl">
                                    <FileText className="text-slate-500" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800">{recentResume.title}</h3>
                                    <p className="text-sm text-slate-500 flex items-center mt-1">
                                        <Clock size={14} className="mr-1" />
                                        Last updated: {new Date(recentResume.updatedAt).toLocaleDateString()}
                                    </p>
                                    {recentResume.isPublic && (
                                        <span className="inline-block mt-2 px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                                            Public
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to={`/editor/${recentResume.id}`}
                                    className="flex-1 sm:flex-none px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                                >
                                    Edit Resume
                                </Link>
                                {recentResume.isPublic && (
                                    <a
                                        href={`/p/${recentResume.id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center px-4 py-2.5 text-slate-600 hover:text-blue-600 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FileText className="text-blue-500" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">No resumes yet</h3>
                        <p className="text-slate-500 mb-6">Start building your professional resume today!</p>
                        <Link
                            to="/templates"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                        >
                            <Plus size={20} />
                            <span>Create your first resume</span>
                        </Link>
                    </div>
                )}
            </div>

            {/* All Resumes Quick View */}
            {resumes.length > 1 && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-800">All Resumes</h2>
                        <Link to="/my-resumes" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                            View All →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {resumes.slice(0, 3).map((resume) => (
                            <Link
                                key={resume.id}
                                to={`/editor/${resume.id}`}
                                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                                        <FileText size={20} className="text-slate-500 group-hover:text-blue-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-slate-800 truncate">{resume.title}</h4>
                                        <p className="text-xs text-slate-500">
                                            {new Date(resume.updatedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
