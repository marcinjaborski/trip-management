import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6} onLoad={onLoad} onUnmount={onUnmount}>
      <Marker position={{ lat: -3.745, lng: -38.523 }}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
