import "./App.css";
import Avatar from "@mui/material/Avatar";
import MenuBar from "./components/MenuBar";

const Footer = () => {
  // TODO: Need to create a footer for acknowledgements or a "Credits" tab.
  // This is not working currently.
  return (
    <>
      <a href="https://www.flaticon.com/free-icons/java" title="java icons">
        Java icons created by Freepik - Flaticon
      </a>
      <a href="https://www.flaticon.com/free-icons/python" title="python icons">
        Python icons created by Freepik - Flaticon
      </a>
    </>
  );
};

function App() {
  return (
    <>
      <Avatar
        src="/public/images/avataaars.png"
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
