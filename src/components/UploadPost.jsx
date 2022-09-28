import { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleShowAddNewPost } from "../features/newPostSlice";
import Logo from "../assest/images/sku.jpg"
const UploadPost = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  return (
    <div className="flex flex-col gap-2 max-w-[350px] min-w-[350px]">
      {token ? (
        <div
          onClick={() => dispatch(toggleShowAddNewPost())}
          className="sticky top-32 h-fit rounded-lg flex-1 cursor-pointer hidden md:block"
        >
          <div className="border border-gray-100 shadow-sm rounded-lg flex flex-col justify-center items-center py-6">
            <AiOutlineCloudUpload size={70} className="text-gray-400/70" />
            <p className="text-sm text-[#0096f5] pt-2">اضافه کردن پست جدید</p>
          </div>
        </div>
      ) : (
        <div className="border-2 border-white shadow-md h-fit px-3 py-6 text-xs text-[#0096f5] rounded-lg">
          <p className="text-center">
            لطفا برای اضافه کردن پست، ابتدا ثبت نام کنید.
          </p>
        </div>
      )}
      <div className="border rounded-lg border-gray-100 p-3 mt-3">
        <h2 className="py-2">لیست کاربران</h2>
        <div className="flex items-center gap-5 pt-1 rounded-lg  my-1">
          <img
            className="rounded-full w-14 h-14"
            src={Logo}
            alt=""
          />
          <div className="text-gray-700 text-xs space-y-1">
            <p>پگاه جان</p>
            <p>
              {false === "master"
                ? "استاد"
                : false === "PHD-student"
                ? "دانشجوی دکترا"
                : false === "MSc-student"
                ? "دانشجوی ارشد"
                : "دانشجوی کارشناسی"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-1 rounded-lg my-1">
          <img
            className="rounded-full w-14 h-14"
            src={Logo}
            alt=""
          />
          <div className="text-gray-700 text-xs space-y-1">
            <p>پگاه جان</p>
            <p>
              {false === "master"
                ? "استاد"
                : false === "PHD-student"
                ? "دانشجوی دکترا"
                : false === "MSc-student"
                ? "دانشجوی ارشد"
                : "دانشجوی کارشناسی"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-1 rounded-lg my-1">
          <img
            className="rounded-full w-14 h-14"
            src={Logo}
            alt=""
          />
          <div className="text-gray-700 text-xs space-y-1">
            <p>پگاه جان</p>
            <p>
              {false === "master"
                ? "استاد"
                : false === "PHD-student"
                ? "دانشجوی دکترا"
                : false === "MSc-student"
                ? "دانشجوی ارشد"
                : "دانشجوی کارشناسی"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-1 rounded-lg my-1">
          <img
            className="rounded-full w-14 h-14"
            src={Logo}
            alt=""
          />
          <div className="text-gray-700 text-xs space-y-1">
            <p>پگاه جان</p>
            <p>
              {false === "master"
                ? "استاد"
                : false === "PHD-student"
                ? "دانشجوی دکترا"
                : false === "MSc-student"
                ? "دانشجوی ارشد"
                : "دانشجوی کارشناسی"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 pt-1 rounded-lg my-1">
          <img
            className="rounded-full w-14 h-14"
            src={Logo}
            alt=""
          />
          <div className="text-gray-700 text-xs space-y-1">
            <p>پگاه جان</p>
            <p>
              {false === "master"
                ? "استاد"
                : false === "PHD-student"
                ? "دانشجوی دکترا"
                : false === "MSc-student"
                ? "دانشجوی ارشد"
                : "دانشجوی کارشناسی"}
            </p>
          </div>
        </div>
        <p className="text-[#0096f5] text-center cursor-pointer text-xs pt-4">مشاهده همه</p>
      </div>
    </div>
  );
};

export default UploadPost;
