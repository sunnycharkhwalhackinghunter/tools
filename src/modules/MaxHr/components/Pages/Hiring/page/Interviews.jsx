import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiSearch, BiDotsVerticalRounded, BiLink } from "react-icons/bi";
import Select from "react-select";
import { Nav, Tab } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import PhotoApp from "../../../../../common/components/img/Img";
import Icon from "../../../../../../pics/profile.jpeg";
import { AiFillLinkedin } from "react-icons/ai";
import InterviewedChip from "./InterviewedChip";
export const Interviews = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <InterviewsTabs />
      </div>
    </>
  );
};
const PageTop = () => {
  const options = [
    { value: "designer", label: "designer" },
    { value: "developer", label: "developer" },
  ];
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Interviews"
            />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
            <div className="TotalOpenings_input_div">
              <span>
                <BiSearch />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Search by name, email or department"
              />
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
            <div className="dashboard_top_week_Select">
              <Select options={options} placeholder="All Department" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const InterviewsTabs = () => {
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">Upcoming</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Completed</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <MySlider />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>2
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const MySlider = () => {
  return (
    <div className="interviews_round_tabs_div">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="m_t"></div>
            <JobsType />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="m_t"></div>2
          </Tab.Pane>
        </Tab.Content>
        <Nav variant="pills" className="flex">
          <Nav.Item>
            <Nav.Link eventKey="first">
              <JobCards
                roundName="1st Round"
                candidatesNumber="05 Candidates"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">
              <JobCards
                roundName="2st Round"
                candidatesNumber="05 Candidates"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="">
              <JobCards
                roundName="3st Round"
                candidatesNumber="05 Candidates"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="">
              <JobCards roundName="HR Round" candidatesNumber="05 Candidates" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="">
              <JobCards
                roundName="Final Round"
                candidatesNumber="05 Candidates"
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="m_t"></div>
            <JobsList />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="m_t"></div>2
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};
const JobCards = (props) => {
  const [JobCardsLists, setJobCardsLists] = useState(false);
  const JobCardsListsOpen = () => {
    setJobCardsLists(!JobCardsLists);
  };

  return (
    <>
      <div className="JobCards_main_div">
        <div className="row">
          <div className="col-3">
            <div className="JobCards_main_div_round"></div>
          </div>
          <div className="col-6">
            <h3>{props.roundName}</h3>
            <p>{props.candidatesNumber}</p>
          </div>
          <div className="col-1">
            <div className="JobCards_main_div_menu">
              <BiDotsVerticalRounded onClick={JobCardsListsOpen} />
              {JobCardsLists ? <JobCardsList /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const JobCardsList = () => {
  return (
    <>
      <div className="JobCards_main_list_div">
        <ul>
          <NavLink to="/hr/create_new_jobs">
            <li>elit</li>
          </NavLink>
          <li>close</li>
        </ul>
      </div>
    </>
  );
};
const JobsType = () => {
  const JobsTypeApp = (props) => {
    const [JobCardsLists, setJobCardsLists] = useState(false);
    const JobCardsListsOpen = () => {
      setJobCardsLists(!JobCardsLists);
    };
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey={props.eventKey}>
            <div>
              <ul>
                <li>
                  <div className="JobCards_main_div_round"></div>
                </li>
                <li>
                  <h3>{props.roundName}</h3>
                  <p>{props.candidatesNumber}</p>
                </li>
                <li>
                  <div className="JobsType_card_menu">
                    <BiDotsVerticalRounded onClick={JobCardsListsOpen} />
                    {JobCardsLists ? <JobCardsList /> : null}
                  </div>
                </li>
              </ul>
            </div>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  };
  const JobsTypeData = [
    {
      roundName: "Lead UX Designer",
      candidatesNumber: "12 Candidates",
      eventKey: "first",
    },
    {
      roundName: "UI Developer Intern",
      candidatesNumber: "12 Candidates",
      eventKey: "2",
    },
    {
      roundName: "SEO Marketing",
      candidatesNumber: "12 Candidates",
      eventKey: "3",
    },
    {
      roundName: "HR Manager",
      candidatesNumber: "12 Candidates",
      eventKey: "4",
    },
  ];
  return (
    <>
      <div>
        <div className=" JobsType_card">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="flex">
              {JobsTypeData.map((val, i) => {
                return (
                  <JobsTypeApp
                    key={i}
                    roundName={val.roundName}
                    candidatesNumber={val.candidatesNumber}
                    eventKey={val.eventKey}
                  />
                );
              })}
            </Nav>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const JobsList = () => {
  const RedirectPage = () => {
    window.open("https://www.linkedin.com/login", "_blank");
  };
  return (
    <>
      <div className="JobsList_main_div">
        <div className="row">
          <div className="col-12">
            <div className="EmployeesProfileCard_top_div">
              <div className="row">
                <div className="col-3">
                  <div>
                    <div className="row">
                      <div className="col-3">
                        <PhotoApp
                          className="JobsList_img"
                          backgroundImage={Icon}
                        />
                      </div>
                      <div className="col-9">
                        <div className="JobsList_img_text">
                          <h3>Jan Mik</h3>
                          <p>UX Designer</p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="JobsList_img_sub_text">
                          <p>
                            Experience: <span>3 Years</span>
                          </p>
                          <p>
                            Linkedin Profile
                            <span onClick={RedirectPage}>
                              <AiFillLinkedin />
                            </span>
                          </p>
                          <p>
                            Resume
                            <span>
                              <NavLink to="/">
                                <BiLink />
                              </NavLink>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 EmployeesProfileCard_div_info">
                  <div>
                    <div className="JobsList_mid_title">
                      <h3>Being Interviewed By</h3>
                    </div>
                    <div>
                      <InterviewedChip />
                    </div>
                    <div className="JobsList_mid_title">
                      <h3>Interview link</h3>
                    </div>
                    <div className="JobsList_copy_btn_div">
                      <div className="JobsList_copy_text">
                        Copy this text to clipboard
                      </div>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "Copy this text to clipboard"
                          )
                        }
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-3 EmployeesProfileCard_div_info">d</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
