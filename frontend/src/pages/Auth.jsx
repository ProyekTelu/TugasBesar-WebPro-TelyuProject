import React, { useState } from "react";
import Login from "../Components/AuthComponent/Login";
import Signup from "../Components/AuthComponent/Signup";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="w-screen md:h-screen flex justify-center">
      <div className="flex justify-center h-full w-full">
        {showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Signup setShowLogin={setShowLogin} />
        )}
      </div>
    </div>
  );
};

export default Auth;
