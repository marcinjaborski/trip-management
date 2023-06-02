import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { FileUploadButton } from "@src/components";
import { useTranslation } from "react-i18next";
import { useNewTripForm } from "@src/hooks";
import { NewTripFormStyled } from "@src/components/styles";

export type NewTripFormData = {
  name: string;
  dateFrom: string;
  dateTo: string;
  description: string;
};

export const NewTripForm = () => {
  const { t } = useTranslation("translation", { keyPrefix: "newTripForm" });
  const { register, handleSubmit, images, setImages, createTrip, thumbnail, setThumbnail } = useNewTripForm();

  return (
    <NewTripFormStyled>
      <form onSubmit={handleSubmit(createTrip)}>
        <Typography variant="h4" align="center" className="title">
          {t("title")}
        </Typography>
        <TextField fullWidth label={t("name")} {...register("name")} />
        <TextField
          fullWidth
          type="date"
          className="dateField"
          label={t("dateFrom")}
          {...register("dateFrom")}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          type="date"
          className="dateField"
          label={t("dateTo")}
          {...register("dateTo")}
          InputLabelProps={{ shrink: true }}
        />
        <FormLabel>{t("thumbnail")}</FormLabel>
        <FileUploadButton files={thumbnail} onFileSelect={(files) => setThumbnail(files)} />
        <FormLabel>{t("morePhotos")}</FormLabel>
        <FileUploadButton multiple files={images} onFileSelect={(files) => setImages(files)} />
        <TextField fullWidth multiline rows={3} label={t("description")} {...register("description")} />
        <Button type="submit" variant="contained">
          {t("create")}
        </Button>
      </form>
    </NewTripFormStyled>
  );
};
