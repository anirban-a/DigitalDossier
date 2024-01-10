import "./App.css";
import Avatar from "@mui/material/Avatar";
import MenuBar from "./components/MenuBar";
import { CssBaseline, Paper } from "@mui/material";

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Avatar
        src="assets/avataaars.png"
        sizes="100"
        sx={{
          width: 324,
          height: 324,
          top: 250,
          left: 70,
          position: "absolute",
          // right: 20,
        }}
        variant="rounded"
      />
      <MenuBar />
    </>
  );
}

export default App;
