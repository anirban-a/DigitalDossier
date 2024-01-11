import "./App.css";
import Avatar from "@mui/material/Avatar";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Avatar
        src="assets/devpic.png"
        // sizes="200"
        sx={{
          width: "35vw",
          height: "35vw",
          maxHeight: 750,
          maxWidth: 750,
          top: 180,
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
