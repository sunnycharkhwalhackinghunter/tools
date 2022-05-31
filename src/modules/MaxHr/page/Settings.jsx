import { useState } from "react";
const Settings = () => {
  const [PostTextareaOption, setPostTextareaOption] = useState(true);
  const PostTextareaOptionOpen = () => {
    setPostTextareaOption(!PostTextareaOption);
  };
  return (
    <>
      <h1>Settings</h1>
      <span onClick={PostTextareaOptionOpen}>o</span>
      <div className={`${PostTextareaOption ? "online4" : "offline4"}`}>
        <div>dddd</div>
      </div>
    </>
  );
};

export default Settings;
