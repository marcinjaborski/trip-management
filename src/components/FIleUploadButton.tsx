import { useTranslation } from "react-i18next";
import { FileUploadButtonStyled } from "./styles/FileUploadButton.styled";
import { useTheme } from "@mui/material";

type FileUploadButtonProps = {
  files: FileList | null;
  onFileSelect: (arg0: FileList | null) => void;
  multiple?: boolean;
};

const FileUploadButton = (props: FileUploadButtonProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "fileUploadButton" });
  const theme = useTheme();
  const { multiple, files, onFileSelect } = props;

  return (
    <FileUploadButtonStyled bgColor={theme.palette.primary.main} className="fileUploadButton">
      <label>
        <input type="file" multiple={multiple} onChange={(event) => onFileSelect(event.target.files)} />
        {multiple ? t("chooseFiles") : t("chooseFile")}
      </label>
      <span>
        {files ? (
          Array.from(files).map((file) => (
            <>
              {file.name}
              <br />
            </>
          ))
        ) : (
          <i className="fileName">{t("none")}</i>
        )}
      </span>
    </FileUploadButtonStyled>
  );
};

export default FileUploadButton;
