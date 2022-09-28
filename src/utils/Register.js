import createCache from "@emotion/cache";
import { styled } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import TextField from "@mui/material/TextField";

// Create rtl cache
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0096f5",
    fontFamily: "yekanBold",
    fontSize: "16px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0096f5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00000040",
    },
    "&:hover fieldset": {
      borderColor: "#00000090",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0096f5",
    },
  },
});

export const valifateFormRegister = (
  file,
  formData,
  setError
) => {
  if (file.length === 0) {
    setError("لطفا عکس پروفایل خود را انتخاب کنید");
    return false;
  } else if (formData.username === "") {
    setError("لطفا نام کاربری خود را وارد کنید");
    return false;
  } else if (formData.responeible === "") {
    setError("لطفا موقغیت شغلی خود را انتخاب کنید");
    return false;
  } else if (formData.password === "") {
    setError("لطفا رمز عبور خود را وارد کنید ");
    return false;
  } else if (formData.repeartPassword === "") {
    setError("لطفا تکرار رمز عبور خود را وارد کنید");
    return false;
  } else if (
    formData.password !== formData.repeartPassword
  ) {
    setError("  رمز عبور با تکرار ان تطابق ندارد");
    return false;
  }
  setError("");
  return true;
};
