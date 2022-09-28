import { Dialog } from "@mui/material";
import { comment } from "postcss";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
const Comments = ({ comments, showComment, setShowComment }) => {
  const handleClose = () => setShowComment(!showComment);
  const user = useSelector((state) => state.userInfo.user);
  return (
    <Dialog
      open={showComment}
      fullWidth={true}
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div>
        <div className="flex items-center px-2">
          <IoMdClose
            className="cursor-pointer"
            onClick={handleClose}
            size={22}
          />
          <h1 className="text-center flex-1 yekanBold pt-2">یادداشت ها</h1>
        </div>
        <div className="px-2">
          {comments.length === 0 ? (
            <div className="flex pb-5 pt-8 flex-col justify-center items-center">
              <FaRegComment size={35} />
              <span className="flex justify-center pt-3 yekanBold text-xs">
                یاداشتی ثبت نشده است{" "}
              </span>
            </div>
          ) : (
            comments.map((item, index) => {
              return (
                <div
                  key={index}
                  className="block border-b pb-3 border-dashed mt-3"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      className="rounded-full w-8 h-8"
                      src={`http://localhost:8080/${item.imageProfile}`}
                      alt=""
                    />
                    <p className="text-xs regular">{item.username}</p>
                  </div>
                  <p className="text-xs regular pt-1">{item.comment}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default Comments;
