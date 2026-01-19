import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { createResume } from '../services/resumeService';
import { Layout, Sparkles, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Templates = () => {
    const navigate = useNavigate();
    const { getToken } = useAuth();

    const templates = [
        {
            id: 'template1',
            name: 'Modern Professional',
            description: 'Clean and structured layout suitable for most industries. Perfect for corporate jobs.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
            features: ['Clean Layout', 'ATS Friendly', 'Corporate Style'],
            popular: true
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
            features: ['Tech Focused', 'Project Links', 'Developer Style'],
            popular: true
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

    const handleCreateResume = async (templateId) => {
        try {
            const token = await getToken();
            if (token) {
                const newResume = await createResume({ templateId, title: 'New Resume' }, token);
                navigate(`/editor/${newResume._id || newResume.id}`);
            }
        } catch (error) {
            console.error("Error creating resume:", error);
            alert("Failed to create resume");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-12 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm mb-6">
                        <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Choose your style</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Resume Templates
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Start with a professionally designed template. Build a resume that helps you land your dream job.
                    </p>
                </header>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Template Preview */}
                            <div className={`h-64 ${template.bgColor} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                                {/* Abstract Resume Representation */}
                                <div className="absolute inset-0 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                    <div className="w-48 h-64 bg-white shadow-xl rounded-lg border border-slate-100 p-4 space-y-3 opacity-90">
                                        {/* Header area */}
                                        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${template.color} opacity-80`}></div>
                                            <div className="space-y-1.5 flex-1">
                                                <div className="h-2 w-20 bg-slate-200 rounded"></div>
                                                <div className="h-1.5 w-12 bg-slate-100 rounded"></div>
                                            </div>
                                        </div>
                                        {/* Content lines */}
                                        <div className="space-y-2">
                                            <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                                            <div className="h-1.5 w-4/5 bg-slate-100 rounded"></div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                                        </div>
                                        <div className="pt-2 gap-2 flex">
                                            <div className="h-16 w-1/3 bg-slate-50 rounded"></div>
                                            <div className="h-16 w-2/3 bg-slate-50 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Popular Badge */}
                                {template.popular && (
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
                                        <Star className="w-3 h-3 fill-current" />
                                        POPULAR
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <button
                                        onClick={() => handleCreateResume(template.id)}
                                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-blue-50 flex items-center gap-2"
                                    >
                                        Use This Template
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Template Info */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {template.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {template.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex flex-wrap gap-2">
                                        {template.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center text-[10px] sm:text-xs font-medium px-2.5 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Templates;
