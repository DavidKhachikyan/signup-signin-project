import React from "react";

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            currentStep === index + 1 ? "bg-green-500" : "bg-green-200"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
