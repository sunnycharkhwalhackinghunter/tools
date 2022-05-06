//ICONS , STYLES
import { FiMessageCircle } from "react-icons/fi";
import styles from "./Notifications.module.scss";

//HOOKS
import { useState } from "react";
import useClickOutside from "../../../CustomHooks/ClickOutside";

const Notifications = () => {
  const [isNotificationsOpen, setisNotificationsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNotificationsOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={`${styles.icon_container} ${styles.notifications_container} ${
        isNotificationsOpen ? styles.icon_active : undefined
      }`}
      onClick={() => {
        setisNotificationsOpen(!isNotificationsOpen);
      }}
    >
      <FiMessageCircle />

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
  );
};

export default Notifications;
