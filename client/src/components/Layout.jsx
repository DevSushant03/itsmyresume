import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />
            {/* Main Content - with left margin for sidebar on desktop */}
            <main className="md:ml-64 p-4 sm:p-6 lg:p-8 pt-16 md:pt-6 lg:pt-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
