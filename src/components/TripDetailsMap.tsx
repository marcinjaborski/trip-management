import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { MapLocation } from "../types";
import { useMap } from "@src/hooks";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

type MapProps = {
  center?: MapLocation;
  markers?: MapLocation[];
};

export const TripDetailsMap = React.memo((props: MapProps) => {
  const { center, markers } = props;
  const { isLoaded, onLoad, onUnmount } = useMap(center);

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
