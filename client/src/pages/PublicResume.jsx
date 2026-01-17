import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getResumeById } from '../utils/resumeStore';
import { FileText, ArrowLeft, Download, Share2 } from 'lucide-react';
import LivePreview from '../components/editor/LivePreview';

const PublicResume = () => {
    const { id } = useParams();
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = getResumeById(id);
        setResume(data);
        setLoading(false);
    }, [id]);

    const handleDownloadPDF = () => {
        window.print();
    };

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                    <p className="mt-4 text-slate-500">Loading Resume...</p>
                </div>
            </div>
        );
    }

    if (!resume) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="text-center p-8">
                    <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <FileText size={40} className="text-slate-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Resume Not Found</h2>
                    <p className="text-slate-500 mb-6">The resume you're looking for doesn't exist or has been removed.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                        <ArrowLeft size={18} />
                        <span>Go to Home</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 print:bg-white">
            {/* Header - Hidden on print */}
            <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 print:hidden">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center space-x-3">
                        <Link
                            to="/"
                            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ResumeBuilder
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={copyLink}
                            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                        >
                            <Share2 size={18} />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                        <button
                            onClick={handleDownloadPDF}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:shadow-lg transition-all text-sm font-bold"
                        >
                            <Download size={18} />
                            <span>Download PDF</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Resume Preview */}
            <main className="py-8 sm:py-12 px-4 print:p-0">
                <div className="flex justify-center">
                    <div className="transform scale-[0.6] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 origin-top print:scale-100">
                        <LivePreview resume={resume} />
                    </div>
                </div>
            </main>

            {/* Footer - Hidden on print */}
            <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center print:hidden">
                <p className="text-slate-500 text-sm">
                    Created with <span className="font-semibold text-blue-600">ResumeBuilder</span>
                </p>
                <Link to="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 inline-block">
                    Build your own resume →
                </Link>
            </footer>
        </div>
    );
};

export default PublicResume;
