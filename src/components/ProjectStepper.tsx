import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ProjectStage from "./ProjectStage";
import ProjectLabel from "./ProjectLabel";
const steps = [
  {
    label: (
      <ProjectLabel
        title="Software Engineer"
        company="Cybage Software"
        period="June 2017 to June 2019"
      />
    ),
    description: () => (
      <>
        <ProjectStage>{Number(1)}</ProjectStage>
      </>
    ),
  },
  {
    label: (
      <ProjectLabel
        title="Applications Engineer"
        company="Oracle India"
        period="June 2019 to June 2020"
      />
    ),
    description: () => (
      <>
        <ProjectStage>{Number(2)}</ProjectStage>
      </>
    ),
  },
  {
    label: (
      <ProjectLabel
        title="Senior Software Engineer"
        company="ZopSmart Technology"
        period="July 2020 to May 2021"
      />
    ),
    description: () => (
      <>
        <ProjectStage>{Number(3)}</ProjectStage>
      </>
    ),
  },
  {
    label: (
      <ProjectLabel
        title="Software Development Engineer 3"
        company="Walmart Global Tech"
        period="May 2021 to July 2022"
      />
    ),
    description: () => (
      <>
        <ProjectStage>{Number(4)}</ProjectStage>
      </>
    ),
  },
].reverse();

export default function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((activeStep + 1) % steps.length);
  const handlePrev = () =>
    setActiveStep((activeStep - 1 + steps.length) % steps.length);
  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ maxHeight: 720, maxWidth: 930, overflowY: "auto" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography variant="h6">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              {step.description()}
              {/* <Typography>{step.description}</Typography> */}
              <Box sx={{ mb: 2 }}>
                {/* container for navigation button */}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1, backgroundColor: "#006832" }}
                >
                  {index === steps.length - 1 ? "Go to first" : "Continue"}
                </Button>
                <Button
                  variant="contained"
                  onClick={handlePrev}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === 0 ? "Go to last" : "Previous"}
                </Button>
                {index > 0 && (
                  <>
                    <Button
                      variant="contained"
                      onClick={handleReset}
                      sx={{ mt: 1, mr: 1, backgroundColor: "#e8444a" }}
                    >
                      Reset
                    </Button>
                  </>
                )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
