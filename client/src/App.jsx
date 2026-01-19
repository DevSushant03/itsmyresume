import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext"; // Removed in favor of Clerk
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyResumes from "./pages/MyResumes";
import Templates from "./pages/Templates";
import ResumeEditor from "./pages/ResumeEditor";
import Profile from "./pages/Profile";
import PublicResume from "./pages/PublicResume";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      {/* Landing page - no sidebar */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/SignIn"
        element={<Login fallbackRedirectUrl="/dashboard" />}
      />
      <Route
        path="/SignUp"
        element={<Register fallbackRedirectUrl="/dashboard" />}
      />

      {/* Public resume view - no sidebar */}
      <Route path="/p/:id" element={<PublicResume />} />

      {/* Internal pages with sidebar layout */}
      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-resumes"
          element={
            <ProtectedRoute>
              <MyResumes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/templates"
          element={
            <ProtectedRoute>
              <Templates />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor/:id"
          element={
            <ProtectedRoute>
              <ResumeEditor />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
