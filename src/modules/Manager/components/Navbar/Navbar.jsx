//STYLES
import styles from "./Navbar.module.scss";

//CONTEXT
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

//REACT ROUTER
import { NavLink } from "react-router-dom";
import Logo from "../../../../pics/Logo.png";
import LogoImg from "../../../common/components/NavLogo/Logo";
import { AiOutlineSearch } from "react-icons/ai";
import { RiTableAltFill } from "react-icons/ri";
import Input from "../input/Input";
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
