import { useNavigate } from 'react-router-dom';
import { createResume } from '../utils/resumeStore';
import { Layout, Sparkles, CheckCircle } from 'lucide-react';

const Templates = () => {
    const navigate = useNavigate();

    const templates = [
        {
            id: 'template1',
            name: 'Modern Professional',
            description: 'Clean and structured layout suitable for most industries. Perfect for corporate jobs.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
            features: ['Clean Layout', 'ATS Friendly', 'Corporate Style']
        },
        {
            id: 'template2',
            name: 'Creative Minimal',
            description: 'Minimalist design focusing on skills and portfolio. Great for designers and creatives.',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
            features: ['Minimal Design', 'Portfolio Focus', 'Creative Style']
        },
        {
            id: 'template3',
            name: 'Executive',
            description: 'Traditional layout for senior roles and corporate jobs. Professional and elegant.',
            color: 'from-slate-600 to-slate-800',
            bgColor: 'bg-gradient-to-br from-slate-100 to-slate-50',
            features: ['Elegant Layout', 'Senior Roles', 'Traditional Style']
        },
        {
            id: 'template4',
            name: 'Tech Developer',
            description: 'Technical resume with focus on skills, projects and GitHub. Perfect for developers.',
            color: 'from-green-500 to-teal-500',
            bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
            features: ['Tech Focused', 'Project Links', 'Developer Style']
        },
        {
            id: 'template5',
            name: 'Fresh Graduate',
            description: 'Entry-level template highlighting education, internships and skills.',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
            features: ['Entry Level', 'Education Focus', 'Intern Friendly']
        },
        {
            id: 'template6',
            name: 'Elegant Dark',
            description: 'Premium dark theme template with modern aesthetics. Stand out from the crowd.',
            color: 'from-violet-600 to-indigo-600',
            bgColor: 'bg-gradient-to-br from-violet-50 to-indigo-50',
            features: ['Dark Theme', 'Premium Look', 'Modern Style']
        }
    ];

    const handleCreateResume = (templateId) => {
        const newResume = createResume(templateId, 'New Resume');
        navigate(`/editor/${newResume.id}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            {/* Header */}
            <header className="mb-8">
                <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-slate-500">Choose your style</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Resume Templates</h1>
                <p className="text-slate-500 mt-2 text-sm sm:text-base">Start with a professionally designed template.</p>
            </header>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Template Preview */}
                        <div className={`h-52 sm:h-56 ${template.bgColor} flex items-center justify-center relative overflow-hidden`}>
                            {/* Decorative Elements */}
                            <div className={`absolute top-4 left-4 w-20 h-3 bg-gradient-to-r ${template.color} rounded-full opacity-60`}></div>
                            <div className={`absolute top-10 left-4 w-16 h-2 bg-gradient-to-r ${template.color} rounded-full opacity-40`}></div>
                            <div className={`absolute top-16 left-4 right-4 h-2 bg-slate-200 rounded-full`}></div>
                            <div className={`absolute top-20 left-4 right-8 h-2 bg-slate-200 rounded-full`}></div>
                            <div className={`absolute top-24 left-4 right-12 h-2 bg-slate-200 rounded-full`}></div>

                            <Layout size={48} className="text-slate-400 opacity-30" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                <button
                                    onClick={() => handleCreateResume(template.id)}
                                    className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 hover:shadow-xl hover:scale-105"
                                >
                                    Use This Template
                                </button>
                            </div>
                        </div>

                        {/* Template Info */}
                        <div className="p-5 sm:p-6">
                            <h3 className="font-bold text-xl text-slate-800 mb-2">{template.name}</h3>
                            <p className="text-slate-500 text-sm mb-4 leading-relaxed">{template.description}</p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                                {template.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                                    >
                                        <CheckCircle size={12} className="mr-1 text-green-500" />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Templates;
