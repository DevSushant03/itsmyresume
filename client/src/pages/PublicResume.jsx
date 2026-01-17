import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LivePreview from '../components/editor/LivePreview';

const PublicResume = () => {
    const { id } = useParams();
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                // Assuming public access logic in backend allows access if isPublic is true,
                // OR we need to make a specific public endpoint.
                // For now trying standard endpoint, might fail if not logged in and not handled Publicly.
                // Wait, I implemented getResumeById with public check in backend.
                // BUT it checks Auth OR Public. So unauthenticated request should work if public.
                const res = await axios.get(`http://localhost:5000/api/resumes/${id}`);
                setResumeData(res.data);
            } catch (error) {
                console.error('Error fetching resume:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchResume();
    }, [id]);

    if (loading) return <div className="text-center py-20">Loading Resume...</div>;
    if (error || !resumeData) return <div className="text-center py-20">Resume not found or private.</div>;

    return (
        <div className="min-h-screen bg-slate-100 py-10 flex justify-center">
            <div className="transform origin-top scale-100">
                <LivePreview resume={resumeData} />
            </div>
        </div>
    );
};

export default PublicResume;
