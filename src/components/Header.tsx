import { HeaderStyled } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ViewListIcon from "@mui/icons-material/ViewList";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUser } from "@src/hooks/useUser";
import React from "react";
import { LanguageSelect } from "@src/components/LanguageSelect";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("translation", { keyPrefix: "nav" });
  const { isLogged, logout } = useUser();

  return (
    <HeaderStyled>
      <ToggleButtonGroup value={location.pathname} exclusive color="primary">
        <ToggleButton value="/" onClick={() => navigate("/")}>
          <Tooltip title={t("home")}>
            <HomeIcon />
          </Tooltip>
        </ToggleButton>
        {isLogged ? (
          <ToggleButton value="/new" onClick={() => navigate("/new")}>
            <Tooltip title={t("addNew")}>
              <AddLocationIcon />
            </Tooltip>
          </ToggleButton>
        ) : null}
        {isLogged ? (
          <ToggleButton value="/trips" onClick={() => navigate("/trips")}>
            <Tooltip title={t("list")}>
              <ViewListIcon />
            </Tooltip>
          </ToggleButton>
        ) : null}
        <LanguageSelect />
        {isLogged ? (
          <ToggleButton value="/logout" onClick={logout}>
            <Tooltip title={t("logout")}>
              <LogoutIcon />
            </Tooltip>
          </ToggleButton>
        ) : (
          <ToggleButton value="/login" onClick={() => navigate("/login")}>
            <Tooltip title={t("login")}>
              <LoginIcon />
            </Tooltip>
          </ToggleButton>
        )}
      </ToggleButtonGroup>
    </HeaderStyled>
  );
};
