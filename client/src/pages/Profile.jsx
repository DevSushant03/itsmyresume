import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar, LogOut, FileText, Shield } from 'lucide-react';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8">Account Profile</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Profile Header */}
                <div className="p-6 sm:p-8 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-blue-500/25">
                            {user?.name?.charAt(0)}
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-bold text-slate-800">{user?.name}</h2>
                            <p className="text-slate-500 mt-1">{user?.email}</p>
                            <div className="flex items-center justify-center sm:justify-start mt-2 text-sm text-slate-400">
                                <Calendar size={14} className="mr-1" />
                                <span>Member since {new Date(user?.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Details */}
                <div className="p-6 sm:p-8 space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                        <Shield size={20} className="mr-2 text-blue-500" />
                        Account Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    value={user?.name}
                                    disabled
                                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-600 cursor-not-allowed"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="email"
                                    value={user?.email}
                                    disabled
                                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-600 cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                        <div className="flex items-start space-x-3">
                            <FileText className="text-blue-500 mt-0.5" size={20} />
                            <div>
                                <h4 className="font-medium text-blue-800">No Login Required</h4>
                                <p className="text-sm text-blue-600 mt-1">
                                    This application works without authentication. All your data is stored locally in your browser.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sign Out Section */}
                    <div className="pt-6 border-t border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Actions</h3>
                        <button
                            onClick={logout}
                            className="flex items-center space-x-2 bg-red-50 text-red-600 hover:bg-red-100 px-6 py-3 rounded-xl font-medium transition-colors border border-red-200"
                        >
                            <LogOut size={18} />
                            <span>Clear Data & Sign Out</span>
                        </button>
                        <p className="text-xs text-slate-500 mt-2">
                            This will clear all locally stored resumes and data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
