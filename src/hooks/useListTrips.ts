import { useQuery } from "react-query";
import pb from "../pb";
import { PBTrip } from "../types";

export const useListTrips = (searchParam: string, sortBy: string) => {
  return useQuery(["list-trips", searchParam, sortBy], () => {
    return pb.collection("trips").getFullList<PBTrip>({
      expand: "thumbnail,images",
      filter: `name ~ "${searchParam}" || description ~ "${searchParam}"`,
      sort: sortBy === "dateFrom" || sortBy === "dateTo" ? `${sortBy}` : "",
    });
  });
};
