import {
  PagesTopTitle,
  UserName,
  InfoCard,
} from "../components/Pages/Dashboard/index";

const Dashboard = () => {
  return (
    <>
      <div className="custom_container">
        <UserName />
        <PagesTopTitle title="dashbaord" />
        <InfoCard />
      </div>
    </>
  );
};

export default Dashboard;
