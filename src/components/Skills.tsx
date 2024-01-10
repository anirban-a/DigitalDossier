import "./styles/Skills.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Badges from "./Badges";
import Paper from "@mui/material/Paper";

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
          width: "55vw",
          height: "91vh",
          maxHeight: 900,
          maxWidth: 1060,
          // height: 430,
          position: "absolute",
          top: 70,
          right: 14,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
          display: "flex",
          alignItems: "center",
          // height: 720,
        }}
      >
        <CardContent>
          <RadialChart
            data={SkillsData.rating}
            labels={SkillsData.skill}
          ></RadialChart>
        </CardContent>

        <CardContent>
          {/* Badges go here */}

          <Paper
            elevation={4}
            sx={{
              // backgroundColor: "#810048",
              // color: "#fbe5eb",
              width: "15vw",
              maxWidth: 300,
              position: "absolute",
              right: 10,
              top: 20,
              bottom: 25,
            }}
          >
            <div className="badges_div">
              <Badges
                src="assets/leetcode-2023-100.gif"
                height={125}
                width={125}
                // right={20}
                // top={35}
              />
              <Badges
                src="assets/NCL2023.jpeg"
                height={125}
                width={125}
                // right={20}
                // top={35}
              />
            </div>
          </Paper>
        </CardContent>
      </Card>
    </Slide>
  );
}
