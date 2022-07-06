import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import React from "react";
export const AppraisalSetting = () => {
  return (
    <>
      <div className="custom_container">
        <TopPageTitle
          TitleLink={-1}
          TilelIcon={<BsArrowLeft />}
          Name="Settings"
        />
        <div className="CompanySetup_main_div">
          <div className="AppraisalSetting_inner_main_div">
            <div className="AppraisalSetting_top_title">
              <h3>Lets setup frequency of appraisal in your company</h3>
            </div>
            <div className="profile_tab_div CompanySetup_tab">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Frequency</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Questions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second1">Process</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">Outcome</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Frequency />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">2</Tab.Pane>
                  <Tab.Pane eventKey="second1">3</Tab.Pane>
                  <Tab.Pane eventKey="second2">4</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Frequency = () => {
  return (
    <>
      <div>
        <div className="setting1_text">
          Select the month in which you want to have appraisal
        </div>
        <div className="Frequency_month_top_div">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Select Month</label>
            <div className="row">
              <div className="col-6">
                <select className="form-select">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August </option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="col-3">
                <div className="Frequency_reset_btn">
                  <button>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="col-3">
                <div className="Frequency_save_btn">
                  <button>
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="setting1_text">
          Select the month in which you want to have appraisal
        </div>
        <div className="Frequency_month_top_div">
          <div className="ApprovalDetailsPage_date_picker">
            <label>Select Month</label>
            <div className="row">
              <div className="col-6">
                <select className="form-select">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August </option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="col-3">
                <div className="Frequency_reset_btn">
                  <button>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="col-3">
                <div className="Frequency_save_btn">
                  <button>
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
