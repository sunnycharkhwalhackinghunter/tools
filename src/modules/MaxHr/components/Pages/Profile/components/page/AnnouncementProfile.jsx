import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { EmployeesProfileCard } from "../EmployeesProfileCard";
import { Nav, Tab } from "react-bootstrap";
import { PostUser } from "../../../../../../common/components/PostUser/PostUser";
import { UserPost } from "../../../../../../common/components/UserPost/UserPost";
import ProfileIcon from "../../../../../../common/components/img/Img";
import EX from "../../../../../../../pics/ex.png";
import EX2 from "../../../../../../../pics/ex2.png";
import { EmployeesDocument } from "../EmployeesDocument";
import {
  IssueAssets,
  IssueAssetsAppTop,
  EmployeesReturnAssets,
  Disable,
  OffBoard,
} from "../IssueAssets";
import { AboutInput } from "../AboutProfile";
const Announcement = () => {
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
      <div className="custom_container">
        <div className="row">
          <div className=" col-12">
            <NavLink to={-1} className="profil_emp_inter_page_title">
              <BsArrowLeft />
              Employees Detail
            </NavLink>
          </div>
        </div>
        <div>
          <div className="profil_emp_inter_page_tab">
            <NavLink to={-1} className="profil_emp_inter_page_tab_div">
              <p>My Profile</p>
            </NavLink>
            <div className="profil_emp_inter_page_tab_activ">
              <p>Employees</p>
            </div>
          </div>
        </div>
        <div>
          <EmployeesProfileCard />
          <div className="profile_tab_div">
            <Tab.Container id="left-tabs-example" defaultActiveKey="0">
              <div className="profile_tab_div2">
                <div className="row">
                  <div className="col-12">
                    <Nav variant="pills" className="flex">
                      <Nav.Item>
                        <Nav.Link eventKey="0">Announcement</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="1">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3">Document</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Assets">Issue Assets</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Return">Return Assets</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Board">Off Board</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Disable">Disable Login</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Hold">Hold Salary</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>

              <Tab.Content>
                <Tab.Pane eventKey="0">
                  <div className="m_t"></div>
                  <PostUser />
                  <UserPost />
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                  <div className="m_t"></div>
                  <AnnouncementAbout />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <div className="m_t"></div>
                  <Experience />
                  <div className="m_t"></div>
                  <PreviousExperiences />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <div className="m_t"></div>
                  <EmployeesDocument />
                </Tab.Pane>
                <Tab.Pane eventKey="Assets">
                  <div className="m_t"></div>
                  <IssueAssetsAppTop />
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
                </Tab.Pane>
                <Tab.Pane eventKey="Return">
                  <div className="m_t"></div>
                  <EmployeesReturnAssets />
                  <div className="m_t"></div>
                  <IssueAssets
                    data={IssueAssetsAppData}
                    tableTopTitle="Return Assets"
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
                  <OffBoard />
                </Tab.Pane>
                <Tab.Pane eventKey="Disable">
                  <div className="m_t"></div>
                  <Disable title="Disable Login" />
                </Tab.Pane>
                <Tab.Pane eventKey="Hold">
                  <div className="m_t"></div>
                  <Disable title="Hold Salary" />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default Announcement;

const AnnouncementAbout = () => {
  return (
    <>
      <div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className=" col-12">
            <div className="profile_iner_cont">
              <AboutInput />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Experience = () => {
  const ExperienceApp = (props) => {
    return (
      <>
        <li>
          <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
              <div className="row">
                <div className="col-2">
                  <ProfileIcon
                    className="Experience_timline_img"
                    backgroundImage={props.img}
                  />
                </div>
                <div className="col-10">
                  <div className="Experience_timline_title">
                    <h3>{props.name}</h3>
                    <p>{props.date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-12">
              <div className="Experience_timline_title_iner">
                <h4>{props.role}</h4>
              </div>
              <div className="Experience_timline_title_iner_text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };
  const ExperienceData = [
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      img: EX2,
      name: "design Head",
      date: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-12 ">
            <div className="EmployeesDocument_top_title">
              <h3>Experience with Maxlence Consulting</h3>
              <p>4 years 0 month 3 days</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <ul className="Experience_timline_top_div">
                {ExperienceData.map((val, i) => {
                  return (
                    <ExperienceApp
                      key={i}
                      img={val.img}
                      name={val.name}
                      date={val.date}
                      role={val.role}
                      text={val.text}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const PreviousExperiences = () => {
  const PreviousExperiencesApp = (props) => {
    return (
      <>
        <li>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="Experience_timline_title2">
                    <h3>
                      {props.name} <span>{props.subName}</span>
                    </h3>
                    <p>
                      {props.date} to {props.subDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-12">
              <div className="Experience_timline_title_iner">
                <h4>{props.role}</h4>
              </div>
              <div className="Experience_timline_title_iner_text">
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  };
  const PreviousExperiencesData = [
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
    {
      name: "Graphics Designer @",
      subName: " XYZ",
      date: "27 sep, 2020",
      subDate: "27 sep, 2020",
      role: "role",
      text: "lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="profile_iner_cont">
        <div className="row">
          <div className="col-12 ">
            <div className="EmployeesDocument_top_title">
              <h3>Previous Experiences</h3>
              <p>4 years 0 month 3 days</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <ul className="Experience_timline_top_div">
                {PreviousExperiencesData.map((val, i) => {
                  return (
                    <PreviousExperiencesApp
                      key={i}
                      name={val.name}
                      subName={val.subName}
                      date={val.date}
                      subDate={val.subDate}
                      role={val.role}
                      text={val.text}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
