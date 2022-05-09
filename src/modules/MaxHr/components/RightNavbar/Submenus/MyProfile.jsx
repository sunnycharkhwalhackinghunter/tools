//REACT ROUTER
import { Link } from "react-router-dom";
import ProfileImg from "../../../../common/components/img/Img";
import Profile from "../../../../../pics/profile.jpeg";
//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";

const MyProfile = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => {
        setisProfileOpen(!isProfileOpen);
      }}
    >
      {/* AVATAR ICON */}
      <div className="profile_img_top_div">
        <div className="profile_img_div">
          <ProfileImg className="profile_img" backgroundImage={Profile} />
        </div>
      </div>

      {/* AVATAR/SETTINGS SUBMENU */}
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
      >
        <div className={styles.info}>
          <span className={styles.name}>WebDesign</span>
          <span className={styles.role}>Adminstrator</span>
        </div>
        <div className={styles.settings}>
          <Link to="/">Settings</Link>
          <Link to="/">Sign Out</Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
