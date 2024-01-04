import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const steps = [
  {
    label: "Select campaign settings",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Accumsan sit amet nulla facilisi morbi. Pretium fusce id velit ut tortor. Tellus molestie nunc non blandit. Adipiscing bibendum est ultricies integer quis. Porttitor eget dolor morbi non arcu risus. Morbi leo urna molestie at elementum. Porttitor lacus luctus accumsan tortor posuere ac. Non tellus orci ac auctor augue. Vulputate ut pharetra sit amet. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Id velit ut tortor pretium viverra. Euismod quis viverra nibh cras pulvinar mattis nunc.

    Eu augue ut lectus arcu bibendum at varius vel pharetra. Quis blandit turpis cursus in. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet justo donec enim diam vulputate. Leo in vitae turpis massa sed elementum tempus egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Ac placerat vestibulum lectus mauris ultrices eros. Elit ullamcorper dignissim cras tincidunt. Velit egestas dui id ornare arcu odio ut sem nulla. Tortor consequat id porta nibh venenatis cras sed felis. Sit amet massa vitae tortor condimentum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Auctor urna nunc id cursus metus aliquam. Vel facilisis volutpat est velit egestas dui id ornare arcu.
    
    Interdum varius sit amet mattis vulputate enim. Pellentesque pulvinar pellentesque habitant morbi. Odio tempor orci dapibus ultrices in. Pretium aenean pharetra magna ac placerat vestibulum. Tempor nec feugiat nisl pretium fusce id velit. Elementum integer enim neque volutpat ac tincidunt. Cursus euismod quis viverra nibh. Arcu felis bibendum ut tristique et egestas quis. Sed euismod nisi porta lorem mollis aliquam. Diam maecenas ultricies mi eget mauris. Arcu dictum varius duis at consectetur lorem donec massa. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Donec enim diam vulputate ut pharetra sit amet aliquam id.
    
    Mi ipsum faucibus vitae aliquet nec ullamcorper. Adipiscing bibendum est ultricies integer quis auctor. Commodo ullamcorper a lacus vestibulum sed arcu non. Urna nec tincidunt praesent semper feugiat nibh sed. Erat pellentesque adipiscing commodo elit at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Platea dictumst vestibulum rhoncus est. Non curabitur gravida arcu ac tortor. Nisi vitae suscipit tellus mauris a diam maecenas sed. Odio ut enim blandit volutpat. Id neque aliquam vestibulum morbi blandit cursus risus at. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Aenean vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et. Ut aliquam purus sit amet luctus venenatis lectus. Etiam non quam lacus suspendisse faucibus interdum. Velit ut tortor pretium viverra suspendisse potenti. Tellus at urna condimentum mattis pellentesque id nibh tortor.
    
    Tristique magna sit amet purus gravida quis blandit turpis. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Tortor posuere ac ut consequat semper viverra nam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Eget duis at tellus at urna condimentum mattis pellentesque. Nec feugiat nisl pretium fusce id. Orci ac auctor augue mauris augue neque. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Id leo in vitae turpis massa sed elementum tempus egestas. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Id donec ultrices tincidunt arcu non. Est placerat in egestas erat imperdiet sed euismod. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

export default function ExperienceStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((activeStep + 1) % steps.length);
  const handlePrev = () =>
    setActiveStep((activeStep - 1 + steps.length) % steps.length);
  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ maxHeight: 720, maxWidth: 930, overflow: "scroll" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {/* container for navigation button */}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
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
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
