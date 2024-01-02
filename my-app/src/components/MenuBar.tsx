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
  useEffect(() => toggleTab(0), []);
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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              ANIRBAN ACHARYA
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
        in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
        exercitationem, at ab sequi qui modi delectus quia corrupti alias
        distinctio nostrum. Minima ex dolor modi inventore sapiente
        necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
        sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
        eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
        temporibus beatae doloremque voluptatum doloribus soluta accusamus porro
        reprehenderit eos inventore facere, fugit, molestiae ab officiis illo
        voluptates recusandae. Vel dolor nobis eius, ratione atque soluta,
        aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
        Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
        delectus quo eius exercitationem tempore. Delectus sapiente, provident
        corporis dolorum quibusdam aut beatae repellendus est labore quisquam
        praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
        deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
        fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
        recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
        debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
        praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
        voluptate iure labore, repellendus beatae quia unde est aliquid dolor
        molestias libero. Reiciendis similique exercitationem consequatur, nobis
        placeat illo laudantium! Enim perferendis nulla soluta magni error,
        provident repellat similique cupiditate ipsam, et tempore cumque quod!
        Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate
        iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid
        inventore commodi reprehenderit rerum reiciendis! Quidem alias
        repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas
        ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro
        a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur
        impedit, nam facilis libero dolorem dolores sunt inventore perferendis,
        aut sapiente modi nesciunt.
      </Home>
      <Experience open={experienceOpen} />
      <Skills open={skillsOpen} />
    </>
  );
}
