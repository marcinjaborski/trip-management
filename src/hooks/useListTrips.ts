import { useQuery } from "react-query";
import pb from "../pb";

export const useListTrips = (searchParam: string, sortBy: string) => {
  return useQuery(["list-trips", searchParam, sortBy], () => {
    return pb.collection("trips").getFullList({
      filter: `name ~ "${searchParam}" || description ~ "${searchParam}"`,
      sort: sortBy === "dateFrom" || sortBy === "dateTo" ? `${sortBy}` : "",
    });
  });
};
