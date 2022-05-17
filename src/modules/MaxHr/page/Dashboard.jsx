import {
  PagesTopTitle,
  UserName,
  InfoCard,
  EmployeesChart,
} from "../components/Pages/Dashboard/index";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="custom_container">
        <UserName />
        <PagesTopTitle title="dashbaord" />
        <InfoCard />
        <EmployeesChart />
      </div>
    </>
  );
};

export default Dashboard;
