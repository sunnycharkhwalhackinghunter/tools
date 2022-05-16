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
        <div>
          <div className="row">
            <div className="col-4">
              <div className=" bg-white">
                <p>Total Employees: 20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
