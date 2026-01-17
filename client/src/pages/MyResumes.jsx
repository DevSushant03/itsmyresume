import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getResumes, deleteResume } from '../utils/resumeStore';
import { FileText, Edit, Trash2, Eye, Download, Link as LinkIcon, Plus, Search } from 'lucide-react';

const MyResumes = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadResumes();
    }, []);

    const loadResumes = () => {
        const data = getResumes();
        setResumes(data);
        setLoading(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this resume?')) {
            deleteResume(id);
            setResumes(resumes.filter(resume => resume.id !== id));
        }
    };

    const copyToClipboard = (id) => {
        const url = `${window.location.origin}/p/${id}`;
        navigator.clipboard.writeText(url);
        alert('Public link copied to clipboard!');
    };

    const handleDownloadPDF = (resume) => {
        // Open resume in new tab for printing
        const printWindow = window.open(`/p/${resume.id}`, '_blank');
        if (printWindow) {
            printWindow.onload = () => {
                setTimeout(() => {
                    printWindow.print();
                }, 500);
            };
        }
    };

    const filteredResumes = resumes.filter(resume =>
        resume.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                    <p className="mt-4 text-slate-500">Loading resumes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">My Resumes</h1>
                    <p className="text-slate-500 mt-1">Manage and edit your resumes</p>
                </div>
                <Link
                    to="/templates"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 text-white px-5 py-2.5 rounded-xl transition-all font-medium"
                >
                    <Plus size={20} />
                    <span>Create New</span>
                </Link>
            </div>

            {/* Search Bar */}
            {resumes.length > 0 && (
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search resumes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    />
                </div>
            )}

            {/* Resumes Grid */}
            {filteredResumes.length === 0 && searchTerm ? (
                <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
                    <Search size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No results found</h3>
                    <p className="text-slate-500">Try searching with different keywords</p>
                </div>
            ) : resumes.length === 0 ? (
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-300 text-center">
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <FileText size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">No resumes found</h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto">Start building your professional resume today. Choose from our beautiful templates.</p>
                    <Link
                        to="/templates"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                    >
                        <Plus size={20} />
                        <span>Choose a template</span>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredResumes.map((resume) => (
                        <div
                            key={resume.id}
                            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Preview Area */}
                            <div className="h-44 sm:h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center relative border-b border-slate-100">
                                <div className="text-center">
                                    <FileText size={48} className="mx-auto text-slate-300 mb-2" />
                                    <span className="text-xs text-slate-400">Resume Preview</span>
                                </div>

                                {/* Hover Actions Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3">
                                    <Link
                                        to={`/editor/${resume.id}`}
                                        className="p-3 bg-white text-slate-800 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                                        title="Edit"
                                    >
                                        <Edit size={20} />
                                    </Link>
                                    <button
                                        onClick={() => window.open(`/p/${resume.id}`, '_blank')}
                                        className="p-3 bg-white text-slate-800 rounded-full hover:bg-green-50 hover:text-green-600 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                        title="View Public"
                                    >
                                        <Eye size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDownloadPDF(resume)}
                                        className="p-3 bg-white text-slate-800 rounded-full hover:bg-purple-50 hover:text-purple-600 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                                        title="Download PDF"
                                    >
                                        <Download size={20} />
                                    </button>
                                </div>

                                {/* Public Badge */}
                                {resume.isPublic && (
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                                        Public
                                    </div>
                                )}
                            </div>

                            {/* Resume Info */}
                            <div className="p-4 sm:p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-lg text-slate-800 truncate pr-2 flex-1">{resume.title}</h3>
                                    <button
                                        onClick={() => handleDelete(resume.id)}
                                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <p className="text-xs text-slate-500 mb-4">
                                    Last updated: {new Date(resume.updatedAt).toLocaleDateString()}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <button
                                        onClick={() => copyToClipboard(resume.id)}
                                        className="flex items-center text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                                    >
                                        <LinkIcon size={14} className="mr-1.5" />
                                        Copy Link
                                    </button>
                                    <button
                                        onClick={() => handleDownloadPDF(resume)}
                                        className="flex items-center text-xs font-medium text-slate-600 hover:text-purple-600 transition-colors px-3 py-2 rounded-lg hover:bg-purple-50"
                                    >
                                        <Download size={14} className="mr-1.5" />
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
