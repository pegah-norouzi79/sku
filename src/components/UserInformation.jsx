import { FiEdit } from "react-icons/fi";
import { convertEnToFa } from "../ConvertEnToFa";
import BackGround from "../assest/images/bgProfile.jpeg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const UserInformation = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.user);
  return (
    <div>
      {/*background*/}
      <div
        className="w-full rounded-t-lg relative h-48 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BackGround})` }}
      >
        <div className="absolute -bottom-7 left-4">
          {/*image user*/}
          <img
            className="w-24 h-24  rounded-full border-4 shadow-lg"
            src={`http://localhost:8080/${user.image}`}
            alt=""
          />
        </div>
      </div>
      {/*name & edit*/}
      <div className="pt-10 px-3 text-gray-700 border border-gray-100 shadow-sm rounded-b-lg">
        <div className="flex justify-between">
          <p className="text-lg">{user?.username}</p>
          <FiEdit
            className="w-5 h-5 cursor-pointer"
            onClick={() => navigate("/edit")}
          />
        </div>
        <div className="flex justify-between pt-8 border-b-2 border-gray-100 border-dashed pb-5">
          <p className="text-lg">پروژه ها</p>
          <p>{convertEnToFa(user?.projects)}</p>
        </div>
        <div className="py-5 w-full overflow-hidden">
          <div className="text-md flex flex-wrap gap-2">مهارت ها:{user?.skills.split(",").map((skill,index)=>{
            return <p className="bg-gray-100 py-1 px-2 rounded-lg" key={index}>{skill}</p>
          })} </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
