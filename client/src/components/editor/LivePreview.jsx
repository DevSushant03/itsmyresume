import React from 'react';

const LivePreview = ({ resume }) => {
    // Simple Default Template
    const { personalInfo, education, experience, skills, projects } = resume;

    return (
        <div className="bg-white shadow-lg p-8 min-h-[297mm] w-[210mm] mx-auto text-slate-800" id="resume-preview">
            {/* Header */}
            <header className="border-b-2 border-slate-800 pb-6 mb-6">
                <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo?.fullName || 'Your Name'}</h1>
                <div className="flex flex-wrap text-sm text-slate-600 gap-x-4 gap-y-1">
                    {personalInfo?.email && <span>{personalInfo.email}</span>}
                    {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
                    {personalInfo?.address && <span>• {personalInfo.address}</span>}
                    {personalInfo?.linkedin && <span>• {personalInfo.linkedin}</span>}
                    {personalInfo?.github && <span>• {personalInfo.github}</span>}
                </div>
            </header>

            {/* Summary */}
            {personalInfo?.summary && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-slate-300 mb-3 uppercase tracking-wide">Professional Summary</h2>
                    <p className="text-sm leading-relaxed text-slate-700">{personalInfo.summary}</p>
                </section>
            )}

            {/* Experience */}
            {experience?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-slate-300 mb-3 uppercase tracking-wide">Experience</h2>
                    <div className="space-y-4">
                        {experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-slate-800">{exp.position}</h3>
                                    <span className="text-sm text-slate-500 italic">
                                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                    </span>
                                </div>
                                <div className="text-sm font-medium text-slate-600 mb-1">{exp.company}</div>
                                <p className="text-sm text-slate-700 whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-slate-300 mb-3 uppercase tracking-wide">Projects</h2>
                    <div className="space-y-4">
                        {projects.map((proj, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-slate-800">
                                        {proj.title}
                                        {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="ml-2 text-blue-600 text-xs font-normal underline">Link</a>}
                                    </h3>
                                </div>
                                <div className="text-xs text-slate-500 mb-1">{proj.technologies}</div>
                                <p className="text-sm text-slate-700">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-slate-300 mb-3 uppercase tracking-wide">Education</h2>
                    <div className="space-y-2">
                        {education.map((edu, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-slate-800">{edu.institution}</h3>
                                    <span className="text-sm text-slate-500 italic">
                                        {edu.startDate} - {edu.endDate}
                                    </span>
                                </div>
                                <div className="text-sm text-slate-600">
                                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                                </div>
                                {edu.description && <p className="text-xs text-slate-500 mt-1">{edu.description}</p>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skills?.length > 0 && (
                <section>
                    <h2 className="text-lg font-bold border-b border-slate-300 mb-3 uppercase tracking-wide">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded border border-slate-200">
                                {skill.name || skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default LivePreview;
