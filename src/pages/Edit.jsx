import { CacheProvider } from "@emotion/react";
import { useState } from "react";
import ResponsibleSelect from "../components/auth/ResponsibleSelect";
import SelectSkill from "../components/auth/SelectSkill";
import UploadImage from "../components/auth/UploadImage";
import { cacheRtl, CssTextField } from "../utils/Register";

const Edit = () => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");

  const [formDataRegister, setFormDataRegister] = useState({
    username: "",
    responeible: "",
    password: "",
    repeartPassword: "",
  });

  const onchangeFormData = (e) => {
    const { value, name } = e.target;

    setFormDataRegister({
      ...formDataRegister,
      [name]: value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex justify-center items-center">
        <div className="">
          <form onSubmit={submitForm} className="">
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
              <SelectSkill />
            </CacheProvider>
            <p className="regular text-xs mt-2 text-red-500">{error}</p>
            <button className="bg-[#0096f5] border-2 border-white yekanBold mt-8 w-full text-white rounded-lg py-2">
              ویرایش
            </button>
          </form>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
