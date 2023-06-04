import { NewTripFormData } from "@src/pages";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTrip } from "./useCreateTrip";
import { useForm } from "react-hook-form";
import pb from "@src/pb";
import { FeedbackContext } from "@src/FeedbackContext";
import { useTranslation } from "react-i18next";

export const useNewTripForm = () => {
  const { t } = useTranslation("translation", { keyPrefix: "newTripForm" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewTripFormData>();
  const { setFeedback } = useContext(FeedbackContext)!;

  const onSuccess = () => {
    reset();
    navigate("/trips");
  };

  const { mutate: create } = useCreateTrip(onSuccess);
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState<FileList | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  const createTrip = (data: NewTripFormData) => {
    if (!thumbnail) {
      setFeedback({
        message: t("thumbnailRequired"),
        severity: "error",
      });
      return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("dateFrom", data.dateFrom);
    formData.append("dateTo", data.dateTo);
    formData.append("description", data.description);
    formData.append("owner", pb.authStore.model!.id);
    try {
      create({ data: formData, thumbnail: thumbnail[0], images });
    } catch (err) {
      setFeedback({
        message: t("createError"),
        severity: "error",
      });
    }
  };

  return { t, register, handleSubmit, images, setImages, createTrip, thumbnail, setThumbnail, errors };
};
