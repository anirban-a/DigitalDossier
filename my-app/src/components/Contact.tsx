import "./styles/About.css";
import TextWrap from "./TextWrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";

interface ContactProps {
  open: boolean;
}
export default function Contact({ open }: ContactProps) {
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
          <TextWrap>linkedin.com/in/anirban-acharya/</TextWrap>
        </CardContent>
      </Card>
    </Slide>
  );
}
