import styled from "styled-components";
import { Paper } from "@mui/material";

export const NewTripFormStyled = styled(Paper)`
  width: 40%;
  min-height: 100%;
  padding: 1em;
  box-sizing: border-box;

  form {
    display: grid;
    justify-items: center;
    gap: 1em;
    grid-template-columns: repeat(4, 1fr);
  }

  form .title {
    grid-column: span 4;
  }

  form .MuiTextField-root {
    grid-column: span 4;
  }

  form .dateField {
    grid-column: span 2;
  }

  form button {
    grid-column: 2 / 4;
    width: 100%;
    color: white;
  }

  form .fileUploadButton {
    grid-column: span 3;
    justify-self: flex-start;
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
  }

  @media screen and (max-width: 376px) {
    form .dateField {
      grid-column: span 4;
    }
  }
`;
