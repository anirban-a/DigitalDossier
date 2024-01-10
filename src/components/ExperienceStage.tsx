import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ArrowRight from "@mui/icons-material/ArrowRight";
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
    "Implemented feature for end-to-end creation of captivating ad creatives essential for successful ad campaigns, ensuring high-quality visuals and messaging.",
    "Developed REST APIs for microservices using the Facebook marketing API, enabling seamless creation and management of the advertising campaigns.",
    "Established an automation testing framework for the QA team, using JavaScript and Protractor to enhance testing efficiency and accuracy.",
    "Wrote Python scripts to collect performance statistics for tests, leading to the optimization of the framework's execution time. Achieved a significant improvement, reducing execution time from 60 minutes to 20 minutes, representing a 66.7% enhancement in efficiency.",
  ]);
  const experience2 = renderExperience([
    "Implemented targeted bug fixes within the Global HR and Global Payroll modules of Oracle HCM products, contributing to the overall stability and functionality of the software.",
    "Improved user experience by optimizing database, leading to a notable enhancement in system responsiveness and efficiency.",
    "Facilitated effective communication with customers to troubleshoot and resolve technical issues related to the products.",
  ]);
  const experience3 = renderExperience([
    "Built dependency-injection feature for our in-house RESTful application development framework using Java's reflection APIs and graph algorithm.",
    "Conducted comprehensive research to identify and propose essential features, facilitating the seamless adoption of our development framework by developers. Played a pivotal role in the establishment of best practices, including advocating for test-driven development and coding standards.",
    "Leveraged expertise in database design to contribute to the efficient structuring of project databases, enhancing overall system performance and reliability.",
    "Provided mentorship and guidance to junior engineers, fostering their professional growth and contributing to a collaborative and innovative team environment.",
    "Actively participated in the development of microservices for clients, significantly contributing to the successful execution and timely delivery of projects.",
  ]);
  const experience4 = renderExperience([
    "Primarily I was responsible for developing microservices which were migrated from legacy codebase written in F# .NET to Java using Spring Boot.",
    "Contributed to the architectural redesign of selected microservices during the migration process, demonstrating a keen ability and interest to optimize system structures and enhance overall performance.",
    "Effectively leveraged Microsoft Azure technologies, including CosmosDB, Change Feed Processor, and MS SQL Server, to establish a robust and resilient foundation for our microservices. This strategic implementation significantly improved data management, storage, and retrieval capabilities.",
    "Used Apache Kafka to decouple services and follow the event-driven architecture of our system for ensuring that our systems were robust and fault-tolerant in handling large volume of traffic.",
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
          overflow: "auto",
        },
      }}
    >
      <Paper elevation={2}>{ExperienceFactory(children)}</Paper>
    </Box>
  );
}
