import { NewTripFormData } from "../components/NewTripForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTrip } from "./useCreateTrip";
import { useForm } from "react-hook-form";

export const useNewTripForm = () => {
  const { register, handleSubmit, reset } = useForm<NewTripFormData>();
  const { mutate: create } = useCreateTrip();
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState<FileList | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  const createTrip = (data: NewTripFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("dateFrom", data.dateFrom);
    formData.append("dateTo", data.dateTo);
    if (images) {
      for (const image of images) {
        formData.append("images", image);
      }
    }
    if (thumbnail) {
      formData.append("images", thumbnail[0]);
    }
    formData.append("description", data.description);
    create(formData);
    reset();
    navigate("/trips");
  };

  return { register, handleSubmit, images, setImages, createTrip, thumbnail, setThumbnail };
};
