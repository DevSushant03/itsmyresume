import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'lucide-react';

const Templates = () => {
    const navigate = useNavigate();

    const templates = [
        {
            id: 'template1',
            name: 'Modern Professional',
            description: 'Clean and structured layout suitable for most industries.',
            color: 'bg-blue-100',
            image: 'https://via.placeholder.com/300x400?text=Modern+Template' // Placeholder
        },
        {
            id: 'template2',
            name: 'Creative minimal',
            description: 'Minimalist design focusing on skills and portfolio.',
            color: 'bg-purple-100',
            image: 'https://via.placeholder.com/300x400?text=Creative+Template'
        },
        {
            id: 'template3',
            name: 'Executive',
            description: 'Traditional layout for senior roles and corporate jobs.',
            color: 'bg-slate-100',
            image: 'https://via.placeholder.com/300x400?text=Executive+Template'
        }
    ];

    const handleCreateResume = async (templateId) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const res = await axios.post('http://localhost:5000/api/resumes', {
                title: 'New Resume',
                templateId
            }, config);
            navigate(`/editor/${res.data._id}`);
        } catch (error) {
            console.error('Error creating resume:', error);
            alert('Failed to create resume');
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Choose a Template</h1>
                <p className="text-slate-500 mt-2">Start with a professionally designed template.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template) => (
                    <div key={template.id} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className={`h-64 ${template.color} flex items-center justify-center relative overflow-hidden`}>
                            <Layout size={64} className="text-slate-400 opacity-50" />
                            {/* In real app, put an img tag here */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    onClick={() => handleCreateResume(template.id)}
                                    className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                >
                                    Use Template
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-slate-800 mb-2">{template.name}</h3>
                            <p className="text-slate-500 text-sm">{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Templates;
