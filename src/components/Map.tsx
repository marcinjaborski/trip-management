import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MapLocation } from "../types";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

type MapProps = {
  location?: MapLocation;
};

function Map(props: MapProps) {
  const [location, setLocation] = useState<MapLocation | null>(props.location || null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded && location ? (
    <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12} onLoad={onLoad} onUnmount={onUnmount}>
      <Marker position={location}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
