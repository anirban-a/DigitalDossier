import "./App.css";
import { AppBar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AppTitle from "./components/AppTitle";
function App() {
  return (
    <>
      <AppBar color="primary" className="root">
        <Stack direction="row">
          <Avatar
            variant="rounded"
            alt="Logo"
            src="/images/uifaces-cartoon-image.jpg"
            sx={{ width: 56, height: 58 }}
            className="logo"
          />
          <AppTitle>Anirban Acharya</AppTitle>
        </Stack>
      </AppBar>
      <div className="footer">
        Powered by Vite, Coded with ❤️ by Anirban Acharya
      </div>
    </>
  );
}

export default App;
