import { TripTileStyled } from "./styles/TripTile.styled";
import { fileUrl } from "../pb";
import { Typography } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";

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
  return (
    <TripTileStyled elevation={5} onClick={() => navigate(`/trips/${trip.id}`)}>
      <img src={`${fileUrl}/trips/${trip.id}/${trip.images[0]}`} alt={trip.name} />
      <Typography variant="h5">{trip.name}</Typography>
      <Typography variant="h6">
        {moment(trip.dateFrom).format("l")} - {moment(trip.dateTo).format("l")}
      </Typography>
    </TripTileStyled>
  );
};

export default TripTile;
