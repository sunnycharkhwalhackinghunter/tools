import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Input from "../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import React from "react";
export const TicketHistory = () => {
  return (
    <>
      <div className="custom_container">
        <div className="ticket_history_top_tile">
          <TopPageTitle
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
            Name="Ticket History"
          />
        </div>
        <div className="profile_tab_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">Daily</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Monthly</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="m_t"></div>
                <TicketHistoryList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="m_t"></div>
                <TicketHistoryList />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const TicketHistoryList = () => {
  const Data = [
    {
      serialNumber: "1",
      TicketID: "12339 cawcs13wr",
      TicketSubject: "Laptop Issue",
      AssignedPerson: "John Smith",
      CreatedDate: "24-04-2024",
      Priority: "Meduim",
      Status: "Progress",
    },
  ];
  const App = (props) => {
    return (
      <>
        <tr className="ApprovalDetailsPage_thead_td">
          <td>{props.serialNumber}</td>
          <td>{props.TicketID}</td>
          <td>{props.TicketSubject}</td>
          <td>{props.AssignedPerson}</td>
          <td>{props.CreatedDate}</td>
          <td>{props.Priority}</td>
          <td>{props.Status}</td>
          <td>
            <div className="contractor_management_list_btn">Action</div>
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
                <th scope="col">#</th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Ticket ID
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Ticket Subject
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Assigned Person
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Created date
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Priority
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">
                  <span className="new_application_table_filter_div">
                    Status
                    <span className="new_application_table_filter">
                      <BsCaretUpFill />
                      <BsCaretDownFill />
                    </span>
                  </span>
                </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((val, i) => {
                return (
                  <App
                    key={i}
                    serialNumber={val.serialNumber}
                    TicketID={val.TicketID}
                    TicketSubject={val.TicketSubject}
                    AssignedPerson={val.AssignedPerson}
                    CreatedDate={val.CreatedDate}
                    Priority={val.Priority}
                    Status={val.Status}
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
