import { useState } from "react";
const Settings = () => {
  const [ReplyTop, setReplyTop] = useState(true);
  const ReplyTopOpen = () => {
    setReplyTop(!ReplyTop);
  };
  return (
    <>
      <h1>Settings</h1>
      <span onClick={ReplyTopOpen}>o</span>
      <div className={`${ReplyTop ? "online4" : "offline4"}`}>
        <div>dddd</div>
      </div>
    </>
  );
};

export default Settings;
