import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import TemporaryDrawer from "./page/Right";
export const Projects = () => {
  return (
    <>
      <ProjectsFilter />
    </>
  );
};
export const ProjectsFilter = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className=" mb-4">
        <div className="row g-3">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10  d-flex">
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
          <div className="col-2">
            <TemporaryDrawer />
          </div>
        </div>
      </div>
    </>
  );
};
