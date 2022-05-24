import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "react-bootstrap";
import React from "react";
import url from "../../../pics/profile.jpeg";
const TimesheetReview = (props) => {
  const TimesheetReviewData = [
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
    {
      EID: "01",
      EmployeeName: "Roushan Kumar",
      ProjectName: "Maxlence HR",
      StartingFrom: "11 Oct 2022",
      Endson: "11 Oct 2022",
      Duration: "08 Hours",
    },
  ];
  const TimesheetReviewApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.EmployeeName}</td>
          <td>{props.ProjectName}</td>
          <td>{props.StartingFrom}</td>
          <td>{props.Endson}</td>
          <td>{props.Duration}</td>
          <td>
            <span
              className="reimbursement_view_btn"
              onClick={() => setModalShow(true)}
            >
              view
            </span>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="custom_container">
        <div className="custom_container_iner">
          <div>
            <div className="row">
              <div className="col-12">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to="/hr/dashboard">
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>Timesheet Review</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
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
            <table className="table table-hover TimesheetReview_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Starting From</th>
                  <th scope="col">Ends on</th>
                  <th scope="col">Duration</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody>
                {TimesheetReviewData.map((val, i) => {
                  return (
                    <TimesheetReviewApp
                      key={i}
                      EID={val.EID}
                      EmployeeName={val.EmployeeName}
                      ProjectName={val.ProjectName}
                      StartingFrom={val.StartingFrom}
                      Endson={val.Endson}
                      Duration={val.Duration}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className=" text-capitalize text-center">
            <button className=" ApprovalDetailsPage_btn">Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TimesheetReview;
// Modal
const MyVerticallyCenteredModal = (props) => {
  const changNameUser = (url) => {
    window.open(url, "__blank");
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reimbursement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" text-capitalize text-center">
          <div className="row">
            <div className="col-6">
              <div className="dowload_title" onClick={() => changNameUser(url)}>
                profile.jpeg
              </div>
            </div>
            <div className="col-6">
              <button className="dowload_title_download">download</button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div>
                <a
                  className="dowload_title"
                  href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  download
                  rel="noreferrer"
                  target="_blank"
                >
                  dummy.pdf
                </a>
              </div>
            </div>
            <div className="col-6">
              <a
                className="dowload_title_download"
                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                download
                rel="noreferrer"
                target="_blank"
              >
                download
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
