import "./styles/About.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import ExperienceStepper from "./ExperienceStepper";

interface ExperienceProps {
  open: boolean;
}
export default function Experience({ open }: ExperienceProps) {
  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: "55vw",
          // height: 430,
          position: "absolute",
          top: 70,
          right: 14,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
          height: "91vh",
          maxHeight: 900,
          maxWidth: 1060,
        }}
      >
        <CardContent>
          <ExperienceStepper />
          {/* <TextWrap>Experience goes here</TextWrap> */}
        </CardContent>
      </Card>
    </Slide>
  );
}
