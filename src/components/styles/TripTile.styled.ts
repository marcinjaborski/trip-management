import styled from "styled-components";
import { Paper } from "@mui/material";

export const TripTileStyled = styled(Paper)`
  cursor: pointer;
  transition: all 0.1s ease-in !important;
  &:hover {
    transform: translateY(-10px);
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;
