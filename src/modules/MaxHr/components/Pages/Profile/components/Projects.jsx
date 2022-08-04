import Input from "../../../../../common/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProfileIcon from "../../../../../common/components/img/Img";
import ProfilPhoto2 from "../../../../../../pics/profile2.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { useState } from "react";
import { RightFilters } from "../../../../../common/components/RightFilters/RightFilters";
import { AboutProfileInput } from "./AboutProfile";
export const Projects = () => {
  return (
    <>
      <ProjectsFilter />
      <ProjectsCard />
    </>
  );
};
export const ProjectsFilter = () => {
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
            <RightFilters
              title="Filter"
              btn1="Reset"
              btn2="Show results"
              data={<ProjectsRightFiltersData />}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export const ProjectsRightFiltersData = () => {
  const [FiltersAdd, setFiltersAdd] = useState(false);
  const FiltersAddOpen = () => {
    setFiltersAdd(!FiltersAdd);
  };
  const Data = [
    {
      toptile: "Sort By",
      cat1: [
        {
          label: "Most recent",
        },
        {
          label: "Most relevent",
        },
      ],
    },
    {
      toptile: "Priority",
      cat1: [
        {
          label: "High",
        },
        {
          label: "Medium",
        },
        {
          label: "Low",
        },
      ],
    },
    {
      toptile: "Department",
      cat1: [
        {
          label: "My role only",
        },
        {
          label: "Design",
        },
        {
          label: "Developement",
        },
        {
          label: "Marketing",
        },
        {
          label: "Others",
        },
      ],
    },
    {
      toptile: "Status",
      cat1: [
        {
          label: "Assigned",
        },
        {
          label: "In progress",
        },
        {
          label: "In review",
        },
        {
          label: "Not started",
        },
        {
          label: "Pending",
        },
        {
          label: "Delayed",
        },
        {
          label: "Completed",
        },
      ],
    },
    {
      toptile: "Status",
      cat1: [
        {
          label: "Assigned",
        },
        {
          label: "In progress",
        },
        {
          label: "In review",
        },
        {
          label: "Not started",
        },
        {
          label: "Pending",
        },
        {
          label: "Delayed",
        },
        {
          label: "Completed",
        },
      ],
    },
  ];
  const App = (props) => {
    return (
      <>
        <div className="row Projects_Right_Filters_Data_main_div">
          <div className="col-12">
            <p>{props.toptile}</p>
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div
                key={i}
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label={val.label} />
                </FormGroup>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const FiltersInnerBtn = () => {
    return (
      <>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-6">
            <AboutProfileInput
              label="Start Date"
              type="date"
              className="form-control"
              placeholder="918-233-2345"
            />
          </div>
          <div className="col-6">
            <AboutProfileInput
              label="End Date"
              type="date"
              className="form-control"
              placeholder="918-233-2345"
            />
          </div>
          <div className="col-12 text-center">
            <div className={`${FiltersAdd ? "d-block" : "d-none"}`}>
              <button
                className="UploadDocumentModal_body_btn2 w-75"
                onClick={FiltersAddOpen}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {Data.map((val, i) => {
        return <App key={i} toptile={val.toptile} arr={val} />;
      })}
      <div className={`${FiltersAdd ? "d-none" : "d-block"}`}>
        <button
          className="UploadDocumentModal_body_btn2"
          onClick={FiltersAddOpen}
        >
          Custom
        </button>
      </div>
      <div>{FiltersAdd ? <FiltersInnerBtn /> : null}</div>
    </>
  );
};
const ProjectsCard = () => {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <div className="projects_card_div">
            <h3>ABC Project Custom...</h3>
            <p>
              Last Update:<span>4 hr Ago</span>
            </p>
            <div className="projects_card_status">In Progress</div>
            <ul className="projects_card_members">
              <li>
                <p>Members:</p>
              </li>
              <li className=" mx-3  d-flex">
                <ProfileIcon
                  className="projects_card_members_icon"
                  backgroundImage={ProfilPhoto2}
                />
                <ProfileIcon
                  className="projects_card_members_icon"
                  backgroundImage={ProfilPhoto2}
                />
                <ProfileIcon
                  className="projects_card_members_icon"
                  backgroundImage={ProfilPhoto2}
                />
                <ProfileIcon
                  className="projects_card_members_icon"
                  backgroundImage={ProfilPhoto2}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
