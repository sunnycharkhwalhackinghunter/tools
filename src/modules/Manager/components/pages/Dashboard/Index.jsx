import { FullBtn } from "../../../../common/ManagerComponents/Btn/Btn";
import { WelcomeNote } from "../../../../common/ManagerComponents/WelcomeNote/WelcomeNote";
import Img from "../../../../common/components/img/Img";
import Icon from "../../../../../pics/Manager/d1.png";
import Icon2 from "../../../../../pics/Manager/d2.png";
import Icon3 from "../../../../../pics/Manager/d3.png";
import Icon4 from "../../../../../pics/Manager/d4.png";
import Icon5 from "../../../../../pics/Manager/d5.png";
import Icon6 from "../../../../../pics/Manager/d6.png";
import ProjectIcon from "../../../../../pics/Manager/projactLogo.webp";
import { NavLink } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import React from "react";
import { PageInnerTitle } from "../../../../common/ManagerComponents/pageInnerTitle/Title";
import { BiLink } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
export const Index = () => {
  return (
    <>
      <WelcomeNote
        name="Shived"
        text="Lets do the best today"
        data={<FullBtn link="/" name="Add Project" />}
      />
      <ProjectSummary />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12">
          <ProjectListApp />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12">
          3
        </div>
      </div>
    </>
  );
};
const ProjectSummary = () => {
  const App = (props) => {
    return (
      <>
        <NavLink to={props.link}>
          <div
            className="project_summary_card"
            style={{ backgroundColor: props.backgroundColor }}
          >
            <div className="row">
              <div className="col-12">
                <Img
                  backgroundImage={props.icon}
                  className="project_summary_card_icon"
                />
                <div>
                  <p style={{ color: props.color }}>
                    <span>{props.number}</span>
                    {props.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </>
    );
  };
  const Data = [
    {
      link: "/",
      backgroundColor: "#0043CE",
      icon: Icon,
      color: "white",
      number: "12",
      text: "Project from BD Team",
    },
    {
      link: "/",
      backgroundColor: "#8D8D8D",
      icon: Icon2,
      color: "white",
      number: "12",
      text: "Project from Website",
    },
    {
      link: "/",
      backgroundColor: "#0A0E30",
      icon: Icon3,
      color: "white",
      number: "12",
      text: "In Progress Project",
    },
    {
      link: "/",
      backgroundColor: "#F1C21B",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Projects in Pipeline",
    },
    {
      link: "/",
      backgroundColor: "#393939",
      icon: Icon4,
      color: "white",
      number: "12",
      text: "Tasks in Pipeline",
    },
    {
      link: "/",
      backgroundColor: "#DA1E28",
      icon: Icon5,
      color: "white",
      number: "12",
      text: "On Hold",
    },
    {
      link: "/",
      backgroundColor: "#24A148",
      icon: Icon6,
      color: "white",
      number: "12",
      text: "Completed Project",
    },
  ];
  return (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
        <PageInnerTitle name="project Summary" />
        <div className="project_summary_card_top_div">
          {Data.map((val, i) => {
            return (
              <App
                key={i}
                link={val.link}
                backgroundColor={val.backgroundColor}
                icon={val.icon}
                color={val.color}
                number={val.number}
                text={val.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
const ProjectListApp = () => {
  return (
    <>
      <div className="custom_container_iner ProjectList_top_div">
        <PageInnerTitle name="project" />
        <div className="profile_tab_div mt-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Completed</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="OnHold">On Hold</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="m_t"></div>
                <ProjectList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="m_t"></div>
                <ProjectList />
              </Tab.Pane>
              <Tab.Pane eventKey="OnHold">
                <div className="m_t"></div>
                <ProjectList />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const ProjectList = () => {
  const App = (props) => {
    return (
      <>
        <NavLink to={props.link}>
          <div className="ProjectList_link_div">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div>
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                      <div>
                        {ProjectIcon ? (
                          <Img
                            className="ProjectList_logo"
                            backgroundImage={props.projectIcon}
                          />
                        ) : (
                          <div className="ProjectList_logo_text">
                            <span>{props.projectIconText}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <div className="ProjectList_name_top_div">
                        <p className="ProjectList_name">{props.name}</p>
                        <p className="ProjectList_text">{props.date}</p>
                      </div>
                      <div className="ProjectList_name_top_div">
                        <p className="ProjectList_text">
                          <span>
                            <BiLink />
                          </span>
                          {props.brief}
                        </p>
                        <p className="ProjectList_text">
                          <span>
                            <AiOutlineMessage />
                          </span>
                          {props.comments}
                        </p>
                        <p className="ProjectList_text">
                          <span>
                            <MdOutlineReviews />
                          </span>
                          {props.reviews}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="ProjectList_progress_main_div">
                  <p className="ProjectList_name">Progress</p>
                  <div className="progress ProjectList_progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: props.progress }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </>
    );
  };
  const Data = [
    {
      link: "/",
      projectIcon: ProjectIcon,
      projectIconText: "pm",
      name: "After Care",
      date: "Ends: 24 March 2022",
      brief: "Design Brief",
      comments: "104 Comments",
      reviews: "02 Reviews",
      progress: "45%",
    },
  ];
  return (
    <>
      <div>
        {Data.map((val, i) => {
          return (
            <App
              key={i}
              link={val.link}
              projectIcon={val.projectIcon}
              projectIconText={val.projectIconText}
              name={val.name}
              date={val.date}
              brief={val.brief}
              comments={val.comments}
              reviews={val.reviews}
              progress={val.progress}
            />
          );
        })}
      </div>
    </>
  );
};
