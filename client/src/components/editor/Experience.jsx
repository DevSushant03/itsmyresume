import { Trash2, Plus } from 'lucide-react';

const Experience = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, {
            company: '',
            position: '',
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
                <h2 className="text-xl font-semibold text-slate-800">Experience</h2>
                <button onClick={handleAdd} className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                    <Plus size={16} />
                    <span>Add Experience</span>
                </button>
            </div>

            {data.map((exp, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 relative group">
                    <button
                        onClick={() => handleRemove(index)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 size={18} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => handleChange(index, 'company', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Company Name"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Position</label>
                            <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => handleChange(index, 'position', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Software Engineer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                            <input
                                type="text"
                                value={exp.startDate}
                                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="MM/YYYY"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
                            <input
                                type="text"
                                value={exp.endDate}
                                disabled={exp.current}
                                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-slate-100"
                                placeholder="MM/YYYY or Present"
                            />
                        </div>
                        <div className="md:col-span-2 flex items-center">
                            <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) => handleChange(index, 'current', e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-sm text-slate-700">I currently work here</label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <textarea
                                value={exp.description}
                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                                rows="3"
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Responsibilities and achievements..."
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
