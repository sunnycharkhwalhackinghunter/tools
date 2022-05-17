import {
  PagesTopTitle,
  UserName,
  InfoCard,
  EmployeesChart,
} from "../components/Pages/Dashboard/index";
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
