import { useQuery } from "react-query";
import pb from "../pb";
import { PBImage } from "../types";

export const useListImages = () => {
  return useQuery(["list-images"], () => {
    return pb.collection("images").getFullList<PBImage>();
  });
};
