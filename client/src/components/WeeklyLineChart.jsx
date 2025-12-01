import Chart from "react-apexcharts";

export const WeeklyLineChart = ({ weeklyData }) => {
  const series = [
    {
      name: "칼로리",
      data: weeklyData.map(d => d.kcal)
    }
  ];

  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: weeklyData.map(d => d.label),
      labels: { rotate: -45 }
    },
    fill: { opacity: 1 },
    colors: ["#2A52BE"],
    tooltip: {
      y: {
        formatter: val => `${val} kcal`
      }
    }
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={260}
    />
  );
};
