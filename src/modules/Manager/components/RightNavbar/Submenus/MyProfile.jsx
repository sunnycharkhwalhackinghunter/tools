//REACT ROUTER
import { Link } from "react-router-dom";

//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";
import NavProfile from "../../../../common/components/NavProfile/NavProfile";
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
      <NavProfile />

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
