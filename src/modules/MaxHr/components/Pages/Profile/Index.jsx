import { Nav, Tab } from "react-bootstrap";
import { PagesTopTitle } from "../../../components/Pages/Dashboard/index";
import React from "react";
import { EmployeesProfileCard } from "./components/EmployeesProfileCard";
import { EmployeesCard } from "./components/EmployeesCard";
import { Announcement } from "./components/Announcement";
import { AboutProfile } from "./components/AboutProfile";
import {
  EmployeesDocument,
  EmployeesTabPanData,
} from "./components/EmployeesDocument";
import { Experience, PreviousExperiences } from "./components/Experience";
import { EmployeesTop } from "./components/EmployeesTop";
import { IssueAssets } from "./components/IssueAssets";
import { SalaryStracture } from "./components/SalaryStracture";
export const Tabs = () => {
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <PagesTopTitle title="Profile" />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <EmployeesTop />
            </Tab.Pane>
          </Tab.Content>
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">My Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Employees</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <EmployeesProfileCard />
              <InerNewTab />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <EmployeesCard />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const InerNewTab = () => {
  const IssueAssetsAppData = [
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "NA",
      ActualReturnDate: "NA",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "NA",
      ActualReturnDate: "NA",
    },
    {
      AssetsName: "Laptop",
      AssetsNumber: "12339 cawcs13wr",
      Remarks: "NA",
      IssueDate: "09/23/2021",
      ExpectedReturnDate: "NA",
      ActualReturnDate: "NA",
    },
  ];
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="profile_tab_div2">
          <div className="row">
            <div className="col-12">
              <Nav variant="pills" className="flex">
                <Nav.Item>
                  <Nav.Link eventKey="first">Announcement</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second1">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second2">Document</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Assets">Issue Assets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Return">Offer Letter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Board">Salary Stracture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Disable">Exit Letter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Hold">Orginazation Policy</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="m_t"></div>
            <Announcement />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="m_t"></div>
            <div>
              <AboutProfile />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second1">
            <div className="m_t"></div>
            <Experience />
            <div className="m_t"></div>
            <PreviousExperiences />
          </Tab.Pane>
          <Tab.Pane eventKey="second2">
            <div className="m_t"></div>
            <EmployeesDocument />
          </Tab.Pane>
          <Tab.Pane eventKey="Assets">
            <div className="m_t"></div>
            <IssueAssets
              data={IssueAssetsAppData}
              tableTopTitle="Issued Assets"
              tableTitle="Assets Name"
              tableTitle2="Assets Number"
              tableTitle3="Remarks"
              tableTitle4="Issue Date"
              tableTitle5="Expected Return Date"
              tableTitle6="Actual Return Date"
            />
            <div className="m_t"></div>
            <IssueAssets
              data={IssueAssetsAppData}
              tableTopTitle="Returned Assets"
              tableTitle="Assets Name"
              tableTitle2="Assets Number"
              tableTitle3="Remarks"
              tableTitle4="Issue Date"
              tableTitle5="Expected Return Date"
              tableTitle6="Actual Return Date"
            />
          </Tab.Pane>
          <Tab.Pane eventKey="Return">
            <div className="m_t"></div>
            <div className="profile_iner_cont pb-5">
              <div className="EmployeesDocument_top_title">
                <h3>Offer Letter</h3>
              </div>
              <EmployeesTabPanData />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Board">
            <div className="m_t"></div>

            <div className="profile_iner_cont">
              <div className="EmployeesDocument_top_title">
                <h3> Salary Stracture</h3>
              </div>
              <SalaryStracture />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Disable">
            <div className="m_t"></div>

            <div className="profile_iner_cont">
              <div className="EmployeesDocument_top_title">
                <h3>Exit Letter</h3>
                <div className="ExitLetter_top_div">
                  <div className="ExitLetter_inner_div">
                    <h3>You do not have Exit Letter</h3>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="Hold">
            <div className="m_t"></div>
            <div className="profile_iner_cont pb-5">
              <div className="EmployeesDocument_top_title">
                <h3>Orginazation Policy</h3>
              </div>
              <EmployeesTabPanData />
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
