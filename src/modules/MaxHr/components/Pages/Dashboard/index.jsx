import Select from "react-select";
import { NavLink } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { BsCalendar2Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
export const UserName = () => {
  const options = [
    { value: "today", label: "today" },
    { value: "tomorrow", label: "tomorrow" },
    { value: "last week", label: "last week" },
  ];
  return (
    <>
      <div>
        <div className="row">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
            <div className="dashboard_top_user_name">
              <h3>
                Hello Gaurav <span>Good Morning</span>
              </h3>
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
export const PagesTopTitle = (props) => {
  return (
    <>
      <div className="page_top_title">
        <h3>{props.title}</h3>
      </div>
    </>
  );
};
export const InfoCard = (props) => {
  const InfoCardApp = (props) => {
    return (
      <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <NavLink to={`${props.url}`}>
            <div
              className=" dashbaord_imfo_card"
              style={{ backgroundColor: props.backgroundcolor }}
            >
              <div className="row">
                <div className="col-3 dashbaord_imfo_card_icon_col_div">
                  <div
                    className="dashbaord_imfo_card_icon_div"
                    style={{ backgroundColor: props.iconbackgroundcolor }}
                  >
                    <span style={{ color: props.iconcolor }}>{props.icon}</span>
                  </div>
                </div>
                <div className="col-9">
                  <div
                    className="dashbaord_imfo_card_text"
                    style={{ color: props.textcolor }}
                  >
                    <h4>{props.cardtitle}</h4>
                    <p>{props.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </>
    );
  };
  const InfoCardAppData = [
    {
      backgroundcolor: "#0043ce",
      textcolor: "white",
      cardtitle: "Total Employees",
      date: "28",
      icon: <MdGroups />,
      iconcolor: "white",
      iconbackgroundcolor: "#2062ec",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#F1C21B",
      textcolor: "black",
      cardtitle: "Onboarding This Week",
      date: "12",
      icon: <BsCalendar2Fill />,
      iconcolor: "black",
      iconbackgroundcolor: "#FEDA5A",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#900F9B",
      textcolor: "white",
      cardtitle: "Interviews This week",
      date: "12",
      icon: <FaUserAlt />,
      iconcolor: "white",
      iconbackgroundcolor: "#B916C7",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#DA1E28",
      textcolor: "white",
      cardtitle: "Releiving This Week",
      date: "12",
      icon: <IoLogOut />,
      iconcolor: "white",
      iconbackgroundcolor: "#FB404A",
      url: "/hr/organizationchart",
    },
  ];
  return (
    <>
      <div>
        <div className="row gy-3">
          {InfoCardAppData.map((val, i) => {
            return (
              <InfoCardApp
                key={i}
                backgroundcolor={val.backgroundcolor}
                textcolor={val.textcolor}
                cardtitle={val.cardtitle}
                date={val.date}
                icon={val.icon}
                iconcolor={val.iconcolor}
                iconbackgroundcolor={val.iconbackgroundcolor}
                url={val.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
