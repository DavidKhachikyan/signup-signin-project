import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, InputAdornment, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import GenericTextField from "../../components/generic/GenericTextField";
import GenericSearchSelect from "../../components/generic/GenericSearchSelect";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GenericButton from "../../components/generic/GenericButton";
import GenericSelect from "../../components/generic/GenericSelect";
import { useNavigate } from "react-router-dom";
import LeyoutForm from "../../components/leyout/LeyoutForm";
import {
  cities,
  grade,
  regions,
  scholl,
  subjects,
} from "../../utils/constatns";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("nameRequired")),
    lastName: Yup.string().required(t("lastNameRequired")),
    email: Yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    phone: Yup.string().required(t("phoneRequired")),
    password: Yup.string()
      .min(6, t("passwordMustBe"))
      .required(t("passwordRequired")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("passwordMustMatch"))
      .required(t("confirmPasswordRequired")),
  });
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmit = (data) => {
    localStorage.setItem("signUpFormData", JSON.stringify(data));
    navigate("/signin");
  };

  const handleClickShowPassword = (field) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LeyoutForm title={t("signUp")} subtitle={t("quickAndEasy")}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <Box className="grid grid-cols-2 gap-4">
          <GenericTextField register={register} name={"name"} errors={errors} />
          <GenericTextField
            register={register}
            name={"lastName"}
            errors={errors}
          />
        </Box>
        <GenericTextField register={register} name={"email"} errors={errors} />
        <div className="grid grid-cols-1 gap-4">
          <GenericTextField
            register={register}
            name={"phone"}
            errors={errors}
            noLabel={true}
            placeholder={t("phone")}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className="border-r-2 pr-2 border-gray-400"
                >
                  +374
                </InputAdornment>
              ),
            }}
          />
        </div>

        <GenericSelect
          register={register}
          errors={errors}
          control={control}
          options={regions}
          name="region"
          label={t("region")}
        />
        <GenericSearchSelect
          options={cities}
          name={t("cityVillage")}
          register={register}
          formKey="cityVilage"
          control={control}
          setValue={setValue}
          type="search"
        />
        <GenericSearchSelect
          options={scholl}
          name={t("school")}
          register={register}
          formKey="school"
          control={control}
          setValue={setValue}
          type="search"
        />
        <GenericSearchSelect
          options={subjects}
          name={t("subject")}
          register={register}
          formKey="subject"
          control={control}
          setValue={setValue}
          type="checkbox"
        />
        <GenericSearchSelect
          options={grade}
          name={t("grade")}
          register={register}
          formKey="grade"
          control={control}
          setValue={setValue}
          type="checked"
        />

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

        <GenericTextField
          register={register}
          name={"confirmPassword"}
          errors={errors}
          type={showPasswords["confirmPassword"] ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("confirmPassword")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPasswords["confirmPassword"] ? (
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
          <a href="#" className="text-sm text-green-500">
            {t("registerDonor")}
          </a>
          <GenericButton
            type="submit"
            bgColor="#34C88A"
            text={t("submit")}
            width="70px"
          />
        </div>
      </form>
    </LeyoutForm>
  );
};

export default SignUp;
