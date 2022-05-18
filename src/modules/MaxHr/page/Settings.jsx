import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const Settings = () => {
  const [userBreks, setUserBreks] = useState(true);
  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  return (
    <>
      <h1>Settings</h1>
      <span onClick={changNameUser}>
        <BiChevronDown />
      </span>
      <div className={`${userBreks ? "online4" : "offline4"}`}>
        <div>dddd</div>
      </div>
    </>
  );
};

export default Settings;
