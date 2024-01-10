import "./styles/About.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Badges from "./Badges";
import { styled } from "@mui/material/styles";

interface ContactProps {
  open: boolean;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function BadgesPage({ open }: ContactProps) {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: 700,
          height: 430,
          position: "absolute",
          top: 200,
          left: 530,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
        }}
      >
        <Grid container spacing={3}>
          <Grid xs>
            <Item>
              <Badges
                src="assets/leetcode-2023-100.gif"
                height={125}
                width={125}
                right={20}
                top={35}
              />
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              <Badges
                src="assets/NCL2023.jpeg"
                height={125}
                width={125}
                right={20}
                top={35}
              />
            </Item>
          </Grid>
        </Grid>
      </Card>
    </Slide>
  );
}
