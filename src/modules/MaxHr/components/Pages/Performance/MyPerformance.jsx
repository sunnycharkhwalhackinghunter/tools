import { NavLink } from "react-router-dom";
import Select from "react-select";
import TopPageTitle from "../../../../common/components/topPageTitle/Index";
import { BsArrowRight } from "react-icons/bs";
import Chart from "react-apexcharts";
export const MyPerformance = () => {
  const options = [
    { value: "2021", label: "2021" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-5 col-5">
          <TopPageTitle Name="MyPerformance" />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7 MyAttendence_next_page">
          <NavLink to="/hr/previous_leaves">
            <span>Action on Leave</span>
            <BsArrowRight />
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div className="top_inner_title">
            <h3>Absenteeism</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="dashboard_top_week_Select">
            <Select options={options} placeholder="2022" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
        <div className="col-4">
          <div className="MyPerformance_chart_div">1</div>
        </div>
        <div className="col-8">
          <div className="MyPerformance_chart_div">
            <Chart
              height={320}
              type="line"
              series={[
                {
                  data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
              ]}
              options={{
                labels: ["Office"],
                chart: {
                  type: "line",
                  zoom: {
                    enabled: false,
                  },
                  toolbar: {
                    show: false,
                  },
                },
                colors: ["#DA1E28"],
                dataLabels: {
                  enabled: true,
                },
                stroke: {
                  curve: "smooth",
                },
                title: {
                  text: "Absenteeism over the last 12 Months",
                  align: "left",
                  margin: 10,
                  offsetX: 0,
                  offsetY: 0,
                  floating: false,
                  style: {
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: undefined,
                    color: "#263238",
                  },
                },
                grid: {
                  borderColor: "#e7e7e7",
                  row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5,
                  },
                },

                xaxis: {
                  categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                  ],
                },
                legend: {
                  show: true,
                  position: "top",
                  horizontalAlign: "right",
                  floating: true,
                  offsetY: -25,
                  offsetX: -5,
                },
              }}
            ></Chart>
          </div>
        </div>
      </div>
    </>
  );
};
