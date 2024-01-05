import "./styles/About.css";
import TextWrap from "./TextWrap";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";

interface AboutProps {
  children: string;
  open: boolean;
}
export default function Home({ children, open }: AboutProps) {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: "55vw",
          height: "91vh",
          maxHeight: 900,
          maxWidth: 1060,
          position: "absolute",
          top: 70,
          right: 14,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              marginBottom: -4,
              marginLeft: 2.5,
              marginTop: 3,
              color: "#db9c28",
            }}
          >
            Hello there!
          </Typography>
          <TextWrap>{children}</TextWrap>
        </CardContent>
      </Card>
    </Slide>
  );
}
