import "./styles/About.css";
import TextWrap from "./TextWrap";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface AboutProps {
  children: string;
  open: boolean;
}
export default function Home({ children, open }: AboutProps) {
  return (
    <div className={`drawer ${open ? "open" : ""}`}>
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
          <TextWrap>{children}</TextWrap>
        </CardContent>
      </Card>
    </div>
  );
}
