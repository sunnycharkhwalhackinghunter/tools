//STYLES
import styles from "./RightNavbar.module.scss";

//HOOKS
import { useContext } from "react";

//CONTEXT
import NavContext from "../../Context/NavContext";

//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";
//Components
import MyProfile from "./Submenus/MyProfile";
import Notifications from "./Submenus/Notifications";
import Input from "../input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div className={styles.container}>
      {/* BURGER */}

      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
      >
        <MdOutlineMenu />
      </div>
      <div className="top_nav_man_input_div d-none d-xxl-block d-xl-block d-md-block">
        <div className="top_nav_iner_div_input">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <Input
            type="text"
            className="form-control"
            placeholder="What are you looking for today?"
          />
        </div>
      </div>
      {/* ACTIONS */}
      <div className={styles.actions}>
        <Notifications />
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
