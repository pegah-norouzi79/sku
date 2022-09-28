import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import { registerApi } from "../../utils/Api";
import UploadImage from "./UploadImage";
import {
  cacheRtl,
  CssTextField,
  valifateFormRegister,
} from "../../utils/Register";
import ResponsibleSelect from "./ResponsibleSelect";
import SelectSkill from "./SelectSkill";
import { useDispatch } from "react-redux";
import { userInformation } from "../../features/userInfo";
const Register = ({
  loginPage,
  setLoginPage,
  showSuccessAuth,
  setShowSuccessAuth,
}) => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");
  const [personName, setPersonName] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const [formDataRegister, setFormDataRegister] = useState({
    username: "",
    responeible: "",
    password: "",
    repeartPassword: "",
  });

  const dispatch = useDispatch();

  const onchangeFormData = (e) => {
    const { value, name } = e.target;

    setFormDataRegister({
      ...formDataRegister,
      [name]: value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (valifateFormRegister(file, formDataRegister, setError)) {
      const formData = new FormData();
      formData.append("image", file[0]);
      formData.append("username", formDataRegister.username);
      formData.append("password", formDataRegister.password);
      formData.append("responeible", formDataRegister.responeible);
      formData.append("skills", personName);
      setLoading(true);
      await registerApi(formData)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          setShowSuccessAuth(!showSuccessAuth);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setError("نام کاربری قبلا ثبت شده است.");
          } else setError("مشکلی رخ داده است.");
          setLoading(false);
        });
    }
  };
  return (
    <div
      className={`fixed  flex flex-col items-center top-0    h-screen   transition-all duration-[800ms] bg-white ${
        loginPage
          ? "translate-x-full"
          : "right-0 -translate-x-[50%] lg:-translate-x-0 w-[50%] "
      } `}
    >
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <div className="">
            <form onSubmit={submitForm}>
              <UploadImage file={file} setFile={setFile} />
              <CacheProvider value={cacheRtl}>
                <div className="flex flex-col gap-7 w-[400px] pt-6">
                  <CssTextField
                    className="ltr"
                    type="text"
                    label="نام کاربری"
                    autoComplete="off"
                    value={formDataRegister.username}
                    name="username"
                    onChange={onchangeFormData}
                  />

                  <ResponsibleSelect
                    value={formDataRegister.responeible}
                    onChange={onchangeFormData}
                    name="responeible"
                  />
                  <CssTextField
                    className="ltr"
                    type="password"
                    label="رمز عبور"
                    autoComplete="off"
                    value={formDataRegister.password}
                    name="password"
                    onChange={onchangeFormData}
                  />
                  <CssTextField
                    className="ltr"
                    type="password"
                    label="تکرار رمز عبور"
                    autoComplete="off"
                    value={formDataRegister.repeartPassword}
                    name="repeartPassword"
                    onChange={onchangeFormData}
                  />
                </div>
                <SelectSkill
                  personName={personName}
                  setPersonName={setPersonName}
                />
              </CacheProvider>
              <p className="regular text-xs mt-2 text-red-500">{error}</p>
              <button className="bg-[#0096f5] border-2 border-white yekanBold mt-8 w-full text-white rounded-lg py-2">
                {loading ? "در حال ارسال ..." : "ارسال"}
              </button>
            </form>
            <div className="flex justify-center"></div>
          </div>
        </div>
        <div className="yekanBold text-xs flex justify-center  pt-5 gap-2">
          <p>آیا قبلا ثبت نام کرده اید ؟</p>
          <p
            onClick={() => setLoginPage(!loginPage)}
            className="text-[#0096f5] underline cursor-pointer"
          >
            ورود
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
