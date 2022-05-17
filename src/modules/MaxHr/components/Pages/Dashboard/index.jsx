import Select from "react-select";
import { NavLink } from "react-router-dom";
import IconImg from "../../../../common/components/img/Img";
import D1 from "../../../.././../pics/d1.png";
import D2 from "../../../.././../pics/d2.png";
import D4 from "../../../.././../pics/d3.png";
import D3 from "../../../.././../pics/d4.png";
import Chart from "react-apexcharts";
import { AiTwotoneSetting } from "react-icons/ai";
import CardIconImg from "../../../../../pics/profile.jpeg";
import Birthday from "../../../../../pics/b.png";
import Anniversiry from "../../../../../pics/p.png";
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
                    <IconImg
                      className="dashbaord_img"
                      backgroundImage={props.dashbaordIcon}
                    />
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
      dashbaordIcon: D1,
      iconbackgroundcolor: "#2062ec",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#F1C21B",
      textcolor: "black",
      cardtitle: "Onboarding This Week",
      date: "12",
      dashbaordIcon: D2,
      iconbackgroundcolor: "#FEDA5A",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#900F9B",
      textcolor: "white",
      cardtitle: "Interviews This week",
      date: "12",
      dashbaordIcon: D3,
      iconbackgroundcolor: "#B916C7",
      url: "/hr/organizationchart",
    },
    {
      backgroundcolor: "#DA1E28",
      textcolor: "white",
      cardtitle: "Releiving This Week",
      date: "12",
      dashbaordIcon: D4,
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
                // icon={val.icon}
                dashbaordIcon={val.dashbaordIcon}
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
export const EmployeesChart = (props) => {
  const CelebrationsData = [
    {
      toptitle: "Today(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "27th Nov - Happy Birthday!",
          BirthdayImg: Birthday,
        },
      ],
    },
    {
      toptitle: "Tomorrow(01)",
      cat1: [
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "01st Dec - Happy  Anniversiry!",
          BirthdayImg: Anniversiry,
        },
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "29th Nov - Happy Birthday!",
          BirthdayImg: Birthday,
        },
        {
          userImg: CardIconImg,
          name: "Suman Gupta",
          DOB: "31th Nov - Happy Birthday!",
          BirthdayImg: Birthday,
        },
      ],
    },
  ];

  const Celebrations = (props) => {
    return (
      <>
        <div>
          <div className="celebrations_card_line_title">
            <p>{props.toptitle}</p>
            <hr />
          </div>
          {props.arr.cat1.map((val, i) => {
            return (
              <div key={i} className="celebrations_card_img_top_div">
                <div className="row ">
                  <div className="col-2">
                    <IconImg
                      className="celebrations_card_img"
                      backgroundImage={val.userImg}
                    />
                  </div>
                  <div className="col-7">
                    <div className="celebrations_card_user_info">
                      <h5>{val.name}</h5>
                      <p>{val.DOB}</p>
                    </div>
                  </div>
                  <div className="col-3 celebrations_card_icon_div">
                    <IconImg
                      className="celebrations_card_img_icon"
                      backgroundImage={val.BirthdayImg}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const HolidaysData = [
    {
      name: "Diwali",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Ramnavami",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Dussehara",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Christmas",
      day: "Monday",
      date: "30th Nov, 2021",
    },
    {
      name: "Diwali",
      day: "Monday",
      date: "30th Nov, 2021",
    },
  ];
  const Holidays = (props) => {
    return (
      <>
        <div className="holidays_card">
          <h5>{props.name}</h5>
          <p>
            {props.day} <span>{props.date}</span>
          </p>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <div className="row ">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
            <NavLink to="/hr/attendence">
              <div className="dashbaord_white_card">
                <div className="dashbaord_white_title">
                  <p>
                    total employees: <span>20</span>
                  </p>
                </div>
                <Chart
                  type="donut"
                  series={[23, 80]}
                  options={{
                    colors: ["#DA1E28", "#2DCD1F"],
                    labels: ["Leave", "Working"],

                    dataLabels: {
                      enabled: true,
                      background: {
                        enabled: true,
                        foreColor: "black",
                        opacity: 1,
                      },
                      dropShadow: {
                        enabled: false,
                        opacity: 1,
                      },
                    },
                    chart: {
                      height: "100%",
                      width: "100%",
                    },
                    legend: {
                      show: true,
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "18px",
                      markers: {
                        width: 12,
                        height: 12,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                      },
                      itemMargin: {
                        horizontal: 5,
                        vertical: 0,
                      },
                    },
                  }}
                ></Chart>
              </div>
            </NavLink>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
            <NavLink to="/hr/attendence">
              <div className="dashbaord_white_card">
                <div className="dashbaord_white_title">
                  <p>Working Format</p>
                </div>
                <Chart
                  type="donut"
                  series={[23, 80]}
                  options={{
                    colors: ["#85E57D", "#2DCD1F"],
                    labels: ["Office", "Home"],
                    dataLabels: {
                      enabled: true,
                      background: {
                        enabled: true,
                        foreColor: "black",
                        opacity: 1,
                      },
                      dropShadow: {
                        enabled: false,
                        opacity: 1,
                      },
                    },
                    chart: {
                      height: "100%",
                      width: "100%",
                    },
                    legend: {
                      show: true,
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "18px",
                      markers: {
                        width: 12,
                        height: 12,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                      },
                      itemMargin: {
                        horizontal: 5,
                        vertical: 0,
                      },
                    },
                  }}
                ></Chart>
              </div>
            </NavLink>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
            <NavLink to="/hr/attendence">
              <div className="dashbaord_white_card">
                <div className="dashbaord_white_title">
                  <p>Who’s Away</p>
                </div>
                d
              </div>
            </NavLink>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
            <div className="dashbaord_white_card">
              <div className="dashbaord_white_title">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <p>Celebrations</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <div className="celebrations_card_setting_icon_div">
                        <NavLink to="/hr/Settings">
                          <AiTwotoneSetting />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="celebrations_card_overflow_div">
                {CelebrationsData.map((val, i) => {
                  return (
                    <Celebrations key={i} toptitle={val.toptitle} arr={val} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
            <div className="dashbaord_white_card">
              <div className="dashbaord_white_title">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <p>Holidays</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div>
                      <div className="celebrations_card_setting_icon_div">
                        <NavLink to="/hr/Settings">
                          <AiTwotoneSetting />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="celebrations_card_overflow_div">
                <div className="holidays_card_top_main_div">
                  {HolidaysData.map((val, i) => {
                    return (
                      <Holidays
                        key={i}
                        name={val.name}
                        day={val.day}
                        date={val.date}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
