import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export const EmployeesAttendance = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
            <TopPageTitle Name="Employees Attendance" />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
            <NavLink to="/hr/previous_leaves">
              <span>Action on Leave</span>
              <BsArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
