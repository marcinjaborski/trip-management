import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { FileUploadButton } from "@src/components";
import { useNewTripForm } from "@src/hooks";
import { NewTripFormStyled } from "@src/components/styles";

export type NewTripFormData = {
  name: string;
  dateFrom: string;
  dateTo: string;
  description: string;
};

export const NewTripForm = () => {
  const { t, register, handleSubmit, images, setImages, createTrip, thumbnail, setThumbnail, errors } =
    useNewTripForm();

  return (
    <NewTripFormStyled>
      <form onSubmit={handleSubmit(createTrip)}>
        <Typography variant="h4" align="center" className="title">
          {t("title")}
        </Typography>
        <TextField
          fullWidth
          label={t("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register("name", {
            required: t("required")!,
          })}
        />
        <TextField
          fullWidth
          type="date"
          className="dateField"
          label={t("dateFrom")}
          error={!!errors.dateFrom}
          helperText={errors.dateFrom?.message}
          {...register("dateFrom", {
            required: t("required")!,
          })}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          type="date"
          className="dateField"
          label={t("dateTo")}
          error={!!errors.dateTo}
          helperText={errors.dateTo?.message}
          {...register("dateTo", {
            required: t("required")!,
          })}
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
