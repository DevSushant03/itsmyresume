import { Link } from 'react-router-dom';
import {
    FileText, Edit3, Download, Share2, ArrowRight, Sparkles, CheckCircle,
    Zap, Shield, Smartphone, PenTool, Layout, Users
} from 'lucide-react';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. HERO SECTION */}
            <header className="relative overflow-hidden bg-slate-50">
                {/* Decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3"></div>
                </div>

                <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/logo.png" alt="itsmyresume" className="h-8 w-auto" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                itsmyresume
                            </span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium">Dashboard</Link>
                            <Link to="/templates" className="text-slate-600 hover:text-blue-600 font-medium">Templates</Link>
                            <Link to="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-medium text-slate-600">The Ultimate Resume Builder</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
                        Create Professional <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Resumes in Minutes
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                        Stand out from the crowd with our free, easy-to-use resume builder.
                        Choose from professional templates, customize seamlessly, and download your PDF instantly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/dashboard" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 hover:-translate-y-1">
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link to="/templates" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-slate-300">
                            View Templates
                        </Link>
                    </div>
                </div>
            </header>

            {/* 2. ABOUT PROJECT SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">About itsmyresume</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            <span className="font-semibold text-blue-600">itsmyresume</span> is a powerful, free-to-use resume building platform designed for students, freshers, and professionals.
                            We understand the struggle of formatting resumes in Word processors. Our mission is to simplify this process, allowing you to focus on your content while we handle the design.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">For Students</span>
                            <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">For Freshers</span>
                            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">For Professionals</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES SECTION */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to build a job-winning resume.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Layout className="w-6 h-6" />, title: 'Professional Templates', desc: 'Curated templates approved by HR experts.' },
                            { icon: <Edit3 className="w-6 h-6" />, title: 'Easy Editor', desc: 'Real-time drag and drop editing experience.' },
                            { icon: <Zap className="w-6 h-6" />, title: 'Live Preview', desc: 'See your changes instantly as you type.' },
                            { icon: <Download className="w-6 h-6" />, title: 'PDF Download', desc: 'High-quality PDF export compatible with ATS.' },
                            { icon: <Share2 className="w-6 h-6" />, title: 'Public Link', desc: 'Share your resume with a unique URL.' },
                            { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Friendly', desc: 'Edit your resume on any device, anywhere.' },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HOW IT WORKS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-slate-600">Your professional resume in 4 simple steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Pick a Template', desc: 'Choose from our range of modern designs.' },
                            { step: '02', title: 'Enter Details', desc: 'Fill in your experience, skills and education.' },
                            { step: '03', title: 'Customize', desc: 'Adjust colors and layout with live preview.' },
                            { step: '04', title: 'Download', desc: 'Save as PDF or share your public link.' },
                        ].map((item, idx) => (
                            <div key={idx} className="relative text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg group-hover:bg-blue-600 transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 6. WHY CHOOSE US */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Choose itsmyresume?</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We focus on simplicity and effectiveness. Unlike complex design tools, our builder is tailored specifically for resumes that get passed through ATS systems and impress hiring managers.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '100% Free to use for everyone',
                                    'No watermark on standard downloads',
                                    'Data privacy compliant',
                                    'ATS-friendly layouts',
                                    'Instant generation'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                            <div className="space-y-6">
                                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">95%</div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">Faster Creation</h4>
                                        <p className="text-sm text-slate-500">Create a resume in under 10 minutes</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">2x</div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-slate-900">More Interviews</h4>
                                        <p className="text-sm text-slate-500">Users report doubling interview calls</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA SECTION */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Start Building Your Resume Today</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Don't let a bad resume hold you back. Join thousands of users creating their future with itsmyresume.
                    </p>
                    <Link to="/dashboard" className="inline-flex items-center px-10 py-5 bg-blue-600 text-white rounded-full text-xl font-bold shadow-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all">
                        Create Resume Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* 8. FOOTER */}
            <Footer />
        </div>
    );
};

export default Landing;
