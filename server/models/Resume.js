const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    },
    clerkUserId: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        default: 'Untitled Resume'
    },
    personalInfo: {
        fullName: String,
        email: String,
        phone: String,
        address: String,
        linkedin: String,
        github: String,
        website: String,
        summary: String
    },
    education: [{
        institution: String,
        degree: String,
        fieldOfStudy: String,
        startDate: String,
        endDate: String,
        current: Boolean,
        description: String
    }],
    experience: [{
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        current: Boolean,
        description: String
    }],
    skills: [{
        name: String,
        level: String
    }],
    projects: [{
        title: String,
        link: String,
        description: String,
        technologies: String
    }],
    templateId: {
        type: String,
        default: 'template1'
    },
    themeColor: {
        type: String,
        default: '#3b82f6'
    },
    isPublic: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Resume', resumeSchema);
