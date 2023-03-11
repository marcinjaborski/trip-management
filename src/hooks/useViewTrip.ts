import { useQuery } from "react-query";
import pb from "../pb";
import { Trip } from "../components/TripDetails";

export const useViewTrip = (id: string) => {
  return useQuery(["view-trip", id], () => {
    return pb.collection("trips").getOne(id) as Promise<Trip>;
  });
};
