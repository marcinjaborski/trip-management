import React from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { PBImage, PBTrip } from "../types";
import { useTripsMap } from "@src/hooks";
import { InfoWindowStyled } from "@src/components/styles/InfoWindow.styled";
import { getImageUrl, renderDateRange } from "@src/util";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 120px)",
};

type MapProps = {
  images: PBImage[];
  trips: PBTrip[];
};

export const TripsMap = React.memo((props: MapProps) => {
  const { images, trips } = props;
  const { isLoaded, center, onLoad, onUnmount, clickedImage, clickedTrip, onMarkerClick, onInfoWindowClose } =
    useTripsMap(images, trips);

  return isLoaded && center ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onLoad={onLoad} onUnmount={onUnmount}>
      {images.map((image) => (
        <Marker position={image.coords} key={image.id} onClick={() => onMarkerClick(image.id)} />
      ))}
      {clickedImage && clickedTrip ? (
        <InfoWindow position={clickedImage.coords} onCloseClick={onInfoWindowClose}>
          <InfoWindowStyled>
            <Link to={`trips/${clickedTrip.id}`}>{clickedTrip.name}</Link>
            <span>{renderDateRange(clickedTrip.dateFrom, clickedTrip.dateTo)}</span>
            <img src={getImageUrl(clickedImage)} alt={clickedTrip.name} />
          </InfoWindowStyled>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  ) : (
    <></>
  );
});
