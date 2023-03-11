import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type ImageCarouselProps = {
  images: string[];
};

function ImageCarousel(props: ImageCarouselProps) {
  const [activeStep, setActiveStep] = useState(0);
  const { images } = props;
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ p: 2 }}>
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {images.map((image, index) => (
          <div key={image}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                className="test"
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={image}
                alt={image}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ImageCarousel;
