import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Button,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SuccessIcon from "../../assets/images/check.svg";
import GenericTextField from "../../components/generic/GenericTextField";
import LeyoutForm from "../../components/leyout/LeyoutForm";

const SignIn = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    password: Yup.string()
      .min(6, t("passwordMustBe"))
      .required(t("passwordRequired")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
  });
  const [loginStatus, setLoginStatus] = useState("");

  const handleClickShowPassword = (field) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("signUpFormData"));

    if (
      storedData &&
      storedData.email === data.email &&
      storedData.password === data.password
    ) {
      setLoginStatus("success");
    } else {
      setLoginStatus("reject");
    }
  };

  return (
    <LeyoutForm title={t("signIn")} subtitle={t("welcome")}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <GenericTextField register={register} name={"email"} errors={errors} />

        <GenericTextField
          register={register}
          name={"password"}
          errors={errors}
          type={showPasswords["password"] ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("password")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPasswords["password"] ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div className="flex justify-between items-center">
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#34C88A",
              borderRadius: "10px",
              padding: "12px 0",
            }}
            fullWidth
          >
            {t("submit")}
          </Button>
        </div>
        {loginStatus && (
          <Box className="flex flex-col items-center">
            <img src={SuccessIcon} className="mt-6 mb-2" alt="status icon" />
            <Typography variant="h3">
              {t(loginStatus === "success" ? "success" : "reject")}
            </Typography>
          </Box>
        )}
      </form>
    </LeyoutForm>
  );
};

export default SignIn;
