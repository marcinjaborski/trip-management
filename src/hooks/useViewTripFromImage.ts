import { useQuery } from "react-query";
import pb from "../pb";
import { PBTrip } from "../types";

export const useViewTripFromImage = (imageId: string) => {
  return useQuery(["view-trip-from-image", imageId], () => {
    return pb.collection("trips").getFirstListItem<PBTrip>(`thumbnail='${imageId}'`);
  });
};
