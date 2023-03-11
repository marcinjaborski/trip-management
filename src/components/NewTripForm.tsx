import { NewTripFormStyled } from "./styles/NewTripForm.styled";
import { Button, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import FileUploadButton from "./FIleUploadButton";
import { useCreateTrip } from "../hooks/useCreateTrip";

export type NewTripFormData = {
  name: string;
  dateFrom: string;
  dateTo: string;
  description: string;
};

const NewTripForm = () => {
  const { t } = useTranslation("translation", { keyPrefix: "newTripForm" });
  const { register, handleSubmit, reset } = useForm<NewTripFormData>();
  const { mutate: create } = useCreateTrip();

  const createTrip = (data: NewTripFormData) => {
    create(data);
    reset();
  };
  return (
    <NewTripFormStyled>
      <form onSubmit={handleSubmit(createTrip)}>
        <Typography variant="h4" align="center">
          {t("title")}
        </Typography>
        <TextField fullWidth label={t("name")} {...register("name")} />
        <TextField
          fullWidth
          type="date"
          label={t("dateFrom")}
          {...register("dateFrom")}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          type="date"
          label={t("dateTo")}
          {...register("dateTo")}
          InputLabelProps={{ shrink: true }}
        />
        <FileUploadButton />
        <TextField fullWidth multiline rows={3} label={t("description")} {...register("description")} />
        <Button type="submit" variant="contained">
          {t("create")}
        </Button>
      </form>
    </NewTripFormStyled>
  );
};

export default NewTripForm;
