import { Avatar, IconButton, Menu, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearUserInformation } from "../features/userInfo";

const LogOut = ({ styleMenu }) => {
  const user = useSelector((state) => state.userInfo.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = async () => {
    await dispatch(clearUserInformation());
    await localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="flex-1 flex justify-end">
      {token ? (
        <Tooltip title="تنظیمات کاربری">
          <div>
            <IconButton onClick={handleClick} size="medium">
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#f78fb3",
                }}
                src={`http://localhost:8080/${user?.image}`}
              ></Avatar>
            </IconButton>
          </div>
        </Tooltip>
      ) : (
        <button
          className="text-xs text-[#0096f5] cursor-pointer"
          onClick={() => navigate("/auth")}
        >
          ورود/ثبت نام
        </button>
      )}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.22))",
            mt: 1,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: styleMenu,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <div className="flex items-center cursor-pointer px-4">
          <Avatar className="!w-9 !h-9" />
          <p className="yekanBold text-xs px-3">{user?.username}</p>
        </div>

        <div
          className="flex items-center mt-5 mb-2 cursor-pointer justify-around"
          onClick={logOut}
        >
          <BiLogOutCircle className="!w-5 !h-5" />
          <p className="yekanBold text-xs px-3">خروج</p>
        </div>
      </Menu>
    </div>
  );
};

export default LogOut;
