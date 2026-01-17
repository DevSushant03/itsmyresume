import { Trash2, Plus } from 'lucide-react';

const Education = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, {
            institution: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ''
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
                <h2 className="text-xl font-semibold text-slate-800">Education</h2>
                <button onClick={handleAdd} className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                    <Plus size={16} />
                    <span>Add Education</span>
                </button>
            </div>

            {data.map((edu, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 relative group">
                    <button
                        onClick={() => handleRemove(index)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 size={18} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Institution</label>
                            <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="University Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Degree</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Bachelor's"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Field of Study</label>
                            <input
                                type="text"
                                value={edu.fieldOfStudy}
                                onChange={(e) => handleChange(index, 'fieldOfStudy', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Computer Science"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                            <input
                                type="text"
                                value={edu.startDate}
                                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="MM/YYYY or YYYY"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
                            <input
                                type="text"
                                value={edu.endDate}
                                disabled={edu.current}
                                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-slate-100"
                                placeholder="MM/YYYY or Present"
                            />
                        </div>
                        <div className="md:col-span-2 flex items-center">
                            <input
                                type="checkbox"
                                checked={edu.current}
                                onChange={(e) => handleChange(index, 'current', e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-sm text-slate-700">I currently study here</label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <textarea
                                value={edu.description}
                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                                rows="3"
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Additional details..."
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
