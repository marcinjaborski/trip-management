import { Menu, MenuItem, ToggleButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import LanguageIcon from "@mui/icons-material/Language";

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "lang" });
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);

  const handleClick = async (lang: string) => {
    await i18n.changeLanguage(lang);
    setMenuAnchorEl(null);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <ToggleButton value="language-selection" onClick={(event) => setMenuAnchorEl(event.currentTarget)}>
        <Tooltip title={t("button")}>
          <LanguageIcon />
        </Tooltip>
      </ToggleButton>
      <Menu anchorEl={menuAnchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleClick("pl")}>
          <ReactCountryFlag countryCode="PL" svg />
        </MenuItem>
        <MenuItem onClick={() => handleClick("en")}>
          <ReactCountryFlag countryCode="GB" svg />
        </MenuItem>
      </Menu>
    </>
  );
};
