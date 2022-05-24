import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import url from "../../../pics/profile.jpeg";
const Resignation = (props) => {
  const ResignationData = [
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
    {
      EID: "01",
      From: "Roushan Kumar",
      ItemName: "Printer",
      date: "05/25/2021",
      EComment: "NA",
    },
  ];
  const ResignationApp = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [userApprove, setUserApprove] = useState(true);
    const [userBreks, setUserBreks] = useState(true);

    const changNameUser = () => {
      setUserBreks(!userBreks);
    };
    const changApprove = () => {
      setUserApprove(!userApprove);
    };
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.EID}</td>
          <td>{props.From}</td>
          <td>{props.ItemName}</td>
          <td>{props.date}</td>
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
          <td>{props.EComment}</td>
          <td>
            <div
              className={`${
                userBreks ? "add_remarks_title" : "add_remarks_title2"
              }`}
            >
              <div className="add_remarks_title" onClick={changNameUser}>
                Add Remarks
                <span>
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            <div
              className={`${userBreks ? "AddRemarksRemover" : "AddRemarks"}`}
            >
              <div className="add_remarks_input_div">
                <Input
                  type="text"
                  className="form-control"
                  placeholder=" Add Remarks..."
                />
              </div>
            </div>
          </td>
          <td className=" position-relative">
            <div className="add_remarks_title3">
              Pending
              <span onClick={changApprove}>
                <FiChevronDown />
              </span>
            </div>
            <div className={`${userApprove ? "approve2" : "reject2"}`}>
              <div
                className="reimbursement_card_options"
                onClick={changApprove}
              >
                <p className="">approve</p>
                <p>reject</p>
              </div>
            </div>
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
                    <h3>Resignation</h3>
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
            <table className="table table-hover ApprovalDetailsPage_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">From</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Document</th>
                  <th scope="col">E. Comment</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {ResignationData.map((val, i) => {
                  return (
                    <ResignationApp
                      key={i}
                      EID={val.EID}
                      From={val.From}
                      ItemName={val.ItemName}
                      date={val.date}
                      EComment={val.EComment}
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
export default Resignation;
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
