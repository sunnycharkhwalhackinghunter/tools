import { Nav, Tab } from "react-bootstrap";
import { PagesTopTitle } from "../../../components/Pages/Dashboard/index";
import React from "react";
import { EmployeesProfileCard } from "./components/EmployeesProfileCard";
import { Announcement } from "./components/Announcement";
import { AboutProfile } from "./components/AboutProfile";
import { EmployeesDocument } from "./components/EmployeesDocument";
import { Experience, PreviousExperiences } from "./components/Experience";
import { IssueAssets } from "./components/IssueAssets";
import { SalaryStracture } from "./components/SalaryStracture";
import { AnnouncementFilter } from "../Announcement/Index";
import { Projects } from "./components/Projects";
export const Tabs = () => {
  return (
    <>
      <PagesTopTitle title="my Profile" />
      <EmployeesProfileCard />
      <InerNewTab />
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
      <div className="profile_tab_div">
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
                    <Nav.Link eventKey="Projects">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second1">Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">Documents</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Assets">Assets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Board">Salary Stracture</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <AnnouncementFilter />
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
            <Tab.Pane eventKey="Board">
              <div className="m_t"></div>

              <div className="profile_iner_cont">
                <div className="EmployeesDocument_top_title">
                  <h3> Salary Stracture</h3>
                </div>
                <SalaryStracture />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Projects">
              <div className="m_t"></div>
              <Projects />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
