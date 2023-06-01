import { useQuery } from "react-query";
import pb from "../pb";
import { PBTrip } from "../types";

export const useViewTrip = (id: string) => {
  return useQuery(["view-trip", id], () => {
    return pb.collection("trips").getOne<PBTrip>(id, {
      expand: "thumbnail,images",
    });
  });
};
