import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
import Header from "./components/header/Header";

function App() {
  const { t } = useTranslation();

  const navigationData = [
    { text: t("teachers"), href: "/teachers" },
    { text: t("donors"), href: "/donors" },
    { text: t("aboutAs"), href: "/about" },
    { text: t("contact"), href: "/contact" },
    { text: t("blog"), href: "/blog" },
  ];
  return (
    <Router>
      <div className="font-assistant">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {navigationData.map((item, key) => {
            return (
              <Route
                key={key}
                path={item.href}
                element={
                  <Typography
                    variant="h2"
                    className="flex justify-center pt-16"
                  >
                    {item.text + " " + t("page")}
                  </Typography>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
