import { TripsListStyled } from "./styles/TripsList.styled";
import { Box, IconButton, Input, InputAdornment, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import TripTile, { TripTileData } from "./TripTile";
import { useListTrips } from "../hooks/useListTrips";

const TripsList = () => {
  const { t } = useTranslation("translation", { keyPrefix: "tripsList" });
  const { data: trips } = useListTrips();

  return (
    <TripsListStyled>
      <Typography variant="h4" align="center">
        {t("title")}
      </Typography>
      <Input
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <Box className="tiles">
        {trips?.map((trip) => (
          <TripTile trip={trip as unknown as TripTileData} key={trip.id} />
        ))}
      </Box>
    </TripsListStyled>
  );
};

export default TripsList;
