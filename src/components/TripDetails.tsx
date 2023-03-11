import { TripDetailsStyled } from "./styles/TripDetails.styled";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useViewTrip } from "../hooks/useViewTrip";
import { renderDateRange } from "../util";
import ImageCarousel from "./ImageCarousel";
import { fileUrl } from "../pb";
import Map from "./Map";

export type Trip = {
  id: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  images: string[];
  description: string;
};

const TripDetails = () => {
  const { id } = useParams();
  const { data: trip } = useViewTrip(id!);

  if (!trip) {
    return <>Not found</>;
  }

  return (
    <TripDetailsStyled>
      <Typography variant="h4" align="center">
        {trip.name}
      </Typography>
      <Typography variant="h5" align="center">
        {renderDateRange(trip.dateFrom, trip.dateTo)}
      </Typography>
      <Typography variant="body1">{trip.description}</Typography>
      <ImageCarousel images={trip.images.map((image) => `${fileUrl}/trips/${trip.id}/${image}`)} />
      <Map />
    </TripDetailsStyled>
  );
};

export default TripDetails;
