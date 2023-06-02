import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MapLocation } from "../types";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

type MapProps = {
  center?: MapLocation;
  markers?: MapLocation[];
};

export const Map = React.memo((props: MapProps) => {
  const { center, markers } = props;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });

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

  return isLoaded && center ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onLoad={onLoad} onUnmount={onUnmount}>
      {markers?.map((coords, index) => (
        <Marker position={coords} key={index} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
});
