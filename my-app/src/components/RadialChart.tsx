import Chart from "react-apexcharts";

interface ChartProps {
  data: number[];
  labels: string[];
}

export default function RadialChart({ data, labels }: ChartProps) {
  //   const series = [{ data: data }];
  //   const options = {
  //     series: [10, 12, 13, 6],
  //     labels: ["Java", "Python", "F#", "OCaml"],
  //     chart: {
  //       type: "polarArea",
  //     },
  //     stroke: {
  //       colors: ["#fff"],
  //     },
  //     fill: {
  //       opacity: 0.8,
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             height: 200,
  //             width: 200,
  //           },
  //           legend: {
  //             position: "bottom",
  //           },
  //         },
  //       },
  //     ],
  //   };
  const state = {
    chart: {
      type: "polarArea",
      series: data,
      // chart options here:
      options: {
        labels: labels,
        theme: {
          mode: "dark",
          palette: "palette1",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.75,
          },
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#f5f5f5",
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
          animations: {
            enabled: true,
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
