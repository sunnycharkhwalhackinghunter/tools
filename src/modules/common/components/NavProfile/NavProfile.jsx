import ProfileImg from "../img/Img";
import Profile from "../../../../pics/profile.jpeg";
const NavProfile = () => {
  return (
    <>
      <div className="profile_img_top_div">
        <div className="profile_img_div">
          <ProfileImg className="profile_img" backgroundImage={Profile} />
        </div>
      </div>
    </>
  );
};
export default NavProfile;
