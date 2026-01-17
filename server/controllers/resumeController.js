const Resume = require('../models/Resume');
const User = require('../models/User');

// @desc    Get user resumes
// @route   GET /api/resumes
// @access  Private
const getResumes = async (req, res) => {
    const resumes = await Resume.find({ user: req.user.id });
    res.status(200).json(resumes);
};

// @desc    Get single resume
// @route   GET /api/resumes/:id
// @access  Private (or Public if isPublic is true)
const getResumeById = async (req, res) => {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
    }

    // Check for public access or ownership
    if (resume.isPublic) {
        return res.status(200).json(resume);
    }

    // If not public, check auth
    if (!req.user || resume.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    res.status(200).json(resume);
};

// @desc    Create resume
// @route   POST /api/resumes
// @access  Private
const createResume = async (req, res) => {
    const resume = await Resume.create({
        user: req.user.id,
        title: req.body.title || 'Untitled Resume',
        personalInfo: {
            fullName: req.user.name,
            email: req.user.email
        },
        templateId: req.body.templateId || 'template1'
    });

    res.status(200).json(resume);
};

// @desc    Update resume
// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = async (req, res) => {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
    }

    if (resume.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedResume);
};

// @desc    Delete resume
// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = async (req, res) => {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
    }

    if (resume.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    await resume.deleteOne();

    res.status(200).json({ id: req.params.id });
};

module.exports = {
    getResumes,
    getResumeById,
    createResume,
    updateResume,
    deleteResume
};
