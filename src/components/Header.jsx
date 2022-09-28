import Logo from "../assest/images/skulogo.jpg";
import { BiSearch } from "react-icons/bi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleShowAddNewPost } from "../features/newPostSlice";
import LogOut from "./LogOut";

const Header = ({search,setSearch}) => {
  const dispatch = useDispatch();
  return (
    <header className="flex justify-between lg:px-7 px-3 items-center py-4 lg:py-6 shadow-sm sticky top-0 bg-white z-50">
      {/*header right*/}
      <div className="md:flex-1 flex gap-7">
        <img className="w-40" src={Logo} alt="دانشگاه شهرکرد" />
        <div className="hidden md:flex flex-1 gap-3 bg-gray-100 items-center rounded-lg px-2 py-3 text-gray-700">
          <BiSearch className="h-6 w-6" />
          <input
            placeholder="لطفا پروژه یا شخص مورد نظر را جستجو کنید..."
            className="bg-transparent outline-none w-full placeholder:text-xs"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
      </div>
      <HiOutlineCloudUpload
        className="md:hidden w-8 h-8 text-gray-600"
        onClick={() => dispatch(toggleShowAddNewPost())}
      />
      <div className="hidden lg:block flex-1">
        <LogOut styleMenu={14}/>
      </div>
    </header>
  );
};

export default Header;
