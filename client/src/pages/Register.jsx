import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <SignUp />
    </div>
  );
};

export default Register;
