import React, { useState } from "react";
import LoginPage from "./AuthComponent/LoginPage";
import SignupPage from "./AuthComponent/SignupPage";

const AuthPage = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);
  return (
    <div className="w-screen flex justify-center h-screen">
      <div className="flex m-20 drop-shadow-2xl">
        {showLoginPage ? (
          <LoginPage
            setShowLoginPage={setShowLoginPage}
            className={`transition-opacity opacity-100`}
          />
        ) : (
          <SignupPage
            setShowLoginPage={setShowLoginPage}
            className={`transition-opacity opacity-0`}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
