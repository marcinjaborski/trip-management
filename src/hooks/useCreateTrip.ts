import { useMutation } from "react-query";
import { NewTripFormData } from "../components/NewTripForm";
import pb from "../pb";

export const useCreateTrip = () => {
  return useMutation((data: NewTripFormData) => {
    return pb.collection("trips").create(data);
  });
};
