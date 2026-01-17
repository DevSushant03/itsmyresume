import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getResumeById, updateResume } from '../utils/resumeStore';
import { Save, Loader, ArrowLeft, Download, Share2, Eye, Check } from 'lucide-react';
import PersonalDetails from '../components/editor/PersonalDetails';
import Education from '../components/editor/Education';
import Experience from '../components/editor/Experience';
import Skills from '../components/editor/Skills';
import Projects from '../components/editor/Projects';
import LivePreview from '../components/editor/LivePreview';

const ResumeEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [resumeData, setResumeData] = useState(null);
    const [activeSection, setActiveSection] = useState('personal');
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        const resume = getResumeById(id);
        if (resume) {
            setResumeData(resume);
        }
        setLoading(false);
    }, [id]);

    // Auto-save when data changes
    useEffect(() => {
        if (resumeData && !loading) {
            const timer = setTimeout(() => {
                updateResume(id, resumeData);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [resumeData, id, loading]);

    const handleSave = () => {
        setSaving(true);
        updateResume(id, resumeData);
        setTimeout(() => {
            setSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }, 500);
    };

    const handleDownloadPDF = () => {
        window.print();
    };

    const copyPublicLink = () => {
        const url = `${window.location.origin}/p/${id}`;
        navigator.clipboard.writeText(url);
        alert('Public link copied to clipboard!');
    };

    const togglePublic = () => {
        const newStatus = !resumeData.isPublic;
        setResumeData({ ...resumeData, isPublic: newStatus });
        updateResume(id, { ...resumeData, isPublic: newStatus });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                    <p className="mt-4 text-slate-500">Loading Editor...</p>
                </div>
            </div>
        );
    }

    if (!resumeData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Resume not found</h2>
                    <button
                        onClick={() => navigate('/my-resumes')}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        ← Back to My Resumes
                    </button>
                </div>
            </div>
        );
    }

    const renderForm = () => {
        switch (activeSection) {
            case 'personal':
                return <PersonalDetails data={resumeData.personalInfo || {}} updateData={(newData) => setResumeData({ ...resumeData, personalInfo: newData })} />;
            case 'education':
                return <Education data={resumeData.education || []} updateData={(newData) => setResumeData({ ...resumeData, education: newData })} />;
            case 'experience':
                return <Experience data={resumeData.experience || []} updateData={(newData) => setResumeData({ ...resumeData, experience: newData })} />;
            case 'skills':
                return <Skills data={resumeData.skills || []} updateData={(newData) => setResumeData({ ...resumeData, skills: newData })} />;
            case 'projects':
                return <Projects data={resumeData.projects || []} updateData={(newData) => setResumeData({ ...resumeData, projects: newData })} />;
            default:
                return <div>Section coming soon</div>;
        }
    };

    const sections = [
        { id: 'personal', label: 'Personal' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <div className="h-screen flex flex-col bg-slate-100 overflow-hidden print:bg-white">
            {/* Toolbar - Hidden on print */}
            <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center gap-3 z-20 shadow-sm print:hidden">
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="text-slate-500 hover:text-slate-800 transition-colors p-2 hover:bg-slate-100 rounded-lg"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <input
                        type="text"
                        value={resumeData.title}
                        onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
                        className="font-bold text-base sm:text-lg text-slate-800 border-none focus:ring-0 focus:outline-none px-2 py-1 rounded hover:bg-slate-50 max-w-[150px] sm:max-w-none"
                    />
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Mobile Preview Toggle */}
                    <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="lg:hidden flex items-center space-x-1 text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                        <Eye size={18} />
                        <span className="hidden sm:inline">{showPreview ? 'Edit' : 'Preview'}</span>
                    </button>

                    {/* Public Toggle */}
                    <button
                        onClick={togglePublic}
                        className={`hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${resumeData.isPublic
                                ? 'text-green-600 bg-green-50 hover:bg-green-100'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                    >
                        <Share2 size={18} />
                        <span>{resumeData.isPublic ? 'Public' : 'Private'}</span>
                    </button>

                    {/* Copy Link */}
                    {resumeData.isPublic && (
                        <button
                            onClick={copyPublicLink}
                            className="hidden sm:flex items-center space-x-1 text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                        >
                            <span>Copy Link</span>
                        </button>
                    )}

                    {/* Download PDF */}
                    <button
                        onClick={handleDownloadPDF}
                        className="flex items-center space-x-1 sm:space-x-2 text-slate-600 hover:text-purple-600 px-3 py-2 rounded-lg hover:bg-purple-50 transition-colors text-sm font-medium"
                    >
                        <Download size={18} />
                        <span className="hidden sm:inline">PDF</span>
                    </button>

                    {/* Save Button */}
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className={`flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-xl transition-all text-sm font-bold shadow-md ${saved
                                ? 'bg-green-500 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 text-white'
                            }`}
                    >
                        {saving ? (
                            <Loader className="animate-spin" size={18} />
                        ) : saved ? (
                            <Check size={18} />
                        ) : (
                            <Save size={18} />
                        )}
                        <span className="hidden sm:inline">{saved ? 'Saved!' : 'Save'}</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden print:block">
                {/* Editor Panel */}
                <div className={`w-full lg:w-1/2 flex flex-col border-r border-slate-200 bg-white print:hidden ${showPreview ? 'hidden lg:flex' : 'flex'}`}>
                    {/* Section Tabs */}
                    <div className="flex overflow-x-auto border-b border-slate-200 scrollbar-hide">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-sm transition-colors border-b-2 flex-shrink-0 ${activeSection === section.id
                                        ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>

                    {/* Form Area */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                        {renderForm()}
                    </div>
                </div>

                {/* Preview Panel */}
                <div className={`w-full lg:w-1/2 bg-slate-100 overflow-y-auto p-4 sm:p-8 flex justify-center print:w-full print:p-0 print:bg-white ${showPreview ? 'flex' : 'hidden lg:flex'}`}>
                    <div className="transform scale-[0.65] sm:scale-[0.75] lg:scale-[0.8] origin-top print:scale-100">
                        <LivePreview resume={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeEditor;
