import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import Contact from "./Contact";
import Home from "./Home";
import Experience from "./Experience";
import Skills from "./Skills";

const navItems = ["Home", "Experience", "Skills", "Contact"];

export default function MenuBar() {
  const [contactOpen, setContactOpen] = useState(true);
  const [homeOpen, setHomeOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);
  const [skillsOpen, setSkillsOpen] = useState(true);

  type Setter = (x: boolean) => void;
  const setters: Setter[] = [
    setHomeOpen,
    setExperienceOpen,
    setSkillsOpen,
    setContactOpen,
  ];

  const toggleTab = (id: number) => {
    // 0 = home
    // 1 = experience
    // 2 = skills
    // 3 = contact
    setters[id](true);
    setters.forEach((fn, idx) => {
      if (idx != id) {
        fn(false);
      }
    });
  };

  useEffect(() => toggleTab(0), []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Button
              sx={{
                // marginRight: 110,
                color: "#fff",
              }}
              key={"name_tag"}
              onClick={() => toggleTab(0)}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ANIRBAN ACHARYA
              </Typography>
            </Button>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                right: 10,
                position: "absolute",
              }}
            >
              {navItems.map((item, idx) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => toggleTab(idx)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Contact open={contactOpen} />
      <Home open={homeOpen}>
        I am a graduate student at the Rensselaer Polytechnic Institute,
        pursuing my MS in Information Technology with a focus on data science
        and analytics. Before this, I worked as a software engineer for five
        years, where I gained experience and honed my skills in programming
        languages, frameworks, and tools. I am a critical thinker who always
        welcomes new challenges and enjoys learning new skills. I am also a
        strong communicator who thrives in collaborative work environments to
        achieve shared goals. Although my background is in software engineering,
        I have always been highly interested in data science. Therefore, I
        decided to pursue a graduate degree in this field to deepen my knowledge
        and expertise. I am excited to be a part of this constantly evolving and
        challenging field.
      </Home>
      <Experience open={experienceOpen} />
      <Skills open={skillsOpen} />
    </>
  );
}
