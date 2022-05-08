//ICONS , STYLES
import { MdNotifications } from "react-icons/md";
import { BsFillChatLeftFill } from "react-icons/bs";
import styles from "./Notifications.module.scss";

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
        <NavLink className="messages_icon_top_nav" to="messages">
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
        <MdNotifications />

        {/* INBOX SUBMENU */}
        <div
          className={`${styles.submenu} ${
            isNotificationsOpen ? styles.submenu_active : ""
          }`}
        >
          <h3 className={styles.title}>Notifications</h3>
          <div className={styles.notifications}>
            <div className=" d-flex">
              <div>Notifications</div>
              <div>Notifications</div>
              <div>Notifications</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
