import React, { useEffect, useState } from "react";
import { FaUserCheck, FaUserGraduate, FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const QuickAccess = ({
  findMyProject,
  findMasterProject,
  findAllProject,
  findStudentProject,
}) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  return (
    <div className="hidden lg:block px-10 bg-gray-100 ">
      <ul className="yekanBold flex text-xs gap-10 container_menu_category">
        <li onClick={findAllProject}>
          <FaUsers className="text-gray-500" />
          <span>همه پروژه ها</span>
        </li>
        <li onClick={findMasterProject}>
          <GiTeacher className="text-gray-500" />
          <span>پروژه‌ی استادان</span>
        </li>
        <li onClick={findStudentProject}>
          <FaUserGraduate className="text-gray-500" />
          <span>پروژه‌ی دانشجو‌ها</span>
        </li>
        {token && (
          <li onClick={findMyProject}>
            <FaUserCheck className="text-gray-500" />
            <span>پروژه‌های من</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default QuickAccess;
