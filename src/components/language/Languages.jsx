import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Languages = ({ style }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const languages = [
    { text: "Eng", key: "en" },
    { text: "Հայ", key: "hy" },
    { text: "Рус", key: "ru" },
  ];
  return (
    <>
      {languages.map((language, key) => {
        return (
          <Box
            key={key}
            className={`text-[12px] cursor-pointer ${
              i18n.language !== language.key && "opacity-50"
            } `}
            onClick={() => changeLanguage(language.key)}
            sx={style}
          >
            {language.text}
          </Box>
        );
      })}
    </>
  );
};

export default Languages;
