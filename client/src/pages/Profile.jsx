import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Save, Loader } from 'lucide-react';

const Profile = () => {
    const { user, logout } = useAuth();
    const [loading, setLoading] = useState(false);

    // In a real app we'd have update profile functionality
    // For now it displays info and logout

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Account Profile</h1>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-8 border-b border-slate-200">
                    <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-4xl font-bold">
                            {user?.name?.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">{user?.name}</h2>
                            <p className="text-slate-500">{user?.email}</p>
                            <p className="text-xs text-slate-400 mt-1">Member since {new Date(user?.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Account Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    value={user?.name}
                                    disabled
                                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="email"
                                    value={user?.email}
                                    disabled
                                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                        <button
                            onClick={logout}
                            className="bg-red-50 text-red-600 hover:bg-red-100 px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
