import React, { useEffect, useState } from "react";
import Logo from "./../../assest/images/skulogo.jpg";
import { CacheProvider } from "@emotion/react";
import { loginApi } from "../../utils/Api";
import { cacheRtl, CssTextField } from "../../utils/Register";
import { validateFormLogin } from "../../utils/login";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../features/tokenSlice";
const Login = ({
  loginPage,
  setLoginPage,
  showSuccessAuth,
  setShowSuccessAuth,
}) => {
  const [error, setError] = useState("");
  const user = useSelector((state) => state.userInfo.user);
  const [formDataLogin, setFormDataLogin] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onchangeFormData = (e) => {
    setFormDataLogin({
      ...formDataLogin,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{
    console.log(user)
  },[])
  const submitForm = (event) => {
    event.preventDefault();
    if (validateFormLogin(formDataLogin, setError)) {
      loginApi(formDataLogin)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          dispatch(setToken({token:res.data.data.token}));
          setShowSuccessAuth(!showSuccessAuth);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <div
        className={`fixed top-0 flex flex-col justify-center items-center h-screen w-1/2 transition-all duration-[800ms] bg-white ${
          loginPage
            ? "lg:-translate-x-0 -translate-x-1/2 w-1/2"
            : "hidden translate-x-full lg:flex"
        }`}
      >
        <div className="flex justify-center">
          <img className="w-44 h-12 object-cover" src={Logo} alt="" />
        </div>
        {/*username & password*/}
        <div className="flex justify-center items-center">
          <div className="mt-10">
            <h1 className="yekanBold text-xl text-gray-700 ">با سلام !</h1>
            <p className="yekanBold text-[13px] text-gray-500 mt-3">
              برای ورود لطفا نام کاربری و رمز عبور خود را وارد کنید
            </p>
            <form onSubmit={submitForm} className="mt-10">
              <CacheProvider value={cacheRtl}>
                <div className="flex flex-col gap-10 w-[400px]">
                  <CssTextField
                    type="text"
                    className="ltr"
                    label="نام کاربری"
                    value={formDataLogin.username}
                    onChange={onchangeFormData}
                    autoComplete="off"
                    name="username"
                  />
                  <CssTextField
                    className="ltr"
                    type="password"
                    label="رمز عبور"
                    value={formDataLogin.password}
                    onChange={onchangeFormData}
                    autoComplete="off"
                    name="password"
                  />
                </div>
              </CacheProvider>
              <p className="regular text-xs mt-2 text-red-500">{error}</p>
              <button className="bg-[#0096f5] border-2 border-white yekanBold mt-14 w-full text-white rounded-lg py-2">
                ورود
              </button>
            </form>
            <div className="flex justify-center"></div>
          </div>
        </div>
        <div className="yekanBold text-xs flex justify-center absolute bottom-10 right-0 left-0 gap-2">
          <p>آیا تاکنون ثبت نام نکرده اید ؟</p>
          <p
            onClick={() => setLoginPage(!loginPage)}
            className="text-[#0096f5] underline cursor-pointer"
          >
            ثبت نام
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
