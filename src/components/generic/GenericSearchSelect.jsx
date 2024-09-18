import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Popover,
  Checkbox,
  ListItemIcon,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";

const GenericSearchSelect = ({ options, name, setValue, formKey, type }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionSelect = (option) => {
    if (type === "search") {
      setSelectedOption(option);
      setAnchorEl(null);

      setValue(formKey ? formKey : name, option.value);
    } else {
      let updatedSelection;
      if (selectedOptions.some((selected) => selected.value === option.value)) {
        updatedSelection = selectedOptions.filter(
          (selected) => selected.value !== option.value
        );
      } else {
        updatedSelection = [...selectedOptions, option];
      }
      setSelectedOptions(updatedSelection);

      setValue(
        formKey ? formKey : name,
        updatedSelection.map((opt) => opt.value)
      );
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredOption = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const open = Boolean(anchorEl);
  const id = open ? "option-popover" : undefined;

  return (
    <div>
      <div className="w-full">
        <Button
          aria-describedby={id}
          onClick={handleClick}
          fullWidth
          sx={{
            justifyContent: "space-between",
            textTransform: "none",
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "10px",
            color: selectedOptions.length > 0 ? "black" : "#6c757d",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
          }}
          endIcon={<ArrowDropDownIcon />}
        >
          {type === "search" && selectedOption
            ? selectedOption.label
            : type === "search" && !selectedOption
            ? name
            : (type === "checkbox" || type === "checked") && name}
        </Button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            marginTop: "55px",
            width: anchorEl ? anchorEl.offsetWidth : undefined,
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <div className="p-2 w-full">
          {type === "checkbox" || type === "search" ? (
            <>
              <div className="relative w-full mb-2">
                <TextField
                  placeholder="Search"
                  fullWidth
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      padding: "8px 16px",
                    },
                  }}
                />
              </div>
              <Divider />
            </>
          ) : null}

          {filteredOption.length > 0 ? (
            filteredOption.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className="px-4 py-2 text-base  items-center"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{option.label}</span>
                {type !== "search" ? (
                  <ListItemIcon>
                    <Checkbox
                      checked={selectedOptions.some(
                        (selected) => selected.value === option.value
                      )}
                      tabIndex={-1}
                      disableRipple
                      sx={{
                        backgroundColor: "#19486633",
                        "&.Mui-checked": {
                          backgroundColor: "#34C88A",
                        },
                        color: "#fff",
                        borderRadius: "4px",
                        padding: "0",
                      }}
                      icon={<CheckIcon />}
                      checkedIcon={<CheckIcon style={{ color: "#fff" }} />}
                    />
                  </ListItemIcon>
                ) : null}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled className="px-4 py-2 text-base text-gray-400">
              No results
            </MenuItem>
          )}
        </div>
      </Popover>
    </div>
  );
};

export default GenericSearchSelect;
