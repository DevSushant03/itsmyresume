import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FileText, Edit, Trash2, Eye, Download, Link as LinkIcon, Plus } from 'lucide-react';

const MyResumes = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchResumes();
    }, []);

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

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this resume?')) {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                await axios.delete(`http://localhost:5000/api/resumes/${id}`, config);
                setResumes(resumes.filter(resume => resume._id !== id));
            } catch (error) {
                console.error('Error deleting resume:', error);
            }
        }
    };

    const copyToClipboard = (id) => {
        const url = `${window.location.origin}/p/${id}`;
        navigator.clipboard.writeText(url);
        alert('Public link copied to clipboard!');
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-800">My Resumes</h1>
                <Link
                    to="/templates"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                >
                    <Plus size={20} />
                    <span>Create New</span>
                </Link>
            </div>

            {resumes.length === 0 ? (
                <div className="bg-white p-12 rounded-xl shadow-sm border border-slate-200 text-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No resumes found</h3>
                    <p className="text-slate-500 mb-6">Start building your professional resume today.</p>
                    <Link
                        to="/templates"
                        className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:underline"
                    >
                        <span>Choose a template</span>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumes.map((resume) => (
                        <div key={resume._id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                            {/* Preview Area Placeholder */}
                            <div className="h-48 bg-slate-100 flex items-center justify-center relative border-b border-slate-100">
                                <FileText size={48} className="text-slate-300" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                    <Link to={`/editor/${resume._id}`} className="p-2 bg-white text-slate-800 rounded-full hover:bg-blue-50 transition-colors" title="Edit">
                                        <Edit size={20} />
                                    </Link>
                                    <button onClick={() => window.open(`/p/${resume._id}`, '_blank')} className="p-2 bg-white text-slate-800 rounded-full hover:bg-blue-50 transition-colors" title="View Public">
                                        <Eye size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-slate-800 truncate pr-2">{resume.title}</h3>
                                    <button onClick={() => handleDelete(resume._id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <p className="text-xs text-slate-500 mb-4">
                                    Last updated: {new Date(resume.updatedAt).toLocaleDateString()}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <button onClick={() => copyToClipboard(resume._id)} className="flex items-center text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">
                                        <LinkIcon size={14} className="mr-1" />
                                        Copy Link
                                    </button>
                                    <button className="flex items-center text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">
                                        <Download size={14} className="mr-1" />
                                        PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyResumes;
