import { FormStyled, LoginStyled } from "@src/components/styles/Login.styled";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import { useLogin } from "@src/hooks";
import { confirmPasswordValidator, emailValidator } from "@src/util";

export const Login = () => {
  const { t, activeTab, setActiveTab, register, loginUser, registerUser, errors, watch } = useLogin();

  return (
    <LoginStyled>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value="login" label={t("login")} />
        <Tab value="register" label={t("register")} />
      </Tabs>
      <FormStyled onSubmit={activeTab === "login" ? loginUser : registerUser}>
        <TextField
          label={t("email")}
          type="email"
          autoComplete="password"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", {
            required: t("required")!,
            validate: (value) => emailValidator(value, t("emailInvalid")),
          })}
        />
        <TextField
          label={t("password")}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", {
            required: t("required")!,
            minLength: {
              value: 8,
              message: t("minLength"),
            },
          })}
        />
        {activeTab === "register" ? (
          <TextField
            label={t("confirmPassword")}
            type="password"
            autoComplete="confirm-password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: t("required")!,
              minLength: {
                value: 8,
                message: t("minLength"),
              },
              validate: (value) => confirmPasswordValidator(value, watch("password"), t("confirmPasswordNotMatch")),
            })}
          />
        ) : null}
        <Button type="submit" variant="contained">
          {t(activeTab)}
        </Button>
      </FormStyled>
    </LoginStyled>
  );
};
