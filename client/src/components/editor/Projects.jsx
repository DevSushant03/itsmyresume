import { Trash2, Plus } from 'lucide-react';

const Projects = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, {
            title: '',
            link: '',
            description: '',
            technologies: ''
        }]);
    };

    const handleRemove = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        updateData(newData);
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [field]: value };
        updateData(newData);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-800">Projects</h2>
                <button onClick={handleAdd} className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                    <Plus size={16} />
                    <span>Add Project</span>
                </button>
            </div>

            {data.map((proj, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 relative group">
                    <button
                        onClick={() => handleRemove(index)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 size={18} />
                    </button>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Project Title</label>
                            <input
                                type="text"
                                value={proj.title}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Project Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Project Link</label>
                            <input
                                type="text"
                                value={proj.link}
                                onChange={(e) => handleChange(index, 'link', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="https://..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Technologies Used</label>
                            <input
                                type="text"
                                value={proj.technologies}
                                onChange={(e) => handleChange(index, 'technologies', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="React, Node.js, MongoDB"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <textarea
                                value={proj.description}
                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                                rows="3"
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Project details..."
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
