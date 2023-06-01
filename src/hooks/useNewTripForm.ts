import { NewTripFormData } from "../components/NewTripForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTrip } from "./useCreateTrip";
import { useForm } from "react-hook-form";

export const useNewTripForm = () => {
  const { register, handleSubmit, reset } = useForm<NewTripFormData>();

  const onSuccess = () => {
    reset();
    navigate("/trips");
  };

  const { mutate: create } = useCreateTrip(onSuccess);
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState<FileList | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  const createTrip = (data: NewTripFormData) => {
    if (!thumbnail) return;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("dateFrom", data.dateFrom);
    formData.append("dateTo", data.dateTo);
    formData.append("description", data.description);
    create({ data: formData, thumbnail: thumbnail[0], images });
  };

  return { register, handleSubmit, images, setImages, createTrip, thumbnail, setThumbnail };
};
