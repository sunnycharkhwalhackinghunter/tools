import { AboutProfileInput } from "./AboutProfile";
export const IssueAssets = (props) => {
  const IssueAssetsApp = (props) => {
    return (
      <>
        <tr>
          <td>{props.AssetsName}</td>
          <td>{props.AssetsNumber}</td>
          <td>{props.Remarks}</td>
          <td>{props.IssueDate}</td>
          <td>{props.ExpectedReturnDate}</td>
          <td>{props.ActualReturnDate}</td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>{props.tableTopTitle}</h3>
        </div>
        <div>
          <table className="table text-center IssueAssets_top_div">
            <thead>
              <tr>
                <th scope="col">{props.tableTitle}</th>
                <th scope="col">{props.tableTitle2}</th>
                <th scope="col">{props.tableTitle3}</th>
                <th scope="col">{props.tableTitle4}</th>
                <th scope="col">{props.tableTitle5}</th>
                <th scope="col">{props.tableTitle6}</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((val, i) => {
                return (
                  <IssueAssetsApp
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
          <div className="IssueAssets_btn_bottom_div">
            <button className="IssueAssets_btn">Download</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const IssueAssetsAppTop = (props) => {
  return (
    <>
      <div className="profile_iner_cont">
        <div className="EmployeesDocument_top_title">
          <h3>Issued Assets</h3>
        </div>
        <div className="IssueAssetsAppTop_main_div">
          <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <AboutProfileInput
                    label="Assets Name"
                    type="text"
                    className="form-control"
                    placeholder="What’s assets"
                  />
                </div>
                <div className="col-6">
                  <AboutProfileInput
                    label="Assets Number"
                    type="text"
                    className="form-control"
                    placeholder="What’s assets number"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <AboutProfileInput
                    label="Issue date"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <AboutProfileInput
                    label="Expected Return date"
                    type="date"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
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
        <div className="IssueAssets_btn_bottom_div">
          <button className="IssueAssets_btn">Issue Assets</button>
        </div>
      </div>
    </>
  );
};
