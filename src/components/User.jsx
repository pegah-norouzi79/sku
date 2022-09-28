import UserInformation from "./UserInformation";
import { useSelector } from "react-redux";
import LoadingUserInformation from "./LoadingUserInformation";
import { useEffect, useState } from "react";
const User = () => {
  const user = useSelector((state) => state.userInfo.user);
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  return (
    <div className="sticky top-32 flex-1 h-fit rounded-lg max-w-[350px] min-w-[350px] hidden md:block">
      {token ? (
        user.username ? (
          <UserInformation />
        ) : (
          <LoadingUserInformation />
        )
      ) : (
        <div className="border-2 rounded-lg">
          <p>با سلام،لطفا برای لایک و نظر دادن ابتدا در سایت ثبت نام کنید. </p>
        </div>
      )}
    </div>
  );
};

export default User;
