/**
 * Resume Store - localStorage utility for managing resumes
 */

const STORAGE_KEY = 'resumes';

// Generate unique ID
export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Get all resumes
export const getResumes = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// Save all resumes
export const saveResumes = (resumes) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));
};

// Get single resume by ID
export const getResumeById = (id) => {
    const resumes = getResumes();
    return resumes.find(resume => resume.id === id) || null;
};

// Create new resume
export const createResume = (templateId, title = 'Untitled Resume') => {
    const resumes = getResumes();
    const newResume = {
        id: generateId(),
        title,
        templateId,
        isPublic: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        personalInfo: {
            fullName: '',
            email: '',
            phone: '',
            location: '',
            summary: '',
            linkedin: '',
            website: ''
        },
        education: [],
        experience: [],
        skills: [],
        projects: []
    };
    resumes.push(newResume);
    saveResumes(resumes);
    return newResume;
};

// Update resume
export const updateResume = (id, updatedData) => {
    const resumes = getResumes();
    const index = resumes.findIndex(resume => resume.id === id);
    if (index !== -1) {
        resumes[index] = {
            ...resumes[index],
            ...updatedData,
            updatedAt: new Date().toISOString()
        };
        saveResumes(resumes);
        return resumes[index];
    }
    return null;
};

// Delete resume
export const deleteResume = (id) => {
    const resumes = getResumes();
    const filtered = resumes.filter(resume => resume.id !== id);
    saveResumes(filtered);
    return true;
};

// Initialize with demo resumes if empty
export const initializeDemoResumes = () => {
    const resumes = getResumes();
    if (resumes.length === 0) {
        const demoResumes = [
            {
                id: generateId(),
                title: 'Software Developer Resume',
                templateId: 'template1',
                isPublic: true,
                createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
                updatedAt: new Date(Date.now() - 86400000).toISOString(),
                personalInfo: {
                    fullName: 'Rahul Sharma',
                    email: 'rahul.sharma@email.com',
                    phone: '+91 9876543210',
                    location: 'Mumbai, India',
                    summary: 'Passionate software developer with 3+ years of experience in building web applications.',
                    linkedin: 'linkedin.com/in/rahulsharma',
                    website: 'rahulsharma.dev'
                },
                education: [
                    {
                        id: '1',
                        degree: 'B.Tech in Computer Science',
                        institution: 'IIT Mumbai',
                        location: 'Mumbai',
                        startDate: '2018',
                        endDate: '2022',
                        description: 'CGPA: 8.5/10'
                    }
                ],
                experience: [
                    {
                        id: '1',
                        title: 'Software Developer',
                        company: 'TechCorp India',
                        location: 'Mumbai',
                        startDate: 'Jan 2022',
                        endDate: 'Present',
                        description: 'Developing scalable web applications using React and Node.js'
                    }
                ],
                skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'Git'],
                projects: [
                    {
                        id: '1',
                        name: 'E-Commerce Platform',
                        description: 'Built a full-stack e-commerce platform with payment integration',
                        technologies: 'React, Node.js, MongoDB, Stripe',
                        link: 'github.com/rahul/ecommerce'
                    }
                ]
            }
        ];
        saveResumes(demoResumes);
    }
};
