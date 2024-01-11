import "./styles/Skills.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slide from "@mui/material/Slide";
import Badges from "./Badges";
import Paper from "@mui/material/Paper";

import RadialChart from "./RadialChart";

interface SkillsProps {
  open: boolean;
}

const SkillsData = {
  skill: [
    "Python",
    "Java",
    "MS SQL Server",
    "MS CosmosDB",
    "PostgreSQL",
    "Cassandra",
    "MS Azure",
    "Apache Kafka",
    "Spring Boot",
    "Elastic Search",
    "TypeScript",
    "ReactJS",
  ],
  rating: [3, 4, 1.5, 3.5, 4, 2, 3, 3, 4, 1.5, 2, 1.5],
};
export default function Skills({ open }: SkillsProps) {
  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <Card
        sx={{
          width: "55vw",
          height: "91vh",
          maxHeight: 900,
          maxWidth: 1060,
          // height: 430,
          position: "absolute",
          top: 70,
          right: 14,
          borderBottom: 64,
          borderBottomColor: "#db9c28",
          display: "flex",
          alignItems: "center",
          // height: 720,
        }}
      >
        <CardContent>
          <RadialChart
            data={SkillsData.rating}
            labels={SkillsData.skill}
          ></RadialChart>
        </CardContent>

        <CardContent>
          {/* Badges go here */}

          <Paper
            elevation={4}
            sx={{
              // backgroundColor: "#810048",
              // color: "#fbe5eb",
              width: "15vw",
              maxWidth: 300,
              position: "absolute",
              right: 10,
              top: 20,
              bottom: 25,
            }}
          >
            <div className="badges_div">
              <Badges
                src="assets/leetcode-2023-100.gif"
                height={125}
                width={125}
                // right={20}
                // top={35}
              />
              <Badges
                src="assets/NCL2023.jpeg"
                height={125}
                width={125}
                // right={20}
                // top={35}
              />
              <div className="hakerrank-badge-problem-solving">
                <svg viewBox="0 0 91.66667 100" className="hexagon">
                  <g>
                    <defs>
                      <linearGradient
                        id="badge-bronze-gradient"
                        x1="52.5"
                        y1="2.5"
                        x2="52.5"
                        y2="102.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#ffc5ab"></stop>
                        <stop offset="1" stop-color="#ffa38a"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#badge-bronze-gradient)"
                      d="M98.28277,47.36h0c-.18459-9.382-.87983-17.797-2.0917-19.8595-1.02214-1.742-6.1721-5.43476-12.6195-9.45853L66.3804,8.23311C59.94162,4.89541,54.4699,2.5,52.49778,2.5c-2.42987,0-10.17687,3.63131-18.49789,8.18049-6.30411,3.44623-12.9328,7.41557-17.83631,10.74623-3.85037,2.61278-6.63864,4.828-7.35893,6.07393-.73574,1.27216-1.28014,4.91124-1.63613,9.67794l-.00014-.00008c-.45195,6.03951-.599,13.88935-.43933,21.10033.20233,9.11082.89243,17.18541,2.07561,19.22049C11.66541,82.42328,46.78277,102.5,52.49778,102.5c2.374,0,9.82245-3.47115,17.92388-7.87722,6.4-3.48081,13.19866-7.5418,18.23618-10.9459l-.00046-.00026c3.93694-2.6605,6.80064-4.91944,7.53385-6.17728.72907-1.2482,1.27024-4.80557,1.62881-9.48065l-.00014-.00008C98.269,62.13222,98.42408,54.47227,98.28277,47.36Z"
                      transform="translate(-6.66667 -2.5)"
                    ></path>
                  </g>
                  <image
                    className="badge-icon"
                    href="https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg"
                    x="50%"
                    y="22"
                    height="27"
                    width="27"
                    transform="translate(-13.5, 0)"
                  ></image>
                  <text className="badge-title" x="10%" y="65.5" font-size="10">
                    Problem Solving
                  </text>
                  <g className="star-section" transform="translate(-8, 0)">
                    <svg x="50%" y="71" height="10">
                      <svg
                        className="badge-star"
                        viewBox="0 0 6.54904 6.25825"
                        width="7"
                        x="0"
                      >
                        <path
                          className="star"
                          d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                          transform="translate(-49.22548 -74.85817)"
                        ></path>
                      </svg>
                      <svg
                        className="badge-star"
                        viewBox="0 0 6.54904 6.25825"
                        width="7"
                        x="9"
                      >
                        <path
                          className="star"
                          d="M55.51425,77.01983l-1.89417-.275-.84833-1.7175a.299.299,0,0,0-.27167-.16917.3245.3245,0,0,0-.2725.16917l-.305.61833-.5425,1.09916-.51417.075-1.38.2a.30333.30333,0,0,0-.18583.10083.33411.33411,0,0,0-.045.06833.35631.35631,0,0,0-.02417.07667.34087.34087,0,0,0-.005.04083.3038.3038,0,0,0,.02417.13417.33341.33341,0,0,0,.06667.0975l1.37167,1.33667-.2875,1.67167-.03667.21417c-.00167.01-.00167.02-.0025.02917l-.00167.0175a.26453.26453,0,0,0,.00167.04417.30489.30489,0,0,0,.44417.22917l1.69417-.89,1.69416.89a.30352.30352,0,0,0,.44084-.32L54.31175,78.874l1.37083-1.33667a.30339.30339,0,0,0-.16833-.5175"
                          transform="translate(-49.22548 -74.85817)"
                        ></path>
                      </svg>
                    </svg>
                  </g>
                </svg>
              </div>
            </div>
          </Paper>
        </CardContent>
      </Card>
    </Slide>
  );
}
