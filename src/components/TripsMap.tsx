import React from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { PBImage, PBTrip } from "../types";
import { useTripsMap } from "@src/hooks";

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
  const { isLoaded, center, onLoad, onUnmount, clickedImage, clickedTrip, onMarkerClick, onInfoWindowClose } =
    useTripsMap(images, trips);

  return isLoaded && center ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onLoad={onLoad} onUnmount={onUnmount}>
      {images?.map((image) => (
        <Marker position={image.coords} key={image.id} onClick={() => onMarkerClick(image.id)} />
      ))}
      {clickedImage && clickedTrip ? (
        <InfoWindow position={clickedImage.coords} onCloseClick={onInfoWindowClose}>
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
