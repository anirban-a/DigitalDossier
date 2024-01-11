import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface LabelProps {
  title: string;
  company: string;
  period: string;
}

export default function ProjectLabel({ title, company, period }: LabelProps) {
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#810048",
              color: "#fbe5eb",
              width: 300,
            }}
          >
            <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
              {title}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#ac176a",
              color: "#fbe5eb",
              width: 200,
            }}
          >
            <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
              {company}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} sx={{ width: 200, backgroundColor: "#b64782" }}>
            <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
              {period}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
