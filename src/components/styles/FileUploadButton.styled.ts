import styled from "styled-components";

type FileUploadButtonStyledProps = {
  bgColor: string;
};

export const FileUploadButtonStyled = styled.div<FileUploadButtonStyledProps>`
  & {
    display: flex;
    flex-direction: column;
  }
  input {
    display: none;
  }
  label {
    background-color: ${(props) => props.bgColor};
    color: white;
    display: inline-block;
    padding: 0.6em 1em;
    width: fit-content;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 1px 1px gray;
    transition: all 0.2s ease-in-out;
  }
  label:hover {
    filter: brightness(0.9);
    box-shadow: 0 3px 5px gray;
  }
  & > span {
    padding-left: 3px;
  }
`;
