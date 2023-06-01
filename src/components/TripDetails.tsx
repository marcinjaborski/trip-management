import { TripDetailsStyled } from "./styles/TripDetails.styled";
import { Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useViewTrip } from "../hooks/useViewTrip";
import { renderDateRange } from "../util";
import ImageCarousel from "./ImageCarousel";
import Map from "./Map";
import { useState } from "react";
import { MapLocation, PBImage } from "../types";

const TripDetails = () => {
  const { id } = useParams();
  const { data: trip } = useViewTrip(id!);
  const [currentLocation, setCurrentLocation] = useState<MapLocation>();

  if (!trip) {
    return (
      <Paper sx={{ p: 3 }}>
        <Typography variant="h3">This trip does not exist</Typography>
      </Paper>
    );
  }

  const images: PBImage[] = [];
  if (trip.expand.thumbnail) images.push(trip.expand.thumbnail);
  if (trip.expand.images) images.push(...trip.expand.images);

  return (
    <TripDetailsStyled>
      <Typography variant="h4" align="center">
        {trip.name}
      </Typography>
      <Typography variant="h5" align="center">
        {renderDateRange(trip.dateFrom, trip.dateTo)}
      </Typography>
      <Typography variant="body1">{trip.description}</Typography>
      {trip.expand.images?.length ? <ImageCarousel images={images} setLocation={setCurrentLocation} /> : null}
      <Map center={currentLocation} markers={images.map((image) => image.coords)} />
    </TripDetailsStyled>
  );
};

export default TripDetails;
