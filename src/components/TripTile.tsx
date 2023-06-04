import { TripTileStyled } from "./styles";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteTrip } from "@src/hooks";
import { SyntheticEvent } from "react";
import { getImageUrl, renderDateRange } from "../util";
import { PBTrip } from "../types";

type TripTileProps = {
  trip: PBTrip;
};

export const TripTile = (props: TripTileProps) => {
  const { trip } = props;
  const navigate = useNavigate();
  const { mutate: deleteTrip } = useDeleteTrip();

  const onTileClick = (event: any) => {
    const target = event.target.tagName.toLowerCase();
    if (target !== "button" && target !== "svg" && target !== "path") {
      navigate(`/trips/${trip.id}`);
    }
  };

  const onDelete = (event: SyntheticEvent) => {
    event.preventDefault();
    deleteTrip(trip);
  };

  return (
    <TripTileStyled elevation={5} onClick={onTileClick}>
      <img src={getImageUrl(trip.expand.thumbnail!)} alt={trip.name} />
      <Typography variant="h5" align="center">
        {trip.name}
      </Typography>
      <Typography variant="h6" align="center">
        {renderDateRange(trip.dateFrom, trip.dateTo)}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </TripTileStyled>
  );
};
