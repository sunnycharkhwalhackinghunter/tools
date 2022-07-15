import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
import { BiSearch, BiDotsVerticalRounded } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
export const TotalOpenings = () => {
  return (
    <>
      <div className="custom_container">
        <TotalOpeningsTop />
        <JobsTabs />
      </div>
    </>
  );
};
const JobsTabs = () => {
  return (
    <>
      <div className="profile_tab_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex">
            <Nav.Item>
              <Nav.Link eventKey="first">Open Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Close Jobs</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="m_t"></div>
              <JobCards />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="m_t"></div>
              <CloseJobs />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const TotalOpeningsTop = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name=" Jobs"
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
              <Select options={options} placeholder="This week" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const JobCards = () => {
  const JobCardsApp = (props) => {
    const [JobCardsLists, setJobCardsLists] = useState(false);
    const JobCardsListsOpen = () => {
      setJobCardsLists(!JobCardsLists);
    };
    return (
      <>
        <div className="col-xx-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="JobCards_main_div">
            <div className="row">
              <div className="col-3">
                <NavLink to="/">
                  <div
                    className="JobCards_main_div_round"
                    style={{ backgroundColor: props.color }}
                  ></div>
                </NavLink>
              </div>
              <div className="col-6">
                <NavLink to="/">
                  <h3>{props.name}</h3>
                  <p>{props.applicationsNumber}</p>
                </NavLink>
              </div>
              <div className="col-1">
                <div className="JobCards_main_div_menu">
                  <BiDotsVerticalRounded
                    style={{ color: props.color }}
                    onClick={JobCardsListsOpen}
                  />
                  {JobCardsLists ? <JobCardsList /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const JobCardsData = [
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-xx-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <NavLink to="/hr/create_new_jobs">
            <div className="HiringIndexCard_more_card_div JobCardsOne">
              <p>Add New Job</p>
            </div>
          </NavLink>
        </div>

        {JobCardsData.map((val, i) => {
          return (
            <JobCardsApp
              key={i}
              name={val.name}
              applicationsNumber={val.applicationsNumber}
              color={val.color}
            />
          );
        })}
      </div>
    </>
  );
};
const CloseJobs = () => {
  const JobCardsApp = (props) => {
    const [JobCardsLists, setJobCardsLists] = useState(false);
    const JobCardsListsOpen = () => {
      setJobCardsLists(!JobCardsLists);
    };
    return (
      <>
        <div className="col-xx-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="JobCards_main_div">
            <div className="row">
              <div className="col-3">
                <NavLink to="/">
                  <div
                    className="JobCards_main_div_round"
                    style={{ backgroundColor: props.color }}
                  ></div>
                </NavLink>
              </div>
              <div className="col-6">
                <NavLink to="/">
                  <h3>{props.name}</h3>
                  <p>{props.applicationsNumber}</p>
                </NavLink>
              </div>
              <div className="col-1">
                <div className="JobCards_main_div_menu">
                  <BiDotsVerticalRounded
                    style={{ color: props.color }}
                    onClick={JobCardsListsOpen}
                  />
                  {JobCardsLists ? <JobCardsList /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const JobCardsData = [
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F1C21B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#900F9B",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#0043CE",
    },
    {
      name: "HR Manager",
      applicationsNumber: "12 Applications",
      color: "#F43D03",
    },
  ];
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        {JobCardsData.map((val, i) => {
          return (
            <JobCardsApp
              key={i}
              name={val.name}
              applicationsNumber={val.applicationsNumber}
              color={val.color}
            />
          );
        })}
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
