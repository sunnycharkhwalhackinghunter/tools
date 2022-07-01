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
        <TopPageTitle Name="Salary" />
        <SalaryList />
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
