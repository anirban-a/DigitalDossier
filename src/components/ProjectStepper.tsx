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
        title="The Jefferson Project"
        category="Data Science"
        period="Spring 2023 to Fall 2023"
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
        title="Alexandria"
        category="Web Application"
        period="Fall 2022"
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
        title="Lecture Hall"
        category="Web Application"
        period="Fall 2022"
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
        title="Hand written digit recognition"
        category="Machine Learning"
        period="2015"
      />
    ),
    description: () => (
      <>
        <ProjectStage>{Number(4)}</ProjectStage>
      </>
    ),
  },
];

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
