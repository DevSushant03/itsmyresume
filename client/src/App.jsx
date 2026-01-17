import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyResumes from "./pages/MyResumes";
import Templates from "./pages/Templates";
import ResumeEditor from "./pages/ResumeEditor";
import Profile from "./pages/Profile";
import PublicResume from "./pages/PublicResume";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <AuthProvider>
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
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
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
