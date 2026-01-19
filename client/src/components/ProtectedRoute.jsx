import { useAuth, RedirectToSignIn } from '@clerk/clerk-react';

const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    return children;
};

export default ProtectedRoute;
