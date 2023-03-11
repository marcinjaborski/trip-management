import { useQuery } from "react-query";
import pb from "../pb";

export const useListTrips = () => {
  return useQuery("list-trips", () => {
    return pb.collection("trips").getFullList();
  });
};
