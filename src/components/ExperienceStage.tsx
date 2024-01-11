import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ArrowRight from "@mui/icons-material/ArrowRight";
import "./styles/ExperienceStage.css";

function renderExperience(experiences: string[]) {
  return (
    <List sx={{ width: "100%", marginLeft: 2, marginBottom: 2 }}>
      {experiences.map((experience, idx) => (
        <ListItemText key={idx} sx={{ width: "95%", textAlign: "justify" }}>
          <ArrowRight
            sx={{ display: "inline", position: "absolute" }}
          ></ArrowRight>
          <Typography
            sx={{
              display: "inline",
              marginLeft: 3,
              fontFamily: '"Helvetica Neue"',
            }}
            component="span"
            variant="body1"
            color="text.primary"
          >
            {experience}
          </Typography>
          <Divider />
        </ListItemText>
      ))}
    </List>
  );
}
function ExperienceFactory(experience: number) {
  const experience1 = renderExperience([
    "Developed microservices using Facebook business manager API, Java, and Spring Boot for digital ad campaign creation and management for Amobee.",
    "Implemented feature of batch creation of ad campaigns using the Facebook business manager APIs which reduced the remote API calls of the application by 20%.",
    "Wrote Python scripts to collect and analyze test performance statistics, leading to a remarkable 66.7% reduction in framework execution time, maximizing testing throughput and resource utilization.",
    "Created automation testing framework using JavaScript, reducing the test case development time by 40%.",
  ]);
  const experience2 = renderExperience([
    "Optimized and fine-tuned database queries and stored procedures for Oracle HCM products, resulting in a 30% reduction in query execution time and improved overall system performance.",
    "Executed targeted bug fixes and data corruption resolution issues for the products which brought down bug count by 40% with a maximum resolution time of 30 minutes.",
  ]);
  const experience3 = renderExperience([
    "Developed REST APIs and microservices to manage product orders for Kroger which also involved designing databases for it to support efficient querying of order data, along with spearheading the development of an in-house application development framework (Radon) to help engineers build applications for the client.",
    "Developed dependency injection feature for Radon using Java Reflection APIs and graph algorithms, achieving a remarkable 30% reduction in code volume and boosting maintainability.",
    "Led the effort for unit and integration test development improving the test code coverage from 60% to 90%.",
  ]);
  const experience4 = renderExperience([
    "Migrated legacy F# .NET applications to Java Spring Boot and revamped architecture and system design, ensuring scalability and improved performance.",
    "Developed REST APIs and microservices for automating the supply chain process, leading to 20% processing time reduction.",
    "Implemented highly performant Extract-Transform-Load process services using Apache Kafka to synchronize databases for system migration, which processed 25.5 GB of data in under 30 minutes.",
  ]);

  switch (experience) {
    case 1:
      return experience1;
    case 2:
      return experience2;
    case 3:
      return experience3;
    case 4:
      return experience4;
  }
}
interface Prop {
  children: number;
}
export default function ExperienceStage({ children }: Prop) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 730,
          maxHeight: 328,
          overflowY: "auto",
          overflowX: "hidden",
        },
      }}
    >
      <Paper elevation={2}>{ExperienceFactory(children)}</Paper>
    </Box>
  );
}
