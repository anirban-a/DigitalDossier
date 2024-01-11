import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ArrowRight from "@mui/icons-material/ArrowRight";
import "./styles/ProjectStage.css";

function renderProject(experiences: string[], url: string) {
  return (
    <List sx={{ width: "100%", marginLeft: 2, marginBottom: 2 }}>
      {experiences.map((experience, idx) => (
        <>
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
        </>
      ))}
      {url != "" && (
        <a href={url} className="project-link" target="_blank">
          <Typography sx={{ fontWeight: "bolder" }}>Github link</Typography>
        </a>
      )}
    </List>
  );
}
function ProjectFactory(experience: number) {
  const project1 = renderProject(
    [
      `
    The Jefferson Project is a collaborative research initiative with Rensselaer Polytechnic Institute, IBM, and The Fund for Lake George. The project involves installing a network of Internet of Things (IoT) sensors throughout the lake to collect diverse environmental data.
    Lake George, known for its recreational significance and located in upstate New York, has experienced a surge in HAB occurrences in recent years.`,
      ` For this project I researched and built machine-learning regression models to forecast the growth of harmful algal bloom (HAB) in Lake George as a part of the Jefferson Project using a large volume of data from IOT sensors overlayed with NASA precipitation data. The models could predict the target variables with over 90% accuracy.`,
      `
    The research involved investigating environmental factors like solar radiation and water chemistry variables such as nitrate and nitrite nitrogen, ammonia, phosphorus, etc., and their impact on phycocyanin growth which I used as a proxy indicator for the algae.
    `,
    ],
    "https://github.com/anirban-a/JeffersonProject"
  );
  const project2 = renderProject(
    [
      "Designed and developed a book exchange application with a potential to impact approximately 3.9 million users in the United States to aid university students in exchanging textbooks with ease, reducing the financial burden of purchasing new books and promoting recycling.",
      "Facilitated the exchange of textbooks amongst peers, creating an online platform for students to lend and borrow books, thus promoting sustainability and reducing waste.",
      "Technologies used: Java 8, Spring Boot, HTML, CSS, JQuery, MS CosmosDB",
    ],
    "https://github.com/anirban-a/alexandria"
  );
  const project3 = renderProject(
    [
      "Designed and developed a virtual classroom assistant web application for use by the Professors to help track student interaction and in-class activities, class, and quiz performance.",
      "Technologies used: React, NextJS, Supabase ",
    ],
    ""
  );
  const project4 = renderProject(
    [
      "Used machine learning to classify hand-written digits",
      "Wrote k-NN and feed-forward neural network in Python for the classification problem",
      "Technologies used: Python, Pandas, NumPy",
    ],
    ""
  );

  switch (experience) {
    case 1:
      return project1;
    case 2:
      return project2;
    case 3:
      return project3;
    case 4:
      return project4;
  }
}
interface Prop {
  children: number;
}
export default function ProjectStage({ children }: Prop) {
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
      <Paper elevation={2}>{ProjectFactory(children)}</Paper>
    </Box>
  );
}
