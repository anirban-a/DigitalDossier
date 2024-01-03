import "./styles/About.css";
import TextWrap from "./TextWrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Badges from "./Badges";
import Skill from "./Skill";

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
          <TextWrap>Skills goes here.</TextWrap>
          <Skill skill="Java" maxRange={5} level={4.5} />
          <Skill skill="Python" maxRange={5} level={3.5} />
        </CardContent>
      </Card>
    </Slide>
  );
}
