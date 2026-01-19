const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getResumes = async (token) => {
    const response = await fetch(`${API_URL}/resumes`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error('Failed to fetch resumes');
    return await response.json();
};

export const getResumeById = async (id, token) => {
    // If we have a token, use it. If not, try public access (which backend handles).
    // Note: Backend might require token for private, but allow public without.
    // However, our backend implementation mostly checks token.
    // We'll send token if available.

    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/resumes/${id}`, {
        headers
    });
    if (!response.ok) {
        // Handle 404 or 401
        if (response.status === 404) return null;
        throw new Error('Failed to fetch resume');
    }
    return await response.json();
};

export const createResume = async (data, token) => {
    const response = await fetch(`${API_URL}/resumes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create resume');
    return await response.json();
};

export const updateResume = async (id, data, token) => {
    const response = await fetch(`${API_URL}/resumes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update resume');
    return await response.json();
};

export const deleteResume = async (id, token) => {
    const response = await fetch(`${API_URL}/resumes/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error('Failed to delete resume');
    return await response.json();
};
