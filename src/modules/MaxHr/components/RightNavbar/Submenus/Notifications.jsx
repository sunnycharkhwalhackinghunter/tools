//ICONS , STYLES
import { MdNotifications } from "react-icons/md";
import { BsFillChatLeftFill } from "react-icons/bs";
import styles from "./Notifications.module.scss";
import NotificationImg from "../../../../common/components/img/Img";
import Notification from "../../../../../pics/profile.jpeg";
//HOOKS
import { useState } from "react";
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { NavLink } from "react-router-dom";
const Notifications = () => {
  const [isNotificationsOpen, setisNotificationsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNotificationsOpen(false);
  });
  return (
    <>
      <div>
        <NavLink
          className="messages_icon_top_nav"
          to="messages"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Messages"
        >
          <BsFillChatLeftFill />
        </NavLink>
      </div>
      <div
        ref={domNode}
        className={`${styles.icon_container} ${
          styles.notifications_container
        } ${isNotificationsOpen ? styles.icon_active : undefined}`}
        onClick={() => {
          setisNotificationsOpen(!isNotificationsOpen);
        }}
      >
        <div
          className=" position-relative"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Notification"
        >
          <span className="position-absolute top-0 start-100 translate-middle badge badge_top rounded-circle bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
          <MdNotifications />
        </div>

        {/* INBOX SUBMENU */}
        <div
          className={`${styles.submenu} ${
            isNotificationsOpen ? styles.submenu_active : ""
          }`}
        >
          <h3 className={styles.title}>Notifications</h3>
          <div className={styles.notifications}>
            <div className="notification_top_div">
              <div className=" row m-0">
                <div className="notification_img_col col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                  <div className="notification_img_div">
                    <NotificationImg
                      className="notification_img"
                      backgroundImage={Notification}
                    />
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-9 col-9">
                  <div>
                    <div className="notification_text">
                      <p className="notification_name">Gaurav Kaushik</p>
                      <p className="notification_mess">
                        I have bought a new car
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div className="notification_time_div">
                    <p>3 Seconds ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
