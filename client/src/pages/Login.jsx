import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <SignIn />
    </div>
  );
};

export default Login;
