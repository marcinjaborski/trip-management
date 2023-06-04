import { useListImages, useListTrips } from "@src/hooks";
import { TripsMap } from "@src/components";
import { HomeStyled } from "@src/components/styles/Home.styled";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useUser } from "@src/hooks/useUser";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const { data: images } = useListImages();
  const { data: trips } = useListTrips("", "dateFrom");
  const { isLogged } = useUser();

  return trips?.length && images?.length ? (
    <TripsMap images={images} trips={trips} />
  ) : (
    <HomeStyled>
      <Typography variant="h1">{t("title")}</Typography>
      {!isLogged ? (
        <Link to="/login">{t("notLogged")}</Link>
      ) : (
        <>
          <Typography variant="h3">{t("emptyText")}</Typography>
          <Link to="/new">{t("add")}</Link>
        </>
      )}
    </HomeStyled>
  );
};
