import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { PBImage, PBTrip } from "../types";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

type MapProps = {
  images?: PBImage[];
  trips?: PBTrip[];
};

export const TripsMap = React.memo((props: MapProps) => {
  const { images, trips } = props;
  const [clickedMarker, setClickedMarker] = useState("");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });
  const coords = images?.map((image) => image.coords);
  const center = coords?.[0];
  const clickedImage = images?.find((image) => image.id === clickedMarker);
  const clickedTrip = trips?.find((trip) => trip.thumbnail === clickedMarker || trip.images.includes(clickedMarker));

  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (center) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      map?.setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (!center) return;
    map?.setCenter(center);
  }, [center]);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onMarkerClick = (id: string) => {
    setClickedMarker(id);
  };

  return isLoaded && center ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onLoad={onLoad} onUnmount={onUnmount}>
      {images?.map((image) => (
        <Marker position={image.coords} key={image.id} onClick={() => onMarkerClick(image.id)} />
      ))}
      {clickedImage && clickedTrip ? (
        <InfoWindow position={clickedImage.coords} onCloseClick={() => setClickedMarker("")}>
          <div>
            {clickedImage.image}
            <br />
            {clickedTrip.dateFrom} - {clickedTrip.dateTo}
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  ) : (
    <></>
  );
});
