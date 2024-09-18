import React, { useState } from "react";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import StepIndicator from "../pagination/StepIndicator";

const LeyoutForm = ({ title, subtitle, children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  return (
    <div className="flex mt-12  items-center justify-center ">
      <div className="w-full flex flex-col justify-between max-w-lg p-4 min-h-[550px] bg-[#f8f8f8] shadow-[0px_1px_24px_0px_rgba(61,61,61,0.18)] rounded-lg">
        <div>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h4" className="pt-2">
            {subtitle}
          </Typography>
          <Divider className="pt-2 mb-4" />
          {children}
        </div>
        <StepIndicator steps={totalSteps} currentStep={currentStep} />
      </div>
    </div>
  );
};

export default LeyoutForm;
