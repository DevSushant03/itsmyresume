import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Save, Loader, ArrowLeft, Download, Share2 } from 'lucide-react';
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
    const [resumeData, setResumeData] = useState(null);
    const [activeSection, setActiveSection] = useState('personal');

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = { headers: { Authorization: `Bearer ${token}` } };
                const res = await axios.get(`http://localhost:5000/api/resumes/${id}`, config);
                setResumeData(res.data);
            } catch (error) {
                console.error('Error fetching resume:', error);
                // navigate('/dashboard');
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchResume();
    }, [id, navigate]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await axios.put(`http://localhost:5000/api/resumes/${id}`, resumeData, config);
            alert('Resume saved!');
        } catch (error) {
            console.error('Error saving resume:', error);
            alert('Failed to save resume');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-center py-20">Loading Editor...</div>;
    if (!resumeData) return <div className="text-center py-20">Resume not found</div>;

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
        { id: 'personal', label: 'Personal Details' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
    ];

    return (
        <div className="h-screen flex flex-col bg-slate-100 overflow-hidden">
            {/* Toolbar */}
            <div className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center z-20 shadow-sm">
                <div className="flex items-center space-x-4">
                    <button onClick={() => navigate('/dashboard')} className="text-slate-500 hover:text-slate-800 transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <input
                        type="text"
                        value={resumeData.title}
                        onChange={(e) => setResumeData({ ...resumeData, title: e.target.value })}
                        className="font-bold text-lg text-slate-800 border-none focus:ring-0 px-2 py-1 rounded hover:bg-slate-50"
                    />
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => {
                            const newStatus = !resumeData.isPublic;
                            setResumeData({ ...resumeData, isPublic: newStatus });
                            // Ideally save immediately or let user save. For better UX let's toggle state and let user save.
                            // Or better, show current status.
                            alert(`Resume is now ${newStatus ? 'Public' : 'Private'}. Click Save to apply.`);
                        }}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium ${resumeData.isPublic ? 'text-green-600 bg-green-50 hover:bg-green-100' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                    >
                        <Share2 size={18} />
                        <span>{resumeData.isPublic ? 'Public' : 'Make Public'}</span>
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                        <Download size={18} />
                        <span>Download PDF</span>
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-bold shadow-md"
                    >
                        {saving ? <Loader className="animate-spin" size={18} /> : <Save size={18} />}
                        <span>Save Changes</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Editor Panel */}
                <div className="w-1/2 flex flex-col border-r border-slate-200 bg-white">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto border-b border-slate-200 scrollbar-hide">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`px-6 py-4 whitespace-nowrap font-medium text-sm transition-colors border-b-2 ${activeSection === section.id
                                    ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>

                    {/* Form Area */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {renderForm()}
                    </div>
                </div>

                {/* Preview Panel */}
                <div className="w-1/2 bg-slate-100 overflow-y-auto p-8 flex justify-center">
                    <div className="transform scale-[0.8] origin-top">
                        <LivePreview resume={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeEditor;
