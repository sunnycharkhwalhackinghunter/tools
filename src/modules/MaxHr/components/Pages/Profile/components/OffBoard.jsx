import { useState } from "react";
export const OffBoard = () => {
  const [showOffBoardForm, setShowOffBoardForm] = useState(true);
  const [showOffBoardForm2, setShowOffBoardForm2] = useState(false);
  const [showOffBoardRegForm, setShowOffBoardRegForm] = useState(false);

  const OffBoardForm = () => {
    const Button = () => (
      <button
        onClick={() => {
          setShowOffBoardForm(false);
          setShowOffBoardForm2(true);
        }}
        className="IssueAssets_btn"
      >
        Proceed
      </button>
    );
    return (
      <>
        <div className="off_board_text_div">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis ex suscipit! Tempore eaque maiores fugit provident
            expedita ipsum vitae, commodi sapiente veniam quas debitis, placeat
            natus. Saepe perferendis quae nemo ab! Delectus dolores tempora quam
            fugiat fuga quas explicabo officiis minima aspernatur illo nostrum,
            neque, alias dolorum ducimus. Maiores!
          </p>
          <div className="row">
            <div className="col-12">
              <div className="automation_checkbox_div">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="2" />
                  <label
                    className="form-check-label automation_checkbox_label"
                    htmlFor="2"
                  >
                    Automatically run payroll on selected date
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="IssueAssets_btn_bottom_div">
              <Button />
            </div>
          </div>
        </div>
      </>
    );
  };
  const OffBoardResignation = () => {
    const Button = () => (
      <button
        onClick={() => {
          setShowOffBoardForm2(false);
          setShowOffBoardRegForm(true);
        }}
        className="IssueAssets_btn"
      >
        Apply
      </button>
    );
    return (
      <>
        <h1>Resignation</h1>
        <div className="row">
          <div className="col-12">
            <div className="IssueAssets_btn_bottom_div">
              <Button />
            </div>
          </div>
        </div>
      </>
    );
  };
  const OffBoardResignationStatus = () => {
    return (
      <>
        <h1>Resignation2</h1>
      </>
    );
  };
  return (
    <div className="profile_iner_cont">
      <div className="EmployeesDocument_top_title">
        <h3> Off Board</h3>
      </div>
      {showOffBoardForm && <OffBoardForm />}
      {showOffBoardForm2 && <OffBoardResignation />}
      {showOffBoardRegForm && <OffBoardResignationStatus />}
    </div>
  );
};
