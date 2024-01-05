import "./styles/About.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Badges from "./Badges";

import RadialChart from "./RadialChart";

interface SkillsProps {
  open: boolean;
}

const SkillsData = {
  skill: [
    "Python",
    "Java",
    "MS SQL Server",
    "MS CosmosDB",
    "PostgreSQL",
    "Cassandra",
    "MS Azure",
    "Apache Kafka",
    "Spring Boot",
    "Elastic Search",
    "TypeScript",
    "ReactJS",
  ],
  rating: [3, 4, 1.5, 3.5, 4, 2, 3, 3, 4, 1.5, 2, 1.5],
};
export default function Skills({ open }: SkillsProps) {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: 930,
          // height: 430,
          position: "absolute",
          top: 70,
          left: 530,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
          height: 720,
        }}
      >
        <CardContent>
          <Badges
            src="assets/leetcode-2023-100.gif"
            height={125}
            width={125}
            right={20}
            top={35}
          />
          <CardContent>
            <RadialChart
              data={SkillsData.rating}
              labels={SkillsData.skill}
            ></RadialChart>
          </CardContent>
        </CardContent>
      </Card>
    </Slide>
  );
}
