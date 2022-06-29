import ProfileIcon from "../../../../../common/components/img/Img";
import PDF from "../../../../../../pics/pdfd.png";
import DOC from "../../../../../../pics/docsd.jpg";
import ImagedDoc from "../../../../../../pics/imaged.png";
import ModalIcon1 from "../../../../../../pics/modal1.png";
import ModalIcon2 from "../../../../../../pics/modal2.png";
import ModalIcon3 from "../../../../../../pics/modal3.png";
import { Nav, Tab } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import React from "react";
import PdfIcon from "../../../../../../pics/docnew.png";
import { NavLink } from "react-router-dom";
export const EmployeesDocument = () => {
  const EmployeesDocumentTopNameApp = (props) => {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey={props.eventKey}>{props.eventKeyName}</Nav.Link>
        </Nav.Item>
      </>
    );
  };
  const EmployeesDocumentTopNameData = [
    {
      eventKey: "1",
      eventKeyName: "Releaving Letter",
    },
    {
      eventKey: "2",
      eventKeyName: "Offer Letter",
    },

    {
      eventKey: "3",
      eventKeyName: "NDA",
    },
    {
      eventKey: "4",
      eventKeyName: "Voter ID Card",
    },
    {
      eventKey: "5",
      eventKeyName: "Aadhar Card",
    },
    {
      eventKey: "6",
      eventKeyName: "Bank Pasbook",
    },
    {
      eventKey: "7",
      eventKeyName: "Passport",
    },
    {
      eventKey: "8",
      eventKeyName: "6 Months Bank Statement",
    },
    {
      eventKey: "9",
      eventKeyName: "Signed Copy of NDA",
    },
    {
      eventKey: "10",
      eventKeyName: "Educational Certificate 01",
    },
    {
      eventKey: "11",
      eventKeyName: "Achievement Certificate 01",
    },
    {
      eventKey: "13",
      eventKeyName: "Orginazation Policy",
    },
    {
      eventKey: "12",
      eventKeyName: "Add Others",
    },
  ];
  const EmployeesDocumentTabPan = (props) => {
    return (
      <>
        <Tab.Pane eventKey={props.eventKey}>{props.data}</Tab.Pane>
      </>
    );
  };
  const EmployeesDocumentTabPanData = [
    {
      eventKey: "1",
      data: <UploadDocument />,
    },
    {
      eventKey: "2",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "3",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "4",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "5",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "6",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "7",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "8",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "9",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "10",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "11",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "12",
      data: <DocumentDetailsList />,
    },
    {
      eventKey: "13",
      data: <DocumentDetailsList />,
    },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>documents</h3>
        </div>
        <div className="EmployeesDocument_list_top_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Nav variant="pills" className="flex">
              {EmployeesDocumentTopNameData.map((val, i) => {
                return (
                  <EmployeesDocumentTopNameApp
                    key={i}
                    eventKey={val.eventKey}
                    eventKeyName={val.eventKeyName}
                  />
                );
              })}
            </Nav>

            <Tab.Content>
              {EmployeesDocumentTabPanData.map((val, i) => {
                return (
                  <EmployeesDocumentTabPan
                    key={i}
                    eventKey={val.eventKey}
                    data={val.data}
                  />
                );
              })}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export const EmployeesTabPanData = () => {
  return (
    <>
      <div>
        <EmployeesTabPanDataIner />
        <div className="btnupload_bottom_div">
          <button className="btnupload_bottom">Download</button>
        </div>
      </div>
    </>
  );
};
export const EmployeesTabPanDataIner = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="EmployeesTabPanDataImg_div_top">
        <div className="EmployeesTabPanDataImg_iner_div">
          <div className="EmployeesTabPanDataImg_iner_icon_div">
            <RiDeleteBin6Line
              variant="primary"
              onClick={() => setModalShow(true)}
            />
            <UploadDocumentModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="EmployeesTabPanDataImg_div_bottom_inner">
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={PDF}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={DOC}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={ImagedDoc}
            />
          </div>
          <div className="EmployeesTabPanDataImg_div_bottom_inner">
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={PDF}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={DOC}
            />
            <ProfileIcon
              className="EmployeesTabPanDataImg"
              backgroundImage={ImagedDoc}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const UploadDocument = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="EmployeesDocument_top_title mt-3">
        <h3>Upload Document</h3>
        <div className="UploadDocument_select">
          <div className="dashboard_top_week_Select">
            <label>Choose Document Type</label>
            <Select options={options} placeholder="Select" />
            <small>only .pdf and not more than 2mb in size</small>
          </div>
        </div>
        <div className="UploadDocument_img_div">
          <UploadDocumentIner />
        </div>

        <div className="btnupload_bottom_div">
          <button className="btnupload_bottom">Choose a file to upload</button>
        </div>
      </div>
    </>
  );
};
export const UploadDocumentIner = () => {
  return (
    <>
      <div className="UploadDocument_img_div_iner">
        <div className=" text-center">
          <button className="btnupload">Choose a file to upload</button>
          <p>or drag file in here</p>
        </div>
      </div>
    </>
  );
};
const UploadDocumentModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="UploadDocumentModal_body">
        <div className="UploadDocumentModal_body_close_btn">
          <span onClick={props.onHide}>
            <AiOutlineClose />
          </span>
        </div>
        <p className="UploadDocumentModal_body_title">Are you sure!</p>
        <p className="UploadDocumentModal_body_text">
          Once deleted it can not be reverted.
        </p>
        <div className="UploadDocumentModal_body_btn_div">
          <button
            className="UploadDocumentModal_body_btn"
            onClick={props.onHide}
          >
            Close
          </button>
          <button className="UploadDocumentModal_body_btn2">Delete</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export const DocumentDetailsList = () => {
  const changNameUser = (PdfIcon) => {
    window.open(PdfIcon, "__blank");
  };
  const UserDetailsListData = [
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      type: "image",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.docx",
      type: "doc",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.pdf",
      type: "pdf",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      type: "image",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.docx",
      type: "doc",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.pdf",
      type: "pdf",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      type: "image",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.docx",
      type: "doc",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.pdf",
      type: "pdf",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      type: "image",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.docx",
      type: "doc",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.pdf",
      type: "pdf",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      type: "image",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.docx",
      type: "doc",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.pdf",
      type: "pdf",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon1,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.png",
      type: "image",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon2,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.docx",
      type: "doc",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
    {
      ListIcon: ModalIcon3,
      ListName: "Screenshot 2022-05-26 at 8.46.54 AM.pdf",
      type: "pdf",
      Owner: "sunny charkhwal",
      modified: "28 Apr 2022",
    },
  ];
  const UserDetailsListCard = (props) => {
    return (
      <>
        <tr>
          <td className="UserDetailsList_icon_top_div">
            <div className=" d-flex align-items-center">
              <ProfileIcon
                className="UserDetailsList_icon"
                backgroundImage={props.ListIcon}
              />
              <span onClick={() => changNameUser(PdfIcon)}>
                {props.ListName}
              </span>
            </div>
          </td>
          <td>{props.type}</td>
          <td>{props.Owner}</td>
          <td>{props.modified}</td>
          <td>
            <NavLink to="/">download</NavLink>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className=" px-3">
        <table className="table text-capitalize mt-4 table_top_div">
          <thead>
            <tr className="UserDetails_list_th">
              <th scope="col">name</th>
              <th scope="col">Type</th>
              <th scope="col">Owner</th>
              <th scope="col">Last modified</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {UserDetailsListData.map((val, i) => {
              return (
                <UserDetailsListCard
                  key={i}
                  ListIcon={val.ListIcon}
                  ListName={val.ListName}
                  type={val.type}
                  Owner={val.Owner}
                  modified={val.modified}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
