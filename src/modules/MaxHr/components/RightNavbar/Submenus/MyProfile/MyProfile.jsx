import NavProfile from "../../../../../common/components/NavProfile/NavProfile";
import useClickOutside from "../../../../CustomHooks/ClickOutside";
import { useState } from "react";
import styles from "./MyProfile.module.scss";
import UserProfile from "../../../../../common/components/img/Img";
import UserImg from "../../../../../../pics/profile.jpeg";
import { AiTwotoneSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SwitchInput from "../../../../../common/components/input/Input";
import { BiChevronDown } from "react-icons/bi";
import { MdDinnerDining, MdLocalHospital } from "react-icons/md";
import { CgCoffee } from "react-icons/cg";
import { RiHotelBedLine } from "react-icons/ri";
import UserBreks from "./userBreks/UserBreks";
import UserInput from "./UserInput/UserInput";
const MyProfile = () => {
  const [userBreks, setUserBreks] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  const changName = () => {
    setIsOnline(!isOnline);
  };

  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  const UserBreksData = [
    {
      icon: <MdDinnerDining />,
      title: "Lunch Break ",
      time: "30 mint",
    },
    {
      icon: <CgCoffee />,
      title: " Break ",
      time: "15 mint",
    },
    {
      icon: <RiHotelBedLine />,
      title: " Sick ",
      time: "today",
    },
    {
      icon: <MdLocalHospital />,
      title: " Emergrncy ",
      time: "2 hr",
    },
  ];
  return (
    <div ref={domNode} className={styles.avatar_container}>
      <NavProfile
        onClick={() => {
          setisProfileOpen(!isProfileOpen);
        }}
      />
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
      >
        <div className=" position-relative">
          <div className="user_profile_top_card_div">
            <div className="row m-0">
              <div className="col-3">
                <div className="user_profile_img_div">
                  <UserProfile
                    className="user_profile_img"
                    backgroundImage={UserImg}
                  />
                </div>
              </div>
              <div className="col-9">
                <div className="user_profile_imfo">
                  <p className="user_profile_name">Gaurav Kaushik</p>
                  <p className="user_profile_work">UI/UX designer</p>
                  <p className="user_profile_work">Employee ID: # 12</p>
                  <NavLink to="profile" className="user_profile_icon_div">
                    <AiTwotoneSetting className="user_profile_icon" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="user_profile_hr">
            <hr />
          </div>
          <div>
            <div className="profile_switch_main_div  ">
              <div className="row m-0">
                <div className="col-6">
                  <div className="profile_switch_top">
                    <div>
                      <label className="switch">
                        <SwitchInput type="checkbox" className="switch_input" />
                        <span
                          className="slider round"
                          onClick={changName}
                        ></span>
                      </label>
                    </div>
                    <div className="profile_switch_onlin_div">
                      <p className={`${isOnline ? "offline2" : " online2"}`}>
                        {isOnline ? "Offline" : " Online"}
                      </p>
                      <span className="user_breks_menu" onClick={changNameUser}>
                        <BiChevronDown />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="profile_switch_time_div">
                    <p className={`${isOnline ? "offline" : " online"}`}>
                      04:23:45
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${userBreks ? "online3" : "offline3"}`}>
              <div className="user_breks_main_div" onClick={changNameUser}>
                {UserBreksData.map((val, i) => {
                  return (
                    <UserBreks
                      key={i}
                      icon={val.icon}
                      title={val.title}
                      time={val.time}
                    />
                  );
                })}
              </div>
              <div className=" user_input_main_div">
                <div className="row m-0">
                  <div className="col-8">
                    <UserInput
                      title="title"
                      type="text"
                      className="form-control"
                      placeholder="Type new"
                    />
                  </div>
                  <div className="col-4">
                    <UserInput
                      title="time"
                      type="text"
                      className="form-control"
                      placeholder="30 mints"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
