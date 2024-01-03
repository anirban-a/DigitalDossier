import "./styles/About.css";
// import TextWrap from "./TextWrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Badges from "./Badges";
// import Skill from "./Skill";
import ApexCharts from "apexcharts";
import { useEffect } from "react";

interface SkillsProps {
  open: boolean;
}

const displaySkills = () => {
  const options = {
    series: [10, 12, 13, 6],
    labels: ["Java", "Python", "F#", "OCaml"],
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 200,
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};

export default function Skills({ open }: SkillsProps) {
  useEffect(() => {
    displaySkills();
  });
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: 700,
          // height: 430,
          position: "absolute",
          top: 200,
          left: 530,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
        }}
      >
        <CardContent>
          <Badges
            src="/public/images/leetcode-2023-100.gif"
            height={125}
            width={125}
            right={20}
          />
          <CardContent id="chart" />
        </CardContent>
      </Card>
    </Slide>
  );
}
