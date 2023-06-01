import { TripsListStyled } from "./styles/TripsList.styled";
import { Box, IconButton, Input, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import TripTile from "./TripTile";
import { useListTrips } from "../hooks/useListTrips";
import { useState } from "react";

const TripsList = () => {
  const { t } = useTranslation("translation", { keyPrefix: "tripsList" });
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useState(search);
  const [sortBy, setSortBy] = useState("none");
  const { data: trips } = useListTrips(searchParam, sortBy);

  return (
    <TripsListStyled>
      <Typography variant="h4" align="center">
        {t("title")}
      </Typography>
      <Box className="filters">
        <Input
          onChange={(event) => setSearch(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchParam(search)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        <TextField
          variant="standard"
          select
          label={t("sort")}
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <MenuItem value="none">
            <i>{t("none")}</i>
          </MenuItem>
          <MenuItem value="dateFrom">{t("dateFrom")}</MenuItem>
          <MenuItem value="dateTo">{t("dateTo")}</MenuItem>
        </TextField>
      </Box>
      <Box className="tiles">
        {trips?.map((trip) => (
          <TripTile trip={trip} key={trip.id} />
        ))}
      </Box>
    </TripsListStyled>
  );
};

export default TripsList;
