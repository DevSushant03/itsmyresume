import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { Plus, FileText, Clock, ExternalLink } from 'lucide-react';

const Dashboard = () => {
    const { user } = useAuth();
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const res = await axios.get('http://localhost:5000/api/resumes', config);
                setResumes(res.data);
            } catch (error) {
                console.error('Error fetching resumes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchResumes();
    }, []);

    const recentResume = resumes.length > 0 ? resumes[resumes.length - 1] : null;

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    Welcome back, {user?.name?.split(' ')[0]}! 👋
                </h1>
                <p className="text-slate-500 mt-2">Here's what's happening with your resumes.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                            <FileText size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Total Resumes</p>
                            <h3 className="text-2xl font-bold text-slate-800">{resumes.length}</h3>
                        </div>
                    </div>
                </div>

                {/* Create New Card */}
                <Link to="/templates" className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-md text-white hover:shadow-lg transition-all group">
                    <div className="flex items-center justify-between h-full">
                        <div>
                            <p className="text-blue-100 font-medium mb-1">Create New</p>
                            <h3 className="text-2xl font-bold">Build Resume</h3>
                        </div>
                        <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                            <Plus size={24} />
                        </div>
                    </div>
                </Link>
            </div>

            {/* Recent Resume Section */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Recently Edited</h2>
                {loading ? (
                    <div className="text-slate-500">Loading...</div>
                ) : recentResume ? (
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-blue-300 transition-colors">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <div className="bg-slate-100 p-4 rounded-lg">
                                <FileText className="text-slate-500" size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800">{recentResume.title}</h3>
                                <p className="text-sm text-slate-500 flex items-center mt-1">
                                    <Clock size={14} className="mr-1" />
                                    Last updated: {new Date(recentResume.updatedAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-3 w-full md:w-auto">
                            <Link
                                to={`/editor/${recentResume._id}`}
                                className="flex-1 md:flex-none px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors text-center"
                            >
                                Edit Resume
                            </Link>
                            {recentResume.isPublic && (
                                <a
                                    href={`/p/${recentResume._id}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center px-4 py-2 text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-50 p-8 rounded-xl border border-dashed border-slate-300 text-center">
                        <p className="text-slate-500 mb-4">You haven't created any resumes yet.</p>
                        <Link to="/templates" className="text-blue-600 font-medium hover:underline">
                            Create your first resume
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
