import React from "react";
import { Controller } from "react-hook-form";
import {
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Select from "@mui/material/Select";

const GenericSelect = ({ control, name, label, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            input={<OutlinedInput label={label} />}
            sx={{
              borderRadius: "10px",
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  mt: 1,
                },
              },
            }}
          >
            {options.map((reg, index) => (
              <MenuItem key={index} value={reg.value}>
                {reg.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default GenericSelect;
