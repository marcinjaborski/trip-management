import { useMutation, useQueryClient } from "react-query";
import pb from "../pb";

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: string) => {
      return pb.collection("trips").delete(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("list-trips");
      },
    }
  );
};
