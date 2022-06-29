import { Nav, Tab } from "react-bootstrap";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Select from "react-select";
export const PayrollIndex = () => {
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <TopPageTitle Name="Salary" />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <TopPageTitle Name="Attendence" />
            </Tab.Pane>
          </Tab.Content>
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">Salary</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Attendence</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <SalaryList />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <AttendenceList />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const SalaryList = () => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  const LeaveData = [
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "NA",
      Role: "NA",
      PreviousDues: "1000",
      Reimbursement: "NA",
      EmployeeMonth: "NA",
      GrossSalary: "33000",
      FinalPayable: "34000",
      Leave: "NA",
    },
  ];
  const LeaveApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>
            <input
              className="form-check-input ApprovalDetailsPage_input"
              type="checkbox"
            />
            {props.EID}
          </td>
          <td>{props.EmployeeName}</td>
          <td>{props.JoiningDate}</td>
          <td>{props.Role}</td>
          <td>{props.PreviousDues}</td>
          <td>{props.Reimbursement}</td>
          <td>{props.EmployeeMonth}</td>
          <td>{props.GrossSalary}</td>
          <td>{props.FinalPayable}</td>
          <td>{props.Leave}</td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className=" mt-4">
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
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
            <table className="table table-hover ApprovalDetailsPage_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Role</th>
                  <th scope="col">Previous Dues</th>
                  <th scope="col">Reimbursement</th>
                  <th scope="col">Employee Of the Month</th>
                  <th scope="col">Gross Salary</th>
                  <th scope="col">Final Payable</th>
                  <th scope="col">Leave</th>
                </tr>
              </thead>
              <tbody>
                {LeaveData.map((val, i) => {
                  return (
                    <LeaveApp
                      key={i}
                      EID={val.EID}
                      EmployeeName={val.EmployeeName}
                      JoiningDate={val.JoiningDate}
                      Role={val.Role}
                      Reimbursement={val.Reimbursement}
                      PreviousDues={val.PreviousDues}
                      EmployeeMonth={val.EmployeeMonth}
                      GrossSalary={val.GrossSalary}
                      FinalPayable={val.FinalPayable}
                      Leave={val.Leave}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="IssueAssets_btn_bottom_div">
            <button className="IssueAssets_btn">Run Payroll</button>
          </div>
        </div>
      </div>
    </>
  );
};
const AttendenceList = () => {
  const options = [
    { value: " Developers", label: " Developers" },
    { value: "Graphic Designer", label: "Graphic Designer" },
  ];
  const LeaveData = [
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
    {
      EID: "01",
      EmployeeName: "sunny charkhwal",
      JoiningDate: "-",
      Role: "Web Developer",
      Apr: "07",
      May: "07",
      Jun: "07",
      Jul: "07",
      Aug: "07",
      Sep: "07",
      Oct: "07",
      Nov: "07",
      Dec: "07",
      Jan: "07",
      Feb: "07",
      Mar: "07",
    },
  ];
  const LeaveApp = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.EmployeeName}</td>
          <td>{props.JoiningDate}</td>
          <td>{props.Role}</td>
          <td>{props.Apr}</td>
          <td>{props.May}</td>
          <td>{props.Jun}</td>
          <td>{props.Jul}</td>
          <td>{props.Aug}</td>
          <td>{props.Sep}</td>
          <td>{props.Oct}</td>
          <td>{props.Nov}</td>
          <td>{props.Dec}</td>
          <td>{props.Jan}</td>
          <td>{props.Feb}</td>
          <td>{props.Mar}</td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className=" mt-4">
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
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
            <table className="table table-hover ApprovalDetailsPage_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Role</th>
                  <th scope="col">Apr</th>
                  <th scope="col">May</th>
                  <th scope="col">Jun</th>
                  <th scope="col">Jul</th>
                  <th scope="col">Aug</th>
                  <th scope="col">Sep</th>
                  <th scope="col">Oct</th>
                  <th scope="col">Nov</th>
                  <th scope="col">Dec</th>
                  <th scope="col">Jan</th>
                  <th scope="col">Feb</th>
                  <th scope="col">Mar</th>
                </tr>
              </thead>
              <tbody>
                {LeaveData.map((val, i) => {
                  return (
                    <LeaveApp
                      key={i}
                      EID={val.EID}
                      EmployeeName={val.EmployeeName}
                      JoiningDate={val.JoiningDate}
                      Role={val.Role}
                      Apr={val.Apr}
                      May={val.May}
                      Jun={val.Jun}
                      Jul={val.Jul}
                      Aug={val.Aug}
                      Sep={val.Sep}
                      Oct={val.Oct}
                      Nov={val.Nov}
                      Dec={val.Dec}
                      Jan={val.Jan}
                      Feb={val.Feb}
                      Mar={val.Mar}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
