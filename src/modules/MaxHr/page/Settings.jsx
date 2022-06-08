import { useState } from "react";
const Settings = () => {
  const [AboutProfileBtn, setAboutProfileBtn] = useState(true);
  const AboutProfileBtnOpen = () => {
    setAboutProfileBtn(!AboutProfileBtn);
  };
  return (
    <>
      <h1>Settings</h1>
      <span onClick={AboutProfileBtnOpen}>o</span>
      <div className={`${AboutProfileBtn ? "online4" : "offline4"}`}>
        <div>dddd</div>
      </div>
    </>
  );
};

export default Settings;
