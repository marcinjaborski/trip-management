import { useMutation, useQueryClient } from "react-query";
import pb from "../pb";
import { PBTrip } from "@src/types";

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (trip: PBTrip) => {
      return Promise.all([
        pb.collection("trips").delete(trip.id),
        pb.collection("images").delete(trip.thumbnail),
        ...[trip.images.map((id) => pb.collection("images").delete(id))],
      ]);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("list-trips");
      },
    }
  );
};
