import { useMap } from "@src/hooks/useMap";
import { useState } from "react";
import { PBImage, PBTrip } from "@src/types";

export const useTripsMap = (images: PBImage[], trips: PBTrip[]) => {
  const { isLoaded, onLoad, onUnmount } = useMap();
  const [clickedMarker, setClickedMarker] = useState("");

  const clickedImage = images.find((image) => image.id === clickedMarker);
  const clickedTrip = trips.find((trip) => trip.thumbnail === clickedMarker || trip.images.includes(clickedMarker));
  const coords = images.map((image) => image.coords);
  const center = coords?.[0];

  const onMarkerClick = (id: string) => {
    setClickedMarker(id);
  };

  const onInfoWindowClose = () => {
    setClickedMarker("");
  };

  return { isLoaded, center, onLoad, onUnmount, clickedImage, clickedTrip, onMarkerClick, onInfoWindowClose };
};
