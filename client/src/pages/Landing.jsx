import { Link } from 'react-router-dom';
import { FileText, Edit3, Download, Share2, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const Landing = () => {
    const features = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: 'Multiple Templates',
            description: 'Choose from professionally designed resume templates that stand out.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Edit3 className="w-8 h-8" />,
            title: 'Easy Resume Editor',
            description: 'Intuitive drag-and-drop editor with live preview to build your resume.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: 'PDF Download',
            description: 'Export your resume as a professional PDF with just one click.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: 'Public Resume Link',
            description: 'Share your resume with a unique public link - no login required.',
            color: 'from-green-500 to-teal-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-60 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
                </div>

                <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                ResumeBuilder
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                                Dashboard
                            </Link>
                            <Link to="/templates" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                                Templates
                            </Link>
                            <Link
                                to="/dashboard"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            >
                                Get Started
                            </Link>
                        </div>
                        {/* Mobile menu button */}
                        <Link
                            to="/dashboard"
                            className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm"
                        >
                            Get Started
                        </Link>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Create stunning resumes in minutes</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            Create Professional
                            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Resumes in Minutes
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Build beautiful, job-winning resumes without any design skills.
                            Choose from professional templates, customize easily, and download as PDF.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/dashboard"
                                className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <span>Get Started Free</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/templates"
                                className="flex items-center space-x-2 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-colors border-2 border-slate-200"
                            >
                                <span>View Templates</span>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 pt-8 border-t border-slate-200">
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-slate-900">10K+</div>
                                <div className="text-slate-500 text-sm">Resumes Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-slate-900">15+</div>
                                <div className="text-slate-500 text-sm">Templates</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-slate-900">100%</div>
                                <div className="text-slate-500 text-sm">Free to Use</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Zap className="w-4 h-4" />
                            <span>Powerful Features</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Everything you need to
                            <span className="block text-blue-600">build the perfect resume</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Our powerful suite of tools makes creating professional resumes effortless.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                        <Shield className="w-4 h-4" />
                        <span>100% Free • No Login Required</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to build your dream resume?
                    </h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of job seekers who have created stunning resumes with our free builder.
                    </p>
                    <Link
                        to="/templates"
                        className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <span>Start Building Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Landing;
