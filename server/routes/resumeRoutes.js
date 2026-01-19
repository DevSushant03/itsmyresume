const express = require('express');
const router = express.Router();
const {
    getResumes,
    getResumeById,
    createResume,
    updateResume,
    deleteResume
} = require('../controllers/resumeController');
const { requireAuth } = require('@clerk/express');

// Public route for viewing potentially public resume needs careful handling in getResumeById
// However, since we use protect middleware globally for some, we might need to adjust.
// For now, let's keep it simple: /:id might be public. 
// But protect middleware will throw if no token. We might need a different route or flexible middleware.

// Simplest approach: /api/resumes/:id is protected. Public view uses a separate endpoint or logic.
// Let's stick to protected for now for editing.
// For public view, maybe /api/public/resumes/:id without protect?

router.route('/').get(requireAuth(), getResumes).post(requireAuth(), createResume);
router.route('/:id').get(requireAuth(), getResumeById).put(requireAuth(), updateResume).delete(requireAuth(), deleteResume);

module.exports = router;
