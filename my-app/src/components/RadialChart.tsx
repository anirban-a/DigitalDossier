import Chart from "react-apexcharts";

interface ChartProps {
  data: number[];
  labels: string[];
}

export default function RadialChart({ data, labels }: ChartProps) {
  const state = {
    chart: {
      type: "polarArea",
      series: data,
      // chart options here:
      options: {
        labels: labels,
        colors: [
          "#d47718",
          "#ff3b0d",
          "#3be1c8",
          "#e3db42",
          "#3b54e1",
          "#2E93fA",
          "#66DA26",
          "#546E7A",
          "#E91E63",
          "#00849d",
          "#ff3b0d",
          "#ec54c8",
          "#e272af",
          "#ff7f00",
          "#68f84d",
          "#43BCCD",
          "#5500c3",
          "#c100e0",
          "#53777A",
          "#FF7F50",
          "#C0C0C0",
          "#9B59B6",
          "#2ECC71",
          "#FEB019",
          "#775DD0",
          "#7D02EB",
        ],
        theme: {
          mode: "dark",
          palette: "palette8",
          monochrome: {
            enabled: false,
            color: "#3c3c3c",
            shadeTo: "light",
            shadeIntensity: 0.55,
          },
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#3c3c3c",
          //   fillColors: undefined,
          radius: 12,
          //   customHTML: undefined,
          //   onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
        chart: {
          fontFamily: "Helvetica",
          fontSize: 40,
          background: "#262626",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
      },
    },
  };
  return (
    <Chart
      options={state.chart.options}
      series={state.chart.series}
      type={"polarArea"}
      width={500}
      height={300}
    />
  );
}
