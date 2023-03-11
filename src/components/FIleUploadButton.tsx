import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";
import { FileUploadButtonStyled } from "./styles/FileUploadButton.styled";
import { useTheme } from "@mui/material";

type FileUploadButtonProps = {};

const FileUploadButton = (props: FileUploadButtonProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }
  };
  return (
    <FileUploadButtonStyled bgColor={theme.palette.primary.main}>
      <label>
        <input type="file" multiple onChange={onFileSelect} />
        {t("chooseFile") as string}
      </label>
      <span>
        <strong>{t("chosenFile") as string}</strong>
        <i className="fileName">{t("none") as string}</i>
      </span>
    </FileUploadButtonStyled>
  );
};

export default FileUploadButton;
