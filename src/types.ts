import { Record } from "pocketbase";

export type MapLocation = google.maps.LatLng | google.maps.LatLngLiteral;

export type PBImage = Record & {
  image: string;
  coords: {
    lat: number;
    lng: number;
  };
};

export type PBTrip = Record & {
  dateFrom: string;
  dateTo: string;
  description: string;
  name: string;
  images: string[];
  thumbnail: string[];
  expand: {
    images?: PBImage[];
    thumbnail?: PBImage;
  };
};
