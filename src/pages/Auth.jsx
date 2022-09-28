import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import CheckAnimation from "../components/CheckAnimation";
import AUthImage from "./../assest/images/sku.jpg";
const Auth = () => {
  const [loginPage, setLoginPage] = useState(true);
  const [showSuccessAuth, setShowSuccessAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="w-screen h-screen flex justify-between">
        <Login
          showSuccessAuth={showSuccessAuth}
          setShowSuccessAuth={setShowSuccessAuth}
          loginPage={loginPage}
          setLoginPage={setLoginPage}
        />
        <Register
          showSuccessAuth={showSuccessAuth}
          setShowSuccessAuth={setShowSuccessAuth}
          loginPage={loginPage}
          setLoginPage={setLoginPage}
        />

        <div className="hidden lg:block w-[50%] border-r border-gray-100 shadow-lg">
          <img className="w-full h-full object-cover" src={AUthImage} alt="" />
        </div>
      </div>

      <CheckAnimation showSuccessAuth={showSuccessAuth} />
    </>
  );
};

export default Auth;
