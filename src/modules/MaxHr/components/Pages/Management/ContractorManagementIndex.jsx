import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";

export const ContractorManagementIndex = () => {
  return (
    <>
      <Top />
      <ContractorManagementList />
    </>
  );
};
const Top = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle Name="My Performance" />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
          <NavLink to="/">
            <span>Add Contractor</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
    </>
  );
};
const ContractorManagementList = (props) => {
  const ContractorManagementListData = [
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
    {
      SubcontractorID: "MX01",
      date: "05/25/2021",
      Name: "Ram Krishna Ayyar",
      Email: "ram@maxlence.com.au",
      Phone: "+91 9876543210",
      pay: "12000 / Project",
    },
  ];
  const ContractorManagementListApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.SubcontractorID}</td>
          <td>{props.date}</td>
          <td>{props.Name}</td>
          <td>{props.Email}</td>
          <td>{props.Phone}</td>
          <td>{props.pay}</td>
          <td>
            <span className="reimbursement_view_btn">
              <NavLink to="/">Action</NavLink>
            </span>
          </td>
        </tr>
      </>
    );
  };
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  return (
    <>
      <div className="custom_container_iner">
        <div>
          <div className="row g-3">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>From</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="ApprovalDetailsPage_date_picker">
                <label>to</label>
                <Input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Departments" />
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 dep_all">
              <div className="dashboard_top_week_Select">
                <Select options={options} placeholder="Sort by" />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
              <div className="ApprovalDetailsPage_date_picker">
                <div className="ApprovalDetailsPage_search_input_iner_div">
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ApprovalDetailsPage_top_div">
          <table className="table table-hover Contractor_Management_main_div text-center text-capitalize">
            <thead>
              <tr className="ApprovalDetailsPage_thead_tr">
                <th scope="col">Subcontractor ID</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Phone no</th>
                <th scope="col">Pay/Term</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ContractorManagementListData.map((val, i) => {
                return (
                  <ContractorManagementListApp
                    key={i}
                    SubcontractorID={val.SubcontractorID}
                    date={val.date}
                    Name={val.Name}
                    Email={val.Email}
                    Phone={val.Phone}
                    pay={val.pay}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
