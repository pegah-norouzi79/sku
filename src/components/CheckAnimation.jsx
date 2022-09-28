import { Dialog } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assest/css/checkAnimation.css";

const CheckAnimation = ({ showSuccessAuth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (showSuccessAuth) {
      setTimeout(() => {
        navigate("/");
      }, [2000]);
    }
  }, [showSuccessAuth]);
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={showSuccessAuth}
    >
      <div className="pb-20">
        <div className="wrapper mt-5">
          <svg
            className="animated-check"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.1 12.7L9 17.6 20.3 6.3"
              fill="none"
            />
          </svg>
        </div>
        <p className="yekanBold pr-10 text-lg text-gray-700 text-center">
          با موفقیت انجام شد
        </p>
      </div>
    </Dialog>
  );
};

export default CheckAnimation;
