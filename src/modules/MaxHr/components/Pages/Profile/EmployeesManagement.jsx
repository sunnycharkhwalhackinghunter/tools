import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { EmployeesCard } from "./components/EmployeesCard";
export const EmployeesManagement = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <EmployeesCard />
      </div>
    </>
  );
};
const PageTop = () => {
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div ">
          <div className="col-12">
            <TopPageTitle Name="Employees’ Management" />
          </div>
        </div>
      </div>
    </>
  );
};
