import { Trash2, Plus } from 'lucide-react';

const Skills = ({ data, updateData }) => {
    const handleAdd = () => {
        updateData([...data, { name: '', level: 'Intermediate' }]);
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
                <h2 className="text-xl font-semibold text-slate-800">Skills</h2>
                <button onClick={handleAdd} className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                    <Plus size={16} />
                    <span>Add Skill</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={skill.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                            className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Skill Name (e.g. React)"
                        />
                        <button
                            onClick={() => handleRemove(index)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-2"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
