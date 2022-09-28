import { AiFillLike } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Category = () => {
  return (
    <div>
      <h1 className="text-center text-lg pt-3">دسته بندی پروژه ها</h1>
      <p className="text-center text-gray-400 font-semibold pt-1 text-xs">
        Norouzi
      </p>
      <div>
        <Card title="همه پروژه ها" icon={<GiTeacher/>}/>
        <Card title="پروژه استادان" icon={<GiTeacher/>}/>
        <Card title="پروژه دانشجویان" icon={<FaUserGraduate/>}/>
        <Card title="پروژه های من" icon={<AiFillLike/>}/>
      </div>
    </div>
  );
};

export default Category;

const Card = ({ title, icon }) => {
  return (
    <div className="text-gray-500 py-3 border-b border-dashed hover:bg-gray-100 text-xs flex items-center justify-between px-2">
      <div className="flex items-center gap-3">
      {icon} {title} 
      </div>
      <MdOutlineKeyboardArrowLeft size={23}/>
    </div>
  );
};
