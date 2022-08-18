import { AboutProfileInput } from "./AboutProfile";
import SwitchInput from "../../../../../common/components/input/Input";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const IssueAssets = (props) => {
  const IssueAssetsApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.AssetsName}</td>
          <td>{props.AssetsNumber}</td>
          <td>{props.IssueDate}</td>
          <td>{props.Remarks}</td>
        </tr>
      </>
    );
  };
  const IssueAssetsAppData = [
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const options = [
    { value: " Laptop", label: " Laptop" },
    { value: "mouse", label: " mouse" },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-6">
            <div className="EmployeesDocument_top_title">
              <h3>Issued Assets</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="Issue_Assets_btn_div">
              <button>download</button>
            </div>
          </div>
        </div>
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
              <Select options={options} placeholder="Assets types" />
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
        <div>
          <table className="table text-center IssueAssets_top_div">
            <thead>
              <tr>
                <th scope="col">Assets Name</th>
                <th scope="col">Assets Number</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Remarks if any</th>
              </tr>
            </thead>
            <tbody>
              {IssueAssetsAppData.map((val, i) => {
                return (
                  <IssueAssetsApp
                    key={i}
                    AssetsName={val.AssetsName}
                    AssetsNumber={val.AssetsNumber}
                    IssueDate={val.IssueDate}
                    Remarks={val.Remarks}
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
export const ReturnIssueAssets = (props) => {
  const IssueAssetsApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.AssetsName}</td>
          <td>{props.AssetsNumber}</td>
          <td>{props.IssueDate}</td>
          <td>{props.ReturnDate}</td>
          <td>{props.Remarks}</td>
        </tr>
      </>
    );
  };
  const IssueAssetsAppData = [
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      IssueDate: "09/23/2021",
      ReturnDate: "09/23/2021",
      Remarks: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const options = [
    { value: " Laptop", label: " Laptop" },
    { value: "mouse", label: " mouse" },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-6">
            <div className="EmployeesDocument_top_title">
              <h3>Returned Assets</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="Issue_Assets_btn_div">
              <button>download</button>
            </div>
          </div>
        </div>
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
              <Select options={options} placeholder="Assets types" />
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
        <div>
          <table className="table text-center IssueAssets_top_div">
            <thead>
              <tr>
                <th scope="col">Assets Name</th>
                <th scope="col">Assets Number</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">Remarks if any</th>
              </tr>
            </thead>
            <tbody>
              {IssueAssetsAppData.map((val, i) => {
                return (
                  <IssueAssetsApp
                    key={i}
                    AssetsName={val.AssetsName}
                    AssetsNumber={val.AssetsNumber}
                    IssueDate={val.IssueDate}
                    Remarks={val.Remarks}
                    ReturnDate={val.ReturnDate}
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
export const IssueAssetsAppTop = () => {
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Issued Assets</h3>
        </div>
        <div className="IssueAssetsAppTop_main_div">
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Assets Name"
                    type="text"
                    className="form-control"
                    placeholder="What’s assets"
                  />
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Assets Number"
                    type="text"
                    className="form-control"
                    placeholder="What’s assets number"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 IssueAssetsAppTop_right_div">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Issue date"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Expected Return date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Remarks if any"
                type="text"
                className="form-control"
                placeholder="Add Remarks if any"
              />
            </div>
          </div>
        </div>
        <div className="IssueAssets_btn_bottom_div">
          <button className="IssueAssets_btn">Issue Assets</button>
        </div>
      </div>
    </>
  );
};
export const EmployeesReturnAssets = () => {
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Return Assets</h3>
        </div>
        <div className="IssueAssetsAppTop_main_div">
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Assets Name"
                    type="text"
                    className="form-control"
                    placeholder="Computer"
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Assets Number"
                    type="text"
                    className="form-control"
                    placeholder="CXRpo234cdfg"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Issue date"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Expected Return date"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Actual Return date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <AboutProfileInput
                label="Remarks if any"
                type="text"
                className="form-control"
                placeholder="Add Remarks if any"
              />
            </div>
          </div>
        </div>
        <div className="IssueAssets_btn_bottom_div">
          <button className="IssueAssets_btn">Return Assets</button>
        </div>
      </div>
    </>
  );
};
export const Disable = (props) => {
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>{props.title}</h3>
        </div>
        <div className="IssueAssetsAppTop_main_div">
          <div className=" mb-3">
            <label className="switch">
              <SwitchInput type="checkbox" className="switch_input" />
              <span className="slider slider2 round"></span>
            </label>
          </div>
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <AboutProfileInput
                label="Remarks if any"
                type="text"
                className="form-control"
                placeholder="Add Remarks if any"
              />
            </div>
          </div>
        </div>
        <div className="IssueAssets_btn_bottom_div">
          <button className="IssueAssets_btn">Confirm</button>
        </div>
      </div>
    </>
  );
};

export const OffBoard = () => {
  const OffBoardApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.AssetsName}</td>
          <td>{props.AssetsNumber}</td>
          <td>{props.Remarks}</td>
          <td>{props.IssueDate}</td>
          <td>{props.ExpectedReturnDate}</td>
          <td>{props.ActualReturnDate}</td>
          <td>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
            </div>
          </td>
        </tr>
      </>
    );
  };
  const OffBoardAppData = [
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "12/05/2021",
      ActualReturnDate: "12/05/2021",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "12/05/2021",
      ActualReturnDate: "12/05/2021",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "12/05/2021",
      ActualReturnDate: "12/05/2021",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "12/05/2021",
      ActualReturnDate: "12/05/2021",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "12/05/2021",
      ActualReturnDate: "12/05/2021",
    },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Off Board</h3>
        </div>
        <div className="IssueAssetsAppTop_main_div">
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Resignation Accepted Date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 IssueAssetsAppTop_right_div">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                  <AboutProfileInput
                    label="Off board date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="OffBoard_tabel_title">
            <p>Check below items for smooth Offboarding</p>
          </div>
          <table className="table text-center IssueAssets_top_div mt-0">
            <thead>
              <tr>
                <th scope="col">Assets Name</th>
                <th scope="col">Assets Number</th>
                <th scope="col">Remarks</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Expected Return Date</th>
                <th scope="col">Acctual Return Date</th>
                <th>Returned</th>
              </tr>
            </thead>
            <tbody>
              {OffBoardAppData.map((val, i) => {
                return (
                  <OffBoardApp
                    key={i}
                    AssetsName={val.AssetsName}
                    AssetsNumber={val.AssetsNumber}
                    Remarks={val.Remarks}
                    IssueDate={val.IssueDate}
                    ExpectedReturnDate={val.ExpectedReturnDate}
                    ActualReturnDate={val.ActualReturnDate}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="IssueAssets_btn_bottom_div IssueAssets_btn_bottom_div2">
          <div>
            <NavLink to="/">
              <button className="IssueAssets_btn2"> Schedule</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/">
              <button className="IssueAssets_btn3"> Schedule Off Board</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
