import { useMutation, useQueryClient } from "react-query";
import pb from "../pb";
import exifr from "exifr";

export const useCreateTrip = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  const createImage = async (image: File): Promise<string> => {
    const formData = new FormData();
    const thumbnailLocation = await exifr.gps(image);
    formData.append("image", image);
    formData.append("coords", JSON.stringify(thumbnailLocation));
    const response = await pb.collection("images").create(formData);
    return response.id;
  };

  return useMutation(
    async ({ data, thumbnail, images }: { data: FormData; thumbnail: File; images: FileList | null }) => {
      const thumbnailId = await createImage(thumbnail);
      data.append("thumbnail", thumbnailId);
      for (const image of images || []) {
        const imageId = await createImage(image);
        data.append("images", imageId);
      }
      return pb.collection("trips").create(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("list-trips");
        onSuccess();
      },
    }
  );
};
