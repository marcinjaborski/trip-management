import styled from "styled-components";
import { Paper } from "@mui/material";

export const NewTripFormStyled = styled(Paper)`
  width: 40%;
  height: 100%;
  padding: 1em;
  box-sizing: border-box;

  form {
    display: grid;
    justify-items: center;
    gap: 1em;
  }

  form button {
    width: 50%;
  }
`;
