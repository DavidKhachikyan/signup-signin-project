import React from "react";
import { Button } from "@mui/material";

const GenericButton = ({
  variant,
  text,
  color,
  startIcon,
  textSize,
  onClick,
  bgColor,
  type,
  width,
}) => {
  return (
    <Button
      variant={variant ?? "text"}
      onClick={onClick}
      className="text-white  "
      sx={{
        color: color ?? "#fff",
        textTransform: "none",
        minWidth: "unset",
        fontSize: textSize ?? "14px",
        backgroundColor: bgColor,
        width: width,
      }}
      type={type}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};

export default GenericButton;
