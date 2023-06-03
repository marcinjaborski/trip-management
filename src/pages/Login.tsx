import { FormStyled, LoginStyled } from "@src/components/styles/Login.styled";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import { useLogin } from "@src/hooks";

export const Login = () => {
  const { t, activeTab, setActiveTab, register, loginUser, registerUser } = useLogin();

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
        <TextField label={t("email")} type="email" {...register("email")} />
        <TextField label={t("password")} type="paswword" {...register("password")} />
        {activeTab === "register" ? (
          <TextField label={t("confirmPassword")} type="password" {...register("confirmPassword")} />
        ) : null}
        <Button type="submit" variant="contained">
          {t(activeTab)}
        </Button>
      </FormStyled>
    </LoginStyled>
  );
};
