import { createContext, useState, useContext, useEffect } from 'react';
import { initializeDemoResumes } from '../utils/resumeStore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Static user - no authentication needed
    const [user] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        createdAt: new Date('2024-01-01').toISOString()
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize demo resumes on first load
        initializeDemoResumes();
        setLoading(false);
    }, []);

    // Logout is UI-only, just clears localStorage
    const logout = () => {
        localStorage.clear();
        alert('Logged out successfully! (localStorage cleared)');
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ user, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
