import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import MyResumes from './pages/MyResumes';
import Templates from './pages/Templates';
import ResumeEditor from './pages/ResumeEditor';
import Profile from './pages/Profile';
import PublicResume from './pages/PublicResume';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Landing page - no sidebar */}
        <Route path="/" element={<Landing />} />

        {/* Public resume view - no sidebar */}
        <Route path="/p/:id" element={<PublicResume />} />

        {/* Internal pages with sidebar layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-resumes" element={<MyResumes />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editor/:id" element={<ResumeEditor />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
