import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerk_key) throw new Error("no clerk key");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={clerk_key}
        signInUrl="/SignIn"
        signUpUrl="/SignUp"
       
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
);
