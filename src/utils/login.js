export const validateFormLogin = (formData, setError) => {
  if (formData.username === "") {
    setError("لطفا نام کاربری خود را وارد کنید");
    return false;
  } else if (formData.password === "") {
    setError("لطفا رمز عبور خود را وارد کنید ");
    return false;
  }
  setError("");
  return true;
};
