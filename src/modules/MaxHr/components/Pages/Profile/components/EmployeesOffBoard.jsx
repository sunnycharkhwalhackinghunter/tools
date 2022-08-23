import { Nav, Tab } from "react-bootstrap";
import SwitchInput from "../../../../../common/components/input/Input";
import { AboutProfileInput } from "./AboutProfile";

export const EmployeesOffBoard = () => {
  const CollectAssetList = () => {
    const OffBoardApp = (props) => {
      return (
        <>
          <tr>
            <td>{props.AssetsName}</td>
            <td>{props.AssetsNumber}</td>
            <td>{props.Remarks}</td>
            <td>{props.IssueDate}</td>
            <td>{props.ExpectedReturnDate}</td>
            <td>{props.ActualReturnDate}</td>
            <td>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
              </div>
            </td>
          </tr>
        </>
      );
    };
    const OffBoardAppData = [
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        Remarks: "NA",
        IssueDate: "09/23/2021",
        ExpectedReturnDate: "12/05/2021",
        ActualReturnDate: "12/05/2021",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        Remarks: "NA",
        IssueDate: "09/23/2021",
        ExpectedReturnDate: "12/05/2021",
        ActualReturnDate: "12/05/2021",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        Remarks: "NA",
        IssueDate: "09/23/2021",
        ExpectedReturnDate: "12/05/2021",
        ActualReturnDate: "12/05/2021",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        Remarks: "NA",
        IssueDate: "09/23/2021",
        ExpectedReturnDate: "12/05/2021",
        ActualReturnDate: "12/05/2021",
      },
      {
        AssetsName: "Laptop",
        AssetsNumber: "12339 cawcs13wr",
        Remarks: "NA",
        IssueDate: "09/23/2021",
        ExpectedReturnDate: "12/05/2021",
        ActualReturnDate: "12/05/2021",
      },
    ];
    return (
      <>
        <div>
          <table className="table text-center IssueAssets_top_div ">
            <thead>
              <tr>
                <th scope="col">Assets Name</th>
                <th scope="col">Assets Number</th>
                <th scope="col">Remarks</th>
                <th scope="col">Issue Date</th>
                <th scope="col"> Return Date</th>
                <th scope="col">acknowledged by</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {OffBoardAppData.map((val, i) => {
                return (
                  <OffBoardApp
                    key={i}
                    AssetsName={val.AssetsName}
                    AssetsNumber={val.AssetsNumber}
                    Remarks={val.Remarks}
                    IssueDate={val.IssueDate}
                    ExpectedReturnDate={val.ExpectedReturnDate}
                    ActualReturnDate={val.ActualReturnDate}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  const Disable = (props) => {
    return (
      <>
        <div className=" mb-5 mt-5">
          <div className="IssueAssetsAppTop_main_div">
            <div className=" mb-3">
              <label className="switch">
                <SwitchInput type="checkbox" className="switch_input" />
                <span className="slider slider2 round"></span>
              </label>
            </div>
            <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-12">
                <AboutProfileInput
                  label="Remarks if any"
                  type="text"
                  className="form-control"
                  placeholder="Add Remarks if any"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="profile_iner_cont assets_tab_div">
        <div className="profile_tab_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <div className="profile_tab_div2">
              <div className="row">
                <div className="col-12">
                  <Nav variant="pills" className="flex">
                    <Nav.Item>
                      <Nav.Link eventKey="0">Action</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1">Hand Over</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Collect Asset</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Disable Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Hold Salary</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="0">
                <div className="m_t"></div>1
              </Tab.Pane>
              <Tab.Pane eventKey="1">
                <div className="m_t"></div>2
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <div className="m_t"></div>
                <CollectAssetList />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <div className="m_t"></div>
                <Disable />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <div className="m_t"></div>
                <Disable />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
