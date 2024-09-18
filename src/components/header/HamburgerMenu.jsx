import { Box, IconButton, Drawer, Link } from "@mui/material";
import { useState } from "react";
import { ReactComponent as CoolIcon } from "../../assets/images/cooliconBlack.svg";
import { ReactComponent as Hamburger } from "../../assets/images/hamburger.svg";
import GenericButton from "../generic/GenericButton";
import Languages from "../language/Languages";

const HamburgerMenu = ({ navigationData, handleButtonClick, buttonText }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="md:hidden absolute right-0">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Hamburger />
        </IconButton>
      </div>

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#F8F8F8",
          },
        }}
      >
        <Box className="w-full py-4 pl-4">
          <div className="w-8 h-1 rounded-[3px] bg-[#34C88A] m-auto"></div>
          <Box className="flex flex-col mb-2">
            {navigationData.map((item, key) => {
              return (
                <Link
                  key={key}
                  href={item.href}
                  underline="none"
                  className="py-2 border-b border-[#34C88A] !text-black"
                >
                  {item.text}
                </Link>
              );
            })}
          </Box>
          <Languages style={{ marginBottom: "4px" }} />
          <Box onClick={() => setIsDrawerOpen(false)}>
            <GenericButton
              onClick={handleButtonClick}
              text={buttonText}
              color="black"
              startIcon={<CoolIcon />}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
