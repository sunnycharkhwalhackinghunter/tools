import TopPageTitle from "../../../../../common/components/topPageTitle/Index";
import { BsArrowLeft } from "react-icons/bs";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const TotalOpenings = () => {
  return (
    <>
      <div className="custom_container">
        <TotalOpeningsTop />
        <JobCards />
      </div>
    </>
  );
};
const TotalOpeningsTop = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div>
        <div className="row TotalOpenings_input_main_div g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <TopPageTitle
              TitleLink={-1}
              TilelIcon={<BsArrowLeft />}
              Name="Open Jobs"
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
              <Select options={options} placeholder="This week" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const JobCards = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-3">
          <NavLink to="/">
            <div className="HiringIndexCard_more_card_div JobCardsOne">
              <p>Add New Job</p>
            </div>
          </NavLink>
        </div>
        <div className="col-3">
          <NavLink to="/">
            <div className="row JobCards_main_div">
              <div className="col-4">
                <div className="JobCards_main_div_round"></div>
              </div>
              <div className="col-8">
                <h3>HR Manager</h3>
                <p>12 Applications</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
