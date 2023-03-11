import styled from "styled-components";
import { Paper } from "@mui/material";

export const TripDetailsStyled = styled(Paper)`
  width: 60%;
  height: 100%;
  padding: 2em;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0.5em;
  }
`;
