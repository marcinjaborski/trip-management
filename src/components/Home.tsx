import { useListImages } from "../hooks/useListImages";
import { useListTrips } from "../hooks/useListTrips";
import TripsMap from "./TripsMap";

const Home = () => {
  const { data: images } = useListImages();
  const { data: trips } = useListTrips("", "dateFrom");

  return <TripsMap images={images} trips={trips} />;
};
export default Home;
