import { useListImages, useListTrips } from "@src/hooks";
import { TripsMap } from "@src/components";

export const Home = () => {
  const { data: images } = useListImages();
  const { data: trips } = useListTrips("", "dateFrom");

  return trips && images ? <TripsMap images={images} trips={trips} /> : null;
};
