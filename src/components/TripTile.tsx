import { TripTileStyled } from "./styles/TripTile.styled";
import { fileUrl } from "../pb";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteTrip } from "../hooks/useDeleteTrip";
import { SyntheticEvent } from "react";
import { renderDateRange } from "../util";

export type TripTileData = {
  id: string;
  images: string[];
  name: string;
  dateFrom: string;
  dateTo: string;
};

type TripTileProps = {
  trip: TripTileData;
};

const TripTile = (props: TripTileProps) => {
  const { trip } = props;
  const navigate = useNavigate();
  const { mutate: deleteTrip } = useDeleteTrip();

  const onTileClick = (event: any) => {
    const target = event.target.tagName.toLowerCase();
    if (target !== "button" && target !== "svg") {
      navigate(`/trips/${trip.id}`);
    }
  };

  const onDelete = (event: SyntheticEvent) => {
    event.preventDefault();
    deleteTrip(trip.id);
  };

  return (
    <TripTileStyled elevation={5} onClick={onTileClick}>
      <img src={`${fileUrl}/trips/${trip.id}/${trip.images[0]}`} alt={trip.name} />
      <Typography variant="h5" align="center">
        {trip.name}
      </Typography>
      <Typography variant="h6" align="center">
        {renderDateRange(trip.dateFrom, trip.dateTo)}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </TripTileStyled>
  );
};

export default TripTile;
