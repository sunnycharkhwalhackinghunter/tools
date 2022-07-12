import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { BiSearch, BiDotsVerticalRounded } from "react-icons/bi";
import Select from "react-select";
import { Nav, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const NewApplication = () => {
  return (
    <>
      <div className="custom_container">
        <PageTop />
        <NewApplicationTabs />
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
              Name="New Application"
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
const NewApplicationTabs = () => {
  return (
    <>
      <div className="new_application_tabs_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex">
            <Nav.Item className="new_application_item">
              <Nav.Link eventKey="first">
                <TabBtn
                  jobName="Lead UX Designer"
                  applicationsNumber="12 Applications"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="new_application_item new_application_item2">
              <Nav.Link eventKey="second">
                <TabBtn
                  jobName="UI Developer Intern"
                  applicationsNumber="12 Applications"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="new_application_item new_application_item3">
              <Nav.Link eventKey="second1">
                <TabBtn
                  jobName="SEO Marketing"
                  applicationsNumber="12 Applications"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="new_application_item new_application_item4">
              <Nav.Link eventKey="second2">
                <TabBtn
                  jobName="HR Manager"
                  applicationsNumber="12 Applications"
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">1</Tab.Pane>
            <Tab.Pane eventKey="second">2</Tab.Pane>
            <Tab.Pane eventKey="second1">3</Tab.Pane>
            <Tab.Pane eventKey="second2">4</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
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
const TabBtn = (props) => {
  const [JobCardsLists, setJobCardsLists] = useState(false);
  const JobCardsListsOpen = () => {
    setJobCardsLists(!JobCardsLists);
  };
  return (
    <>
      <div className="new_application_tabs1">
        <div className="row">
          <div className="col-3">
            <div className="JobCards_main_div_round1"></div>
          </div>
          <div className="col-8">
            <h3>{props.jobName}</h3>
            <p>{props.applicationsNumber}</p>
          </div>
          <div className="col-1">
            <div className="JobCards_main_div_menu2">
              <BiDotsVerticalRounded onClick={JobCardsListsOpen} />
              {JobCardsLists ? <JobCardsList /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
