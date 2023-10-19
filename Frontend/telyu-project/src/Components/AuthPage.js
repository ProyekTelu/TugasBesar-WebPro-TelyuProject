import React, { useState } from "react";
import LoginPage from "./AuthComponent/LoginPage";
import SignupPage from "./AuthComponent/SignupPage";
import Background from "../img/authBackground.png";

const AuthPage = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);

  return (
    <div
      className="w-screen md:h-screen flex justify-center"
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      // }}
    >
      <div className="flex justify-center h-full w-full">
        {showLoginPage ? (
          <LoginPage setShowLoginPage={setShowLoginPage} />
        ) : (
          <SignupPage setShowLoginPage={setShowLoginPage} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
