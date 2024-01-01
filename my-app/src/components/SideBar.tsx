import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import "./styles/SideBar.css";

interface SideBarProps {
  children: string[];
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <div className="container">
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 120,
          },
        }}
      >
        <Paper elevation={1}>
          <List>
            {children.map((item, idx) => (
              <ListItem disablePadding key={idx}>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </div>
  );
}
