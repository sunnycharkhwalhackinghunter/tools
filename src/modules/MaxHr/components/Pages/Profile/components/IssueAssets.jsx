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
