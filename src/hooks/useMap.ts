import { useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useEffect, useState } from "react";
import { MapLocation } from "@src/types";

export const useMap = (center?: MapLocation) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);

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

  return { isLoaded, onLoad, onUnmount };
};
