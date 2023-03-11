import { useMutation, useQueryClient } from "react-query";
import pb from "../pb";

export const useCreateTrip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: FormData) => {
      return pb.collection("trips").create(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("list-trips");
      },
    }
  );
};
