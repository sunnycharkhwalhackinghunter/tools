//STYLES
import styles from "./Navbar.module.scss";

//CONTEXT
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

//REACT ROUTER
import { NavLink } from "react-router-dom";
import Logo from "../../../../pics/Logo.png";
import LogoImg from "../../../common/components/NavLogo/Logo";
//ICONS
import { MdPayments } from "react-icons/md";

import { ImBullhorn } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { RiTableAltFill, RiBankFill } from "react-icons/ri";
import { FaUserTie, FaUsers, FaBook, FaClipboardList } from "react-icons/fa";
import { BsCalendarX, BsCalendar2CheckFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../input/Input";
import {
  faGaugeHigh,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
const NavUrl = ({ url, icon, description }) => {
  const { nav, setNav } = useContext(NavContext);
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setNav(!nav);
  };
  return (
    <li className={styles.li_navlink}>
      <NavLink
        to={`${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        onClick={() => checkWindowSize()}
      >
        {icon}
        <span className={styles.description}>{description}</span>
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      <nav className={nav ? undefined : styles.nav_small}>
        {/* LOGO */}
        <LogoImg className="logo_div" img={Logo} alt="logo" />

        {/* MENU */}
        <ul className={styles.menu_container}>
          <div className=" d-block d-xxl-none d-xl-none d-md-none">
            <div className="nav_mobile_search_main_div">
              <div className="nav_mobile_search_iner_div">
                <span>
                  <AiOutlineSearch />
                </span>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <NavUrl
            url="dashboard"
            icon={<RiTableAltFill />}
            description="Dashboard"
          />
          <NavUrl
            url="announcement"
            icon={<ImBullhorn />}
            description="Announcement"
          />
          <NavUrl url="profile" icon={<FaUserTie />} description="profile" />
          <NavUrl url="finance" icon={<MdPayments />} description="finance" />
          <NavUrl
            url="attendence"
            icon={<BsCalendarX />}
            description="attendence"
          />
          <NavUrl
            url="performance"
            icon={<FontAwesomeIcon icon={faGaugeHigh} />}
            description="performance"
          />
          <NavUrl
            url="organizationchart"
            icon={<FaUsers />}
            description="organization chart"
          />
          <NavUrl
            url="hiring"
            icon={<BsCalendar2CheckFill />}
            description="hiring"
          />
          <NavUrl
            url="training"
            icon={<FontAwesomeIcon icon={faPersonChalkboard} />}
            description="training"
          />
          <NavUrl
            url="taskmanagement"
            icon={<FaBook />}
            description="task management"
          />
          <NavUrl url="Payroll" icon={<RiBankFill />} description="Payroll" />
          <NavUrl
            url="reports"
            icon={<FaClipboardList />}
            description="reports"
          />
          <NavUrl
            url="settings"
            icon={<FaClipboardList />}
            description="Settings"
          />
        </ul>

        {/* LOGOUT BUTTON */}
        {/* <div
          className={`${styles.btn_logout}`}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div> */}
      </nav>

      <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
  );
};

export default Navbar;
