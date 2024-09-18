import React from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const GenericTextField = ({
  name,
  errors,
  register,
  InputProps,
  placeholder,
  noLabel,
  type,
}) => {
  const { t } = useTranslation();

  return (
    <TextField
      {...register(name)}
      label={noLabel ? "" : errors[name] ? t(errors[name].message) : t(name)}
      fullWidth
      type={type}
      variant="outlined"
      error={!!errors[name]}
      placeholder={placeholder}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
        input: {
          "&::placeholder": {
            color: "black",
            fontWeight: 500,
            color: errors[name] ? "red" : "",
          },
        },
      }}
      InputProps={InputProps}
    />
  );
};

export default GenericTextField;
