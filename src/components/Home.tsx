import "./styles/About.css";
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
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
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
          overflow: "auto",
          paddingTop: 10,
          // justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Helvetica Neue"',
              marginBottom: -4,
              marginLeft: 0.5,
              marginTop: 6,
              color: "#db9c28",
            }}
          >
            Hello there!
          </Typography>
          <Typography
            sx={{
              marginTop: 5,
              padding: 1,
              fontFamily: '"Helvetica Neue"',
              textAlign: "justify",
              lineHeight: 2,
            }}
          >
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  );
}
