import Chart from "react-apexcharts";

const EmployeesChart = () => {
  return (
    <>
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
    </>
  );
};

export default EmployeesChart;
