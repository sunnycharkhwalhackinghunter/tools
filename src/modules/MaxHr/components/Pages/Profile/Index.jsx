import { Nav, Tab } from "react-bootstrap";
import { PagesTopTitle } from "../../../components/Pages/Dashboard/index";
import Select from "react-select";
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
            <Tab.Pane eventKey="first">1</Tab.Pane>
            <Tab.Pane eventKey="second">2</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
const EmployeesTop = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-4">
          <PagesTopTitle title="Employees Profile" />
        </div>
        <div className="col-8 position-relative">
          <div className="page_top_title">
            <div className="dashboard_top_week_Select EmployeesTop_Select">
              <Select options={options} placeholder="Department" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
