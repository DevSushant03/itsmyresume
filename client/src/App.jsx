import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import MyResumes from './pages/MyResumes';
import Templates from './pages/Templates';
import ResumeEditor from './pages/ResumeEditor';
import Profile from './pages/Profile';
import PublicResume from './pages/PublicResume';

// Login/Register pages commented out for now
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Auth routes disabled for now */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/p/:id" element={<PublicResume />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-resumes" element={<MyResumes />} />
          <Route path="templates" element={<Templates />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editor/:id" element={<ResumeEditor />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
