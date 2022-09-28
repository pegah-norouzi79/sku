import LogOut from "../components/LogOut";
import UserInformation from "../components/UserInformation";
const Profile = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 z-[99999999]">
        <LogOut styleMenu={"85%"}/>
      </div>
      <UserInformation />
    </div>
  );
};

export default Profile;
