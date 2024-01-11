import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

import Contact from "./Contact";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"];

export default function MenuBar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  type Setter = (x: boolean) => void;
  const setters: Setter[] = [
    setHomeOpen,
    setExperienceOpen,
    setProjectsOpen,
    setSkillsOpen,
    setContactOpen,
    // setBadgesOpen,
  ];

  const toggleTab = (id: number) => {
    // 0 = home
    // 1 = experience
    // 2 = skills
    // 3 = contact
    // 4 = badges
    setters[id](true);
    setters.forEach((fn, idx) => {
      if (idx != id) {
        fn(false);
      }
    });
  };

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
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    sm: "block",
                    fontFamily: '"Helvetica Neue"',
                  },
                }}
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
                  <Typography sx={{ fontFamily: '"Helvetica Neue"' }}>
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Contact open={contactOpen} />
      <Home open={homeOpen}>
        Welcome to my corner of the web! I'm Anirban Acharya, a seasoned
        software engineer with a passion for crafting innovative solutions to
        complex problems. With five years of hands-on experience in the field, I
        have honed my skills and developed a deep love for coding that goes
        beyond the professional realm. My journey in the tech world has been
        nothing short of thrilling. I thrive on the challenges that come with
        building data-intensive applications and crafting robust distributed
        systems. One of my true joys is creating developer tools and frameworks
        that not only streamline the coding process but also contribute to the
        broader engineering community. I strongly believe that software
        development is more than just writing code; it's a way to make a
        meaningful impact and solve real-world problems. The sense of reward
        that comes from tackling challenges head-on and witnessing the positive
        effects of my work is what keeps me fueled and motivated. Beyond the
        confines of software engineering, I have ventured into the realms of
        data analysis and machine learning, adding a multifaceted dimension to
        my skill set. Recognizing the importance of continuous learning and
        growth, I decided to pursue my Master's in Information Technology with a
        concentration in Data Science and Analytics from the prestigious
        Rensselaer Polytechnic Institute. My academic journey has not only
        expanded my knowledge but also deepened my understanding of the
        intricate world of data. It's this blend of professional experience and
        academic rigor that allows me to approach problem-solving with a unique
        perspective. Whether I'm knee-deep in code or exploring the intricacies
        of data, my enthusiasm for technology remains unwavering. I invite you
        to explore my portfolio and get a glimpse of the projects that showcase
        my dedication, creativity, and the relentless pursuit of excellence.
        Let's embark on a journey of innovation together!
      </Home>
      <Experience open={experienceOpen} />
      <Projects open={projectsOpen} />
      <Skills open={skillsOpen} />
      {/* <BadgesPage open={badgesOpen} /> */}
    </>
  );
}
