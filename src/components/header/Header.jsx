import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Link } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import { ReactComponent as CoolIcon } from "../../assets/images/coolicon.svg";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import Languages from "../language/Languages.jsx";
import GenericButton from "../generic/GenericButton";
import HamburgerMenu from "./HamburgerMenu.jsx";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    if (location.pathname === "/signup") {
      setButtonText(t("signIn"));
    } else {
      setButtonText(t("signUp"));
    }
  }, [location.pathname, t]);

  const handleButtonClick = () => {
    if (location.pathname === "/signup") {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  };

  const navigationData = [
    { text: t("teachers"), href: "/teachers" },
    { text: t("donors"), href: "/donors" },
    { text: t("aboutAs"), href: "/about" },
    { text: t("contact"), href: "/contact" },
    { text: t("blog"), href: "/blog" },
  ];

  return (
    <AppBar
      position="static"
      className="!bg-green-1 shadow-none px-4 py-[10px]"
    >
      <Toolbar className="container mx-auto flex-col justify-between items-center">
        <Box className="flex justify-center pb-[10px] relative w-full">
          <img src={Logo} alt="Logo" className="h-10" />
          <HamburgerMenu
            navigationData={navigationData}
            handleButtonClick={handleButtonClick}
            buttonText={buttonText}
          />
          <Box className="absolute right-0  gap-2 hidden md:flex">
            <Languages />
          </Box>
        </Box>

        <Box className="flex justify-center relative w-full">
          <Box className=" space-x-4 hidden md:flex">
            {navigationData.map((item, key) => {
              return (
                <Link
                  key={key}
                  href={item.href}
                  className="!text-white "
                  underline="none"
                >
                  {item.text}
                </Link>
              );
            })}
          </Box>

          <Box className="absolute right-0 top-[-10px] hidden md:block">
            <GenericButton
              onClick={handleButtonClick}
              text={buttonText}
              startIcon={<CoolIcon />}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
