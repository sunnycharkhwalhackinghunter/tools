import { useState } from "react";
const Dashboard = () => {
  const [userBreks, setUserBreks] = useState(true);
  const changNameUser = () => {
    setUserBreks(!userBreks);
  };
  return (
    <>
      <h1>Dashboard</h1>
      <div className={`${userBreks ? "online3" : "offline3"}`}>sunny</div>
      <button onClick={changNameUser}>v</button>
    </>
  );
};

export default Dashboard;
