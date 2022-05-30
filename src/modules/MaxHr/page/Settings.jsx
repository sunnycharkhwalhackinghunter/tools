import { useState } from "react";
const Settings = () => {
  const [WhoAwayAppPopup, setWhoAwayAppPopup] = useState(true);
  const WhoAwayAppPopupOpen = () => {
    setWhoAwayAppPopup(!WhoAwayAppPopup);
  };
  return (
    <>
      <h1>Settings</h1>
      <span onClick={WhoAwayAppPopupOpen}>o</span>
      <div className={`${WhoAwayAppPopup ? "online4" : "offline4"}`}>
        <div>dddd</div>
      </div>
    </>
  );
};

export default Settings;
