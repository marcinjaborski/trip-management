import { HeaderStyled } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ViewListIcon from "@mui/icons-material/ViewList";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("translation", { keyPrefix: "nav" });

  return (
    <HeaderStyled>
      <ToggleButtonGroup value={location.pathname} exclusive color="primary">
        <ToggleButton value="/" onClick={() => navigate("/")}>
          <Tooltip title={t("home")}>
            <HomeIcon />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="/new" onClick={() => navigate("/new")}>
          <Tooltip title={t("addNew")}>
            <AddLocationIcon />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="/trips" onClick={() => navigate("/trips")}>
          <Tooltip title={t("list")}>
            <ViewListIcon />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </HeaderStyled>
  );
};
