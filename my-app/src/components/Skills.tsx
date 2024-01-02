import "./styles/About.css";
import TextWrap from "./TextWrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";

interface SkillsProps {
  open: boolean;
}
export default function Skills({ open }: SkillsProps) {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: 700,
          // height: 430,
          position: "absolute",
          top: 200,
          left: 300,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
        }}
      >
        <CardContent>
          <TextWrap>Skills goes here.</TextWrap>
        </CardContent>
      </Card>
    </Slide>
  );
}
