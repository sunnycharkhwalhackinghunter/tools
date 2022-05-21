import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Input from "../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Reimbursement = (props) => {
  const ApprovalDetailsPageTd = () => {
    return (
      <>
        <tr>
          <td>01</td>
          <td>roushan Kumar</td>
          <td>Printer</td>
          <td>05/25/2021</td>
          <td>
            <NavLink to="/">view</NavLink>
          </td>
          <td>NA</td>
          <td>Much Needed.</td>
          <td>Approved</td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className="custom_container">
        <div className="custom_container_iner">
          <div>
            <div className="row">
              <div className="col-12">
                <ul className="d-flex align-content-center ApprovalDetailsPage_ul_top_div">
                  <li>
                    <NavLink to="/hr/dashboard">
                      <BsArrowLeft />
                    </NavLink>
                  </li>
                  <li>
                    <h3>Reimbursement</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="row g-3">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>From</label>
                  <Input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="ApprovalDetailsPage_date_picker">
                  <label>to</label>
                  <Input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ApprovalDetailsPage_search_input">
                <div className="ApprovalDetailsPage_date_picker">
                  <div className="ApprovalDetailsPage_search_input_iner_div">
                    <span>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ApprovalDetailsPage_top_div">
            <table className="table table-hover ApprovalDetailsPage_main_div text-center text-capitalize">
              <thead>
                <tr className="ApprovalDetailsPage_thead_tr">
                  <th scope="col">E. ID</th>
                  <th scope="col">From</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Document</th>
                  <th scope="col">E. Comment</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <ApprovalDetailsPageTd />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reimbursement;
